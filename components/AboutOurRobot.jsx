"use client";

import Image from "next/image";

export default function AboutOurRobot() {
  return (
    <section
      id="about"
      className="w-full text-[#FFF8DD] relative overflow-x-clip flex flex-col justify-between bg-[#1c0703] -mt-10 sm:-mt-12 lg:-mt-14 z-20"
    >
      {/* ================= 1. BG ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098070.png"
          alt="About Our Robot Background"
          fill
          sizes="100vw"
          className="object-cover object-center scale-110 translate-x-1 translate-y-3 sm:translate-x-1 sm:translate-y-4 lg:translate-x-2 lg:translate-y-11"
          priority
        />
      </div>

      {/* ================= 2. AREA KONTEN UTAMA  ================= */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-10 pb-10 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 flex flex-row items-center justify-between gap-3 sm:gap-8 lg:gap-12 relative z-20">
        
        {/* SISI KIRI: GAMBAR RENDER ROBOT TANPA KOTAK (bagian our robot.png - 727 x 484) */}
        <div className="w-[46%] lg:w-[48%] relative z-20 flex items-center justify-center">
          <Image
            src="/images/bagian about robot.png"
            alt="Ander Wanmil Robotic Arm"
            width={727}
            height={484}
            className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] scale-105 lg:scale-110"
            priority
          />
        </div>

        <div className="flex flex-col space-y-1.5 sm:space-y-3 lg:space-y-4 w-[52%] lg:w-[50%] text-left relative z-10">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-tight whitespace-nowrap">
            About Our Robot
          </h2>

          <p className="font-body text-[10px] sm:text-base lg:text-[21px] font-medium leading-snug text-[#FFF8DD]/95 pt-0.5 sm:pt-1">
            Ander Wanmil is a robotic arm developed by AETHER to explore precision-based robotic manipulation. Featuring an articulated mechanical structure, servo-driven joints, and a two-finger gripper, the robot is designed to perform controlled movements and interact with surrounding objects.
          </p>
        </div>

      </div>

            {/* ================= 3. GARIS PEMBATAS BAWAH ================= */}
       <div className="w-[104%] absolute bottom-0 -left-2 translate-x-1 translate-y-0 lg:translate-x-4 lg:-translate-y-3 z-30 pointer-events-none leading-none">
        <Image
          src="/images/Rectangle 17732981.png"
          alt="About Bottom Divider"
          width={1440}
          height={113}
          className="w-full h-auto object-fill block"
        />
      </div>
    </section>
  );
}
