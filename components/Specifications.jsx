"use client";

import Image from "next/image";

export default function Specifications() {
  const specs = [
    {
      title: "Mechanical",
      icon: "/images/ant-design_setting-filled.png",
    },
    {
      title: "Electrical",
      icon: "/images/game-icons_electric.png",
    },
    {
      title: "Programming",
      icon: "/images/streamline_bracket.png",
    },
  ];

  return (
    <section
      id="robot"
      className="w-full relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 -mt-4 sm:-mt-6 lg:-mt-8 z-10 bg-transparent"
      style={{
        background:
          "linear-gradient(180deg, #A13A19 0%, rgba(77.48, 43.63, 32.78, 0.20) 100%)",
      }}
    >
      {/* Memuat Font Stencil Asli Post No Bills Colombo */}
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* ================= JUDUL UTAMA SPECIFICATIONS ================= */}
        <h2 className="font-colombo text-5xl sm:text-6xl lg:text-[84px] text-[#FFF8DD] leading-none tracking-tight mb-12 text-center lg:text-left">
          Specifications
        </h2>

        {/* ================= GRID 3 KARTU KREM (#FFCA9A) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {specs.map((item, index) => (
            <div
              key={index}
              className="w-full h-[270px] sm:h-[294px] bg-[#FFCA9A] border-[1.29px] border-[#772219] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:-translate-y-1.5 transition-transform duration-300"
              style={{ borderRadius: "32.27px" }}
            >
              {/* Ruang Kosong Atas (Untuk diisi poin detail teknis nanti) */}
              <div className="w-full flex-1"></div>

              {/* Baris Ikon & Nama Divisi di Pojok Kiri Bawah Kartu */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-7 h-7 relative flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.title} Icon`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-body font-bold text-[22px] sm:text-[25px] text-[#772219] leading-none">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
