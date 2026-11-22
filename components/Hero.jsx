"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between bg-transparent z-30"
    >
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

      {/* 1. BACKGROUND UTAMA */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Group 48098069.png"
          alt="Hero Background Design"
          fill
          sizes="100vw"
          className="object-cover lg:object-fill"
          priority
        />
      </div>

      {/* 2. LOGO POJOK KANAN ATAS */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-6 lg:top-6 lg:right-10 z-30 pointer-events-none">
        <Image
          src="/images/Rectangle 17733019.png"
          alt="Team Logo Top Right"
          width={87}
          height={92}
          className="w-[44px] sm:w-[55px] lg:w-[75px] h-auto object-contain"
          priority
        />
      </div>

      {/* NAVBAR */}
      <nav className="w-full bg-transparent relative z-30 pt-5 sm:pt-6 lg:pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-[12px] sm:text-[14px] lg:text-[15px] font-semibold font-body text-[#FFF8DD]/90">
          <a href="#home" className="hover:text-[#EC6D03] tracking-wide transition-colors">Home</a>
          <a href="#about" className="hover:text-[#EC6D03] tracking-wide transition-colors">About</a>
          <a href="#robot" className="hover:text-[#EC6D03] tracking-wide transition-colors">Robot</a>
          <a href="#team" className="hover:text-[#EC6D03] tracking-wide transition-colors">Team</a>
          <a href="#sponsor" className="hover:text-[#EC6D03] tracking-wide transition-colors">Sponsor</a>
        </div>
      </nav>

      {/* KONTEN UTAMA HERO */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between gap-6 lg:gap-8 pt-6 pb-20 lg:pt-8 lg:pb-28 relative z-20 my-auto">
        
        {/* TEKS IDENTITAS */}
        <div className="flex flex-col space-y-1 w-full lg:w-[50%] lg:max-w-xl text-left relative z-10">
          <span className="text-[#FFF8DD] font-semibold text-xs sm:text-sm lg:text-[20px] tracking-wider font-body uppercase">
            ROBOTIC RESEARCH TEAM
          </span>

          <h1
            className="font-colombo text-6xl sm:text-7xl lg:text-[120px] leading-[0.88] uppercase tracking-tight bg-gradient-to-b from-[#FF8C1A] via-[#EC6D03] to-[#6e2409] bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
          >
            AETHER
          </h1>

          <h2
            className="font-colombo text-3xl sm:text-4xl lg:text-[64px] text-[#FFF8DD] leading-none tracking-[2px] sm:tracking-[4px] pt-1"
            style={{ textShadow: "0px 3px 5px rgba(0, 0, 0, 0.65)" }}
          >
            Ander Wanmil
          </h2>

          <p className="font-body text-sm sm:text-base lg:text-[21px] font-normal text-[#FFF8DD]/90 pt-2 sm:pt-3 leading-snug max-w-md">
            Precision in Motion, Innovation In Action
          </p>

          <div className="pt-4 sm:pt-5 lg:pt-7 flex justify-start">
            <a
              href="#about"
              className="w-[185px] sm:w-[205px] lg:w-[235px] h-[42px] sm:h-[46px] lg:h-[52px] px-4 sm:px-5 text-[#FFFCF2] font-body font-semibold text-xs sm:text-[15px] lg:text-[18px] rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2.5 lg:gap-3 shadow-xl group whitespace-nowrap"
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

        {/* RENDER 3D ROBOT */}
        <div className="w-full sm:w-[80%] lg:w-[54%] mx-auto lg:mx-0 relative z-20 flex items-center justify-center lg:justify-end">
          <Image
            src="/images/bagian hero.png"
            alt="Ander Wanmil Robotic Arm"
            width={886}
            height={591}
            className="w-full max-w-[420px] lg:max-w-none h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] lg:scale-110"
            priority
          />
        </div>
      </div>

      {/* 3. GARIS PEMBATAS BAWAH HERO */}
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
