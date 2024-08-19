"use client";

import Image from "next/image";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import getEmailAdress from "@/app/api/reciveEmail";
import { useState } from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function HomeGettingStarted() {
  const [email, setEmail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mutation = useMutation({ mutationFn: getEmailAdress });

  const getEmail = (e: any) => {
    e.preventDefault();
    onOpen;
    mutation.mutate({ email: email });
  };

  return (
    <div className="flex py-12 justify-between items-center w-[95%] ml-auto mr-auto pt-5">
      <div className="gap-8 flex flex-col">
        <h1 className="!text-[#000] text-[4rem]">
          Getting started with Yurikaza VPN is easier than ever
        </h1>
        <p className="text-[2rem] text-[#4d4d4d]">
          Secure your browsing, protect your privacy, and explore the power of
          blockchain. Be among the first to experience Yurikaza VPN.
        </p>
        <form onSubmit={getEmail} method="post">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5"
            style={{
              borderColor: "#000",
              height: "3rem",
            }}
          />
          <Button
            onClick={onOpen}
            type="submit"
            className="flex gap-4 !h-[3rem] !w-[9rem]"
            style={{
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            Join the Beta
            <Image
              src="/icons/tail-right.svg"
              alt="tail-right"
              width={10}
              height={10}
            />
          </Button>
        </form>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thank you for subscribing! 🎉 </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Check your inbox for a welcome message from Yurikaza VPN. We’re
              excited to keep you updated on our journey towards a more secure
              and private internet.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <Player
        autoplay
        loop
        src="/animations/Animation - 1723699689214.json"
        style={{ height: "800px", width: "800px", paddingTop: 30 }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
