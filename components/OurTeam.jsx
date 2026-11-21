"use client";

import Image from "next/image";

export default function OurTeam() {
  // Urutan kartu disesuaikan persis dengan desain Figma (Baris 1: Bhrama, Manik, Faris | Baris 2: Damai, Kurnia, Dzakiyyah)
  // Nama file gambar menggunakan nama persis seperti di dalam kurung: bhrama, bian, faris, damai, laras, aku
  const teamMembers = [
    {
      name: "Bhrama Maheswara As Siddiq",
      position: "Programming",
      image: "/images/bhrama.jpeg",
    },
    {
      name: "Manik Fabianus Christoper",
      position: "Electrical",
      image: "/images/bian.jpeg",
    },
    {
      name: "Faris Nauval Rizqullah",
      position: "Mechanical",
      image: "/images/faris.jpeg",
    },
    {
      name: "Muhammad Damai Abdullah",
      position: "Media Creative",
      image: "/images/damai.jpeg",
    },
    {
      name: "Kurnia Larasing Arti",
      position: "Admin and Finance",
      image: "/images/laras.jpeg",
    },
    {
      name: "Dzakiyyah Sayidatun Nisa",
      position: "Web Development",
      image: "/images/aku.jpeg",
    },
  ];

  return (
    <section
      id="team"
      className="w-full relative overflow-hidden py-14 sm:py-20 lg:py-24 text-[#FFF8DD] z-10"
      style={{
        background:
          "linear-gradient(1deg, #702215 0%, #5C1C13 50%, rgba(72, 21, 17, 0) 100%)",
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

      {/* ================= PENDARAN CAHAYA LATAR KIRI & KANAN ================= */}
      <div
        className="absolute -left-32 top-16 w-[400px] lg:w-[650px] h-[400px] lg:h-[650px] rounded-full pointer-events-none z-0 opacity-45 blur-[90px] lg:blur-[110px]"
        style={{
          background: "radial-gradient(circle, #E09F3E 0%, rgba(158, 42, 43, 0) 70%)",
          transform: "rotate(14deg)",
        }}
      ></div>
      <div
        className="absolute -right-32 top-24 w-[400px] lg:w-[650px] h-[400px] lg:h-[650px] rounded-full pointer-events-none z-0 opacity-45 blur-[90px] lg:blur-[110px]"
        style={{
          background: "radial-gradient(circle, #E09F3E 0%, rgba(158, 42, 43, 0) 70%)",
          transform: "rotate(-168deg)",
        }}
      ></div>

      {/* ================= AREA KONTEN UTAMA ================= */}
      <div className="max-w-6xl mx-auto px-3 sm:px-8 lg:px-12 relative z-10">
        {/* Judul Utama Our Team */}
        <h2 className="font-colombo text-4xl sm:text-6xl lg:text-[84px] text-[#FFF8DD] leading-none tracking-tight mb-6 sm:mb-10 lg:mb-12 text-left">
          Our Team
        </h2>

        {/* Grid 6 Kartu Anggota (Selalu 3 Kolom x 2 Baris di HP maupun Laptop agar 11/12) */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full py-4 sm:py-7 lg:py-8 px-2 sm:px-5 border border-[#FFCA9A]/25 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 202, 154, 0.17) 0%, rgba(255, 186.63, 124.71, 0) 43%, rgba(255, 166.48, 86.31, 0.17) 100%)",
                boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "24px",
              }}
            >
              {/* Lingkaran Foto Profil (135px di laptop) */}
              <div className="w-[62px] h-[62px] sm:w-[105px] sm:h-[105px] lg:w-[135px] lg:h-[135px] bg-[#D9D9D9] rounded-full mb-2.5 sm:mb-4 lg:mb-5 relative overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 64px, 135px"
                  className="object-cover object-top"
                />
              </div>

              {/* Nama Lengkap Anggota */}
              <h3 className="font-body font-bold text-[11px] sm:text-[18px] lg:text-[24px] text-[#FFF8DD] leading-tight capitalize">
                {member.name}
              </h3>

              {/* Divisi / Jabatan */}
              <p className="font-body font-normal text-[9px] sm:text-[14px] lg:text-[19px] text-[#FFF8DD]/90 leading-snug mt-0.5 sm:mt-1 capitalize">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
