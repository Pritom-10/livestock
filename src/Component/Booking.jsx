"use client";
import React from "react";
import { FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import successAnimation from "../animation/success.json";

const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.custom(() => (
      <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
        <Lottie animationData={successAnimation} className="w-12" />
        <p className="text-green-600 font-medium">Booking Successful!</p>
      </div>
    ));
  };
  return (
    <div>
      <Modal>
        <Button variant="secondary">
          <FaShoppingCart /> Booking Now
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaClipboardList className=" size-5" />
                </Modal.Icon>
                <Modal.Heading>Your Details</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input name="name" placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email">
                      <Label>Email</Label>
                      <Input name="email" placeholder="Enter Your Email" />
                    </TextField>
                    <TextField className="w-full" name="number" type="number">
                      <Label>Phone Number</Label>
                      <Input name="image" placeholder="Enter Your Email" />
                    </TextField>
                    <TextField className="w-full" name="address" type="text">
                      <Label>Address</Label>
                      <Input name="image" placeholder="Enter Your Email" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Save</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default Booking;
