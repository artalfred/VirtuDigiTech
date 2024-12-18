"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/app/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

import pic from "@/public/Images/Background/Ads.jpg";
import { Button } from "./button";
import Link from "next/link";

export function PopUp() {
  const images = [pic];
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="light-button flex justify-center group/modal-btn">
          <Button width="" background="light">
            Refer & Earn Now 💸
          </Button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="flex justify-center items-center">
              <Image
                src={pic}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg object-cover flex-shrink-0"
              />
            </div>
            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto mt-4">
              <div className="flex  items-center justify-center">
                <Link
                  href={`https://wa.me/+639567612014`}
                  target="_blank"
                  passHref
                >
                  <Button width="" background="dark">
                    WhatsApp
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex  items-center justify-center">
                  <Link href="/contact">
                    <Button width="" background="light">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContent>
          {/* <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
}
