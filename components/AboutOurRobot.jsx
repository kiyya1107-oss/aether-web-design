"use client";

import Image from "next/image";

export default function AboutOurRobot() {
  return (
    <section
      id="about"
      /* min-h-screen membuat About Our Robot full 1 layar penuh di HP & Laptop */
      className="w-full min-h-screen text-[#FFF8DD] relative overflow-x-clip flex flex-col justify-between bg-[#1c0703] -mt-6 sm:-mt-10 lg:-mt-14 z-20"
    >
      {/* 1. BACKGROUND DASAR TUNGGAL */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098070.png"
          alt="About Our Robot Background"
          fill
          sizes="100vw"
          className="object-cover lg:object-fill scale-105"
          priority
        />
      </div>

      {/* 2. AREA KONTEN UTAMA (Full layar vertikal di HP, Robot Kiri + Teks Kanan di Laptop) */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-16 pb-24 lg:pt-28 lg:pb-32 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 relative z-20 my-auto">
        
        {/* GAMBAR RENDER ROBOT (Di bawah teks saat di HP, di kiri saat di Laptop) */}
        <div className="w-full sm:w-[80%] lg:w-[48%] relative z-20 flex items-center justify-center">
          <Image
            src="/images/bagian our robot.png"
            alt="Ander Wanmil Robotic Arm"
            width={727}
            height={484}
            className="w-full max-w-[380px] lg:max-w-none h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] lg:scale-110"
            priority
          />
        </div>

        {/* JUDUL & DESKRIPSI */}
        <div className="flex flex-col space-y-3 lg:space-y-4 w-full lg:w-[50%] text-left relative z-10">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-tight">
            About Our Robot
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-[21px] font-medium leading-relaxed text-[#FFF8DD]/95 pt-1">
            Ander Wanmil is a robotic arm developed by AETHER to explore precision-based robotic manipulation. Featuring an articulated mechanical structure, servo-driven joints, and a two-finger gripper, the robot is designed to perform controlled movements and interact with surrounding objects.
          </p>
        </div>

      </div>

      {/* 3. GARIS PEMBATAS BAWAH (Diturunkan sedikit -bottom-1 agar menutup garis hitam bolong) */}
      <div className="w-full absolute -bottom-1 left-0 z-30 pointer-events-none leading-none">
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
