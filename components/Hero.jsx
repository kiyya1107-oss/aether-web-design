"use client";

import Image from "next/image";

export default function Hero() {
  return (
        <section
      id="home"
      /* overflow-x-clip membiarkan garis pembatas bawah turun keluar menimpa bagian atas About Our Robot */
      className="w-full min-h-[100dvh] relative overflow-x-clip flex flex-col justify-between bg-[#1c0703] z-30"
    >
      {/* Memuat Font Stencil Asli Post No Bills Colombo */}
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

      {/* ================= 1A. BACKGROUND KHUSUS HP (Gradasi hangat tajam tanpa distorsi) ================= */}
      <div
        className="absolute inset-0 pointer-events-none z-0 md:hidden"
        style={{
          background:
            "radial-gradient(circle at 80% 25%, rgba(236, 109, 3, 0.38) 0%, rgba(119, 34, 25, 0.65) 45%, #1c0703 90%)",
        }}
      ></div>

           {/* ================= 1B. BACKGROUND UTAMA LAPTOP / TABLET (Diturunkan sedikit dengan translate-y-4) ================= */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098069.png"
          alt="Hero Background Design"
          fill
          sizes="100vw"
          className="object-fill scale-105 translate-y-4"
          priority
        />
      </div>

      {/* ================= 2. LOGO TIM DI POJOK KANAN ATAS ================= */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 lg:top-6 lg:right-10 z-30 pointer-events-none">
        <Image
          src="/images/Rectangle 17733019.png"
          alt="Team Logo Top Right"
          width={87}
          height={92}
          className="w-[42px] sm:w-[55px] lg:w-[75px] h-auto object-contain"
          priority
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-transparent relative z-30 pt-5 sm:pt-6 lg:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-[12px] sm:text-[14px] lg:text-[15px] font-semibold font-body text-[#FFF8DD]/90">
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

      {/* ================= AREA KONTEN UTAMA HERO ================= */}
      {/* Di HP: flex-col (Teks besar di atas, Robot besar di bawah seperti Abinara-1) */}
      {/* Di Laptop: md:flex-row (Teks di kiri, Robot di kanan seperti desain Figma) */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-28 relative z-20 my-auto">
        
        {/* BLOK TEKS IDENTITAS */}
        <div className="flex flex-col space-y-1.5 md:space-y-1 w-full md:w-[50%] lg:max-w-xl text-left relative z-10">
          <span className="text-[#FFF8DD] font-semibold text-xs sm:text-sm lg:text-[20px] tracking-[2px] font-body uppercase">
            ROBOTIC RESEARCH TEAM
          </span>

          <h1
            className="font-colombo text-[64px] sm:text-7xl lg:text-[120px] leading-[0.88] uppercase tracking-tight bg-gradient-to-b from-[#FF8C1A] via-[#EC6D03] to-[#6e2409] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
          >
            AETHER
          </h1>

          <h2
            className="font-colombo text-3xl sm:text-4xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-[2px] sm:tracking-[4px] pt-1"
            style={{ textShadow: "0px 3px 5px rgba(0, 0, 0, 0.65)" }}
          >
            Ander Wanmil
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-[21px] font-normal text-[#FFF8DD]/90 pt-2 sm:pt-3 leading-relaxed max-w-sm md:max-w-none">
            Precision in Motion, Innovation In Action
          </p>

          <div className="pt-4 sm:pt-5 lg:pt-7 flex justify-start">
            <a
              href="#about"
              className="w-[195px] sm:w-[205px] lg:w-[235px] h-[44px] sm:h-[46px] lg:h-[52px] px-5 text-[#FFFCF2] font-body font-semibold text-[13px] sm:text-[15px] lg:text-[18px] rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2.5 lg:gap-3 shadow-xl group whitespace-nowrap"
              style={{
                background: "linear-gradient(90deg, #F67301 0%, #9e3914 100%)",
              }}
            >
              <span>Discover Our Robot</span>
              <Image
                src="/images/akar-icons_arrow-right.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform object-contain flex-shrink-0"
              />
            </a>
          </div>
        </div>

        {/* GAMBAR RENDER ROBOT (Besar & proporsional di bagian bawah layar HP seperti Abinara-1) */}
        <div className="w-full md:w-[54%] relative z-20 flex items-center justify-center md:justify-end mt-2 md:mt-0">
          <Image
            src="/images/bagian hero.png"
            alt="Ander Wanmil Robotic Arm"
            width={886}
            height={591}
            className="w-[92%] max-w-[380px] md:max-w-none md:w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] md:scale-110"
            priority
          />
        </div>
      </div>

      {/* ================= 3. GARIS PEMBATAS BAWAH HERO (Turun menimpa di atas About Our Robot) ================= */}
      <div className="w-[102%] absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 left-0 -translate-x-1 z-40 pointer-events-none leading-none">
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
