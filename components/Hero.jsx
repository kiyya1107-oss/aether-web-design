"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[60vw] lg:min-h-screen relative overflow-hidden flex flex-col justify-between bg-transparent z-30"
    >
      {/* Memuat Font Stencil Asli Post No Bills Colombo */}
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

      {/* ================= 1. GAMBAR BACKGROUND UTAMA DARI FIGMA ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Group 48098069.png"
          alt="Hero Background Design"
          fill
          sizes="100vw"
          className="object-fill"
          priority
        />
      </div>

      {/* ================= 2. LOGO TIM DI POJOK KANAN ATAS (rectangle 17733019) ================= */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-6 lg:top-6 lg:right-10 z-30 pointer-events-none">
        <Image
          src="/images/Rectangle 17733019.png"
          alt="Team Logo Top Right"
          width={87}
          height={92}
          className="w-[34px] sm:w-[55px] lg:w-[75px] h-auto object-contain"
          priority
        />
      </div>

      {/* ================= BARIS MENU ATAS (NAVBAR) ================= */}
      <nav className="w-full bg-transparent relative z-30 pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-8 lg:gap-12 text-[11px] sm:text-[14px] lg:text-[15px] font-semibold font-body text-[#FFF8DD]/90">
          <a href="#home" className="hover:text-[#EC6D03] tracking-wide transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#EC6D03] tracking-wide transition-colors">
            About
          </a>
          <a href="#robot" className="hover:text-[#EC6D03] tracking-wide transition-colors">
            Robot
          </a>
          <a href="#team" className="hover:text-[#EC6D03] tracking-wide transition-colors">
            Team
          </a>
          <a href="#sponsor" className="hover:text-[#EC6D03] tracking-wide transition-colors">
            Sponsor
          </a>
        </div>
      </nav>

      {/* ================= AREA KONTEN UTAMA HERO (SEJAJAR KIRI-KANAN DI HP MAUPUN LAPTOP) ================= */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex flex-row items-center justify-between gap-3 sm:gap-8 lg:gap-10 pt-4 pb-12 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-32 relative z-20 my-auto">
        
        {/* SISI KIRI: IDENTITAS TIM AETHER & TAGLINE */}
        <div className="flex flex-col space-y-0.5 sm:space-y-1 w-[52%] lg:max-w-xl text-left relative z-10">
          <span className="text-[#FFF8DD] font-semibold text-[9px] sm:text-sm lg:text-[20px] tracking-wider font-body uppercase">
            ROBOTIC RESEARCH TEAM
          </span>

          <h1
            className="font-colombo text-4xl sm:text-7xl lg:text-[120px] leading-[0.88] uppercase tracking-tight bg-gradient-to-b from-[#FF8C1A] via-[#EC6D03] to-[#6e2409] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
          >
            AETHER
          </h1>

          <h2
            className="font-colombo text-xl sm:text-4xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-[1.5px] sm:tracking-[4px] pt-0.5 sm:pt-1"
            style={{ textShadow: "0px 3px 5px rgba(0, 0, 0, 0.65)" }}
          >
            Robot Name
          </h2>

          <p className="font-body text-[10px] sm:text-base lg:text-[21px] font-normal text-[#FFF8DD]/90 pt-1 sm:pt-3 leading-tight">
            Precision in Motion, Innovation In Action
          </p>

          <div className="pt-2 sm:pt-5 lg:pt-7 flex justify-start">
            <a
              href="#about"
              className="w-[100px] sm:w-[150px] lg:w-[175px] h-[28px] sm:h-[42px] lg:h-[48px] text-[#FFFCF2] font-body font-semibold text-[11px] sm:text-[15px] lg:text-[17px] rounded-full transition-transform hover:scale-105 flex items-center justify-center shadow-xl"
              style={{
                background: "linear-gradient(90deg, #F67301 0%, #9e3914 100%)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* SISI KANAN: BINGKAI UTAMA FOTO/RENDER ROBOT */}
        <div className="w-[46%] lg:w-full lg:max-w-[540px] aspect-[16/10.5] relative z-20 flex items-center justify-center">
          <div
            className="w-full h-full bg-[#D3D9E7] border-[2.5px] sm:border-[4.5px] border-[#FFFCF2] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center"
            style={{ borderRadius: "16px" }}
          >
            <span className="text-[#110502]/30 font-colombo text-[10px] sm:text-sm lg:text-lg uppercase tracking-widest text-center px-1">
              [ Image Place ]
            </span>
          </div>
        </div>
      </div>

                {/* ================= 3. GARIS PEMBATAS BAWAH HERO (Menempel penuh dari pinggir kiri layar) ================= */}
      <div className="w-[102%] absolute bottom-0 left-0 -translate-x-1 z-30 pointer-events-none leading-none">
        <Image
          src="/images/Rectangle 17732977.png"
          alt="Hero Bottom Divider"
          width={1439}
          height={93}
          className="w-full h-auto object-fill block"
          priority
        />
      </div>
    </section>
  );
}
