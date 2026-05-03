"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  const handleSignout = async() => {
    await authClient.signOut()
  }
  const path = usePathname();
 const linkStyle = (route) => {
   const isActive = route === "/" ? path === "/" : path.startsWith(route);

   return `px-4 py-2 rounded-lg transition font-medium ${
     isActive
       ? "bg-white text-green-600 shadow-md"
       : "text-gray-700 hover:bg-gray-100"
   }`;
  };
  
 const isAuthPage = path === "/signup" || path === "/signin";
  return (
    <div className="pb-28">
      <nav className="fixed top-0 backdrop-blur-md bg-white/30 shadow-md flex justify-between items-center py-3 w-full px-6">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={70}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="text-4xl font-bold bg-linear-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text">
            LiveStock
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className={linkStyle("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/all-animals"} className={linkStyle("/all-animals")}>
              All Animals
            </Link>
          </li>
          <li>
            <Link href={"/profile"} className={linkStyle("/profile")}>
              Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <div className="flex items-center gap-3 text-sm font-bold">
              <Link
                href="/signup"
                className={`px-4 py-2 rounded-lg transition ${
                  path === "/signup"
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Register
              </Link>

              <Link
                href="/signin"
                className={`px-4 py-2 rounded-lg transition ${
                  path === "/signin"
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Login
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-4">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignout} variant="danger" size="sm">
                Signout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
