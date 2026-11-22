"use client";

import Image from "next/image";

export default function AboutOurRobot() {
  return (
    <section
      id="about"
      /* min-h-[100dvh] membuat seksi ini penuh satu layar di HP maupun Laptop */
      className="w-full min-h-[100dvh] text-[#FFF8DD] relative overflow-hidden flex flex-col justify-between bg-[#1c0703] -mt-4 sm:-mt-8 lg:-mt-12 z-20"
    >
      {/* ================= 1A. BACKGROUND KHUSUS HP (Gradasi hangat menyatu tanpa bolong) ================= */}
      <div
        className="absolute inset-0 pointer-events-none z-0 md:hidden"
        style={{
          background:
            "radial-gradient(circle at 25% 70%, rgba(236, 109, 3, 0.38) 0%, rgba(119, 34, 25, 0.78) 55%, #1c0703 95%)",
        }}
      ></div>

           {/* ================= 1B. BACKGROUND LAPTOP (Ditarik lebih ke atas dengan -top-[24%] agar menutup bolongan bawah) ================= */}
      <div className="hidden md:block absolute inset-x-0 -top-[24%] bottom-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098070.png"
          alt="About Our Robot Background"
          width={1440}
          height={900}
          className="w-full h-[124%] object-fill translate-x-1"
          priority
        />
      </div>

      {/* ================= 2. AREA KONTEN UTAMA ================= */}
      {/* Di HP: flex-col-reverse (Teks besar di atas, Robot besar di bawah seperti Abinara-1) */}
      {/* Di Laptop: md:flex-row (Robot di kiri, Teks di kanan sesuai desain Figma) */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-16 pb-20 lg:pt-28 lg:pb-32 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-10 lg:gap-12 relative z-20 my-auto">
        
        {/* GAMBAR RENDER ROBOT (bagian about robot.png - 727 x 484) */}
        <div className="w-full md:w-[48%] relative z-20 flex items-center justify-center">
          <Image
            src="/images/bagian about robot.png"
            alt="Ander Wanmil Robotic Arm"
            width={727}
            height={484}
            className="w-[88%] max-w-[360px] md:max-w-none md:w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] md:scale-110"
            priority
          />
        </div>

        {/* BLOK JUDUL & DESKRIPSI */}
        <div className="flex flex-col space-y-3 md:space-y-4 w-full md:w-[50%] text-left relative z-10">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-tight">
            About Our Robot
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-[21px] font-medium leading-relaxed text-[#FFF8DD]/95 pt-1">
            Ander Wanmil is a robotic arm developed by AETHER to explore precision-based robotic manipulation. Featuring an articulated mechanical structure, servo-driven joints, and a two-finger gripper, the robot is designed to perform controlled movements and interact with surrounding objects.
          </p>
        </div>

      </div>

              {/* ================= 3. GARIS PEMBATAS BAWAH (mix-blend-lighten melarutkan warna hitamnya) ================= */}
      <div className="w-[104%] absolute -bottom-1 -left-2 translate-x-1 md:translate-x-2 z-30 pointer-events-none leading-none">
        <Image
          src="/images/Rectangle 17732981.png"
          alt="About Bottom Divider"
          width={1440}
          height={113}
          className="w-full h-auto object-fill block mix-blend-lighten"
        />
      </div>
    </section>
  );
}
