"use client";

import Image from "next/image";

export default function SponsorsSection() {
  return (
    <section
      id="sponsor"
      className="w-full relative overflow-hidden py-16 sm:py-24 lg:py-28 text-[#FFF8DD] z-10 bg-[#3a1612]"
    >
      {/* Memuat Font Stencil Asli Post No Bills Colombo */}
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

      {/* ================= 1. GARIS ATAS ORANYE (Dinaikkan ke top-0) ================= */}
      <div
        className="w-full h-[10px] sm:h-[15px] absolute top-0 left-0 z-20"
        style={{
          background: "linear-gradient(90deg, #BB4D1C 0%, #EF6E04 50%, #BB4D1C 100%)",
        }}
      ></div>

      {/* ================= 2. BACKGROUND UTAMA (Dinaikkan ke atas dengan -translate-y-4) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/Group 48098074.png"
          alt="Our Sponsors Background"
          fill
          sizes="100vw"
          className="object-cover object-center lg:object-fill scale-105 -translate-y-4"
          priority
        />
      </div>

      {/* ================= 3. AREA KONTEN UTAMA ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Judul & Subjudul */}
        <div className="text-left mb-8 sm:mb-12 lg:mb-14">
          <h2 className="font-colombo text-4xl sm:text-6xl lg:text-[90px] text-[#FFF8DD] leading-none tracking-tight">
            Our Sponsors
          </h2>
          <p className="font-body text-xs sm:text-lg lg:text-[26px] font-medium text-[#FFF8DD]/95 mt-2 sm:mt-3">
            Together, we build a greater future.
          </p>
        </div>

        {/* Grup Gambar Susunan 16 Kotak Logo (Group 48098198.png) */}
        <div className="w-full max-w-4xl mx-auto flex justify-center">
          <Image
            src="/images/Group 48098198.png"
            alt="Our Sponsors Logos"
            width={1100}
            height={650}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>

      {/* ================= 4. GARIS PEMBATAS BAWAH (Ikut dinaikkan ke bottom-4) ================= */}
      <div
        className="w-full h-[10px] sm:h-[15px] absolute bottom-4 left-0 z-20"
        style={{
          background: "linear-gradient(90deg, #BB4D1C 0%, #EF6E04 50%, #BB4D1C 100%)",
        }}
      ></div>
    </section>
  );
}
