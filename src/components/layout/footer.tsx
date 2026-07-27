"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="relative h-[474px] w-full overflow-hidden bg-[#FFF5EF]">
      {/* Background */}
      <Image
        src="/assets/landing/footer-bg.png"
        alt="Footer Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-between px-[127px]">
        {/* Left Section */}
        <div className="flex h-[288px] max-w-[520px] flex-col justify-between">
          <div>
            <h3 className="text-[32px] font-semibold leading-tight text-[#111827]">
              Accelerate Your{" "}
              <span className="text-[#CC5500]">
                Professional
                <br />
                Presence With AI
              </span>
            </h3>

            <div className="mt-10 flex gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/signup">Get Started</Link>
              </Button>

              <Button
                asChild
                variant="outline-primary"
                size="xl"
                className="w-full bg-background sm:w-auto"
              >
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>

          <p className="text-sm text-[#111827]">
            2026 Dzyme.me All rights reserved
          </p>
        </div>

        {/* Right Section */}
        <div className="flex h-[288px] w-[256px] flex-col justify-between">
  {/* Links */}
  <div className="flex justify-between">
    {/* Legal */}
    <div className="flex flex-col gap-4">
      <h3 className="text-[20px] font-semibold text-[#111827]">
        Legal
      </h3>

      <div className="flex flex-col gap-3 text-[14px] text-[#111827]">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>

    {/* Quick Access */}
    <div className="flex flex-col gap-4 text-right">
      <h3 className="text-[20px] font-semibold text-[#111827]">
        Quick Access
      </h3>

      <div className="flex flex-col gap-3 text-[14px] text-[#111827]">
        <a href="#">Home</a>
        <a href="#">Integration's</a>
        <a href="#">Pricing</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  </div>

  {/* Social */}
  <div className="flex justify-end gap-4 py-12">
    <div className="flex h-[36px] w-[180px] items-center justify-between rounded-[8px] bg-[#E8B184] px-4 py-2 ">
      <FaFacebookF size={20} />
      <RiTwitterXLine size={20} />
      <FaLinkedinIn size={20} />
      <FaInstagram size={20} />
    </div>
  </div>
</div>
      </div>
    </footer>
  );
}

export { Footer };