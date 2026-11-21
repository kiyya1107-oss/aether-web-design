"use client";

import Image from "next/image";

export default function AboutOurRobot() {
  return (
        <section
      id="about"
      /* Di HP ditarik lebih naik (-mt-10) agar langsung menyatu di bawah Hero */
      className="w-full text-[#FFF8DD] relative overflow-x-clip flex flex-col justify-between bg-[#1c0703] -mt-10 sm:-mt-12 lg:-mt-14 z-20"
    >
      {/* ================= 1. BACKGROUND DASAR TUNGGAL ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098070.png"
          alt="About Our Robot Background"
          fill
          sizes="100vw"
          className="object-cover object-center scale-110 translate-x-0 translate-y-0 sm:translate-x-1 sm:translate-y-4 lg:translate-x-2 lg:translate-y-11"
          priority
        />
      </div>

      {/* ================= 2. AREA KONTEN UTAMA ================= */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 flex flex-row items-center justify-between gap-4 sm:gap-8 lg:gap-10 relative z-20">
        
        {/* BLOK TEKS KIRI */}
        <div className="flex flex-col space-y-1.5 sm:space-y-3 lg:space-y-4 w-[52%] lg:w-[53%] text-left relative z-10">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[58px] text-[#FFF8DD] leading-none tracking-tight whitespace-nowrap">
            About Our Robot
          </h2>

          <p className="font-body text-[10px] sm:text-base lg:text-[20px] font-medium leading-snug text-[#FFF8DD]/95 pt-0.5 sm:pt-1">
            Short descripttion about the robot, it’s purpose,
            <br className="hidden sm:inline" /> and how it works. Keep it concise and clear
          </p>

          <div className="pt-2 sm:pt-4 lg:pt-5 flex justify-start">
            <a
              href="#robot"
              className="w-[105px] sm:w-[155px] lg:w-[182px] h-[28px] sm:h-[44px] lg:h-[51.69px] text-[#FFF8DD] font-body font-semibold text-[11px] sm:text-[16px] lg:text-[18px] rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-1.5 sm:gap-3 shadow-xl group"
              style={{
                background: "linear-gradient(90deg, #BB4D1C 0%, #EF6E04 100%)",
              }}
            >
              <span>Learn More</span>
              <Image
                src="/images/akar-icons_arrow-right.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform object-contain"
              />
            </a>
          </div>
        </div>

        {/* BINGKAI FOTO/RENDER ROBOT KANAN */}
        <div className="w-[46%] lg:w-[45%] lg:max-w-[480px] aspect-[496/329] relative z-20 flex items-center justify-center">
          <div
            className="w-full h-full bg-[#D3D9E7] border-[2.5px] sm:border-[4.61px] border-[#FFFCF2] shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden flex items-center justify-center"
            style={{ borderRadius: "24px" }}
          >
            <span className="text-[#110502]/30 font-heading text-[10px] sm:text-sm lg:text-lg uppercase tracking-widest text-center px-1">
              [ Image Place ]
            </span>
          </div>
        </div>
      </div>

            {/* ================= 3. GARIS PEMBATAS BAWAH (Mentok penuh dari pinggir kiri layar) ================= */}
      <div className="w-full absolute bottom-0 left-0 translate-y-1 z-30 pointer-events-none leading-none">
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
