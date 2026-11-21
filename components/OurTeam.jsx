"use client";

import Image from "next/image";

export default function OurTeam() {
  // Urutan untuk tampilan Laptop (3 kolom x 2 baris sesuai desain desktop)
  const desktopMembers = [
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

  const mobileMembers = [
    {
      name: "Bhrama Maheswara As Siddiq",
      position: "Programming",
      image: "/images/bhrama.jpeg",
    },
    {
      name: "Kurnia Larasing Arti",
      position: "Admin and Finance",
      image: "/images/laras.jpeg",
    },
    {
      name: "Faris Nauval Rizqullah",
      position: "Mechanical",
      image: "/images/faris.jpeg",
    },
    {
      name: "Manik Fabianus Christoper",
      position: "Electrical",
      image: "/images/bian.jpeg",
    },
    {
      name: "Muhammad Damai Abdullah",
      position: "Media Creative",
      image: "/images/damai.jpeg",
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
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

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

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Judul Utama Our Team */}
        <h2 className="font-colombo text-4xl sm:text-6xl lg:text-[84px] text-[#FFF8DD] leading-none tracking-tight mb-7 sm:mb-10 lg:mb-12 text-left">
          Our Team
        </h2>

        <div className="flex flex-col gap-5 md:hidden">
          {mobileMembers.map((member, index) => (
            <div key={index} className="w-full flex items-center gap-3.5">
              {/* Foto Bulat di Sebelah Kiri */}
              <div className="w-[82px] h-[82px] bg-[#D9D9D9] rounded-full relative overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="82px"
                  className="object-cover object-top"
                />
              </div>

              <div
                className="flex-1 min-h-[76px] px-4 py-3 border border-[#FFCA9A]/25 flex flex-col justify-center text-left"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 202, 154, 0.14) 0%, rgba(255, 186, 125, 0.08) 50%, rgba(255, 166, 86, 0.22) 100%)",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px 26px 26px 10px",
                }}
              >
                <h3 className="font-body font-bold text-[14px] text-[#FFF8DD] leading-snug">
                  {member.name}
                </h3>
                <p className="font-body font-normal text-[12px] text-[#FFF8DD]/90 leading-snug mt-0.5">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {desktopMembers.map((member, index) => (
            <div
              key={index}
              className="w-full py-7 lg:py-8 px-5 border border-[#FFCA9A]/25 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 202, 154, 0.17) 0%, rgba(255, 186.63, 124.71, 0) 43%, rgba(255, 166.48, 86.31, 0.17) 100%)",
                boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "24px",
              }}
            >
              <div className="w-[115px] h-[115px] lg:w-[135px] lg:h-[135px] bg-[#D9D9D9] rounded-full mb-4 lg:mb-5 relative overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="135px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-body font-bold text-[19px] lg:text-[24px] text-[#FFF8DD] leading-tight capitalize">
                {member.name}
              </h3>

              <p className="font-body font-normal text-[15px] lg:text-[19px] text-[#FFF8DD]/90 leading-snug mt-1 capitalize">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
