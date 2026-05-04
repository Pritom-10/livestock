"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignout = async () => {
    await authClient.signOut();
  };
  const path = usePathname();
  const linkStyle = (route) => {
    const isActive = route === "/" ? path === "/" : path.startsWith(route);

    return `px-4 py-2 rounded-lg transition font-medium ${
      isActive
        ? "bg-white text-green-600 shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="pb-28">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md flex lg:justify-between gap-5 items-center py-3 lg:px-6 px-1 mx-auto">
        <div className="flex gap-1 items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"} className={linkStyle("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/all-animals"}
                  className={linkStyle("/all-animals")}
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link href={"/profile"} className={linkStyle("/profile")}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={40}
            height={20}
            className="object-cover h-auto w-auto lg:w-16 lg:h-12"
          />
          <h3 className="text-xl lg:text-4xl font-bold bg-linear-to-r from-green-500 to-emerald-700 text-transparent bg-clip-text">
            LiveStock
          </h3>
        </div>
        <ul className="items-center gap-1 lg:gap-5 text-sm hidden lg:flex">
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
        <div className="flex gap-1 lg:gap-4">
          {!user && (
            <div className="flex items-center gap-1 lg:gap-3 text-sm font-bold">
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
