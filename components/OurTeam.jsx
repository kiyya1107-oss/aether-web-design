// components/OurTeam.jsx
export default function OurTeam() {
  const teamMembers = [
    { name: "Name Here", role: "Position" },
    { name: "Name Here", role: "Position" },
    { name: "Name Here", role: "Position" },
    { name: "Name Here", role: "Position" },
    { name: "Name Here", role: "Position" },
    { name: "Name Here", role: "Position" },
  ];

  return (
    <section className="w-full bg-transparent text-[#FFF8DD] px-6 py-20 max-w-7xl mx-auto">
      {/* Judul Seksi: 95px Sesuai Figma */}
      <h2 className="font-heading text-6xl md:text-[95px] text-[#FFF8DD] mb-16 uppercase leading-none">
        Our Team
      </h2>

      {/* Grid 3 Kolom Samping yang Rapi Mengikuti Gambar Figma */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-[#FFFCF2] border-[1.29px] border-[#772219] rounded-[32px] p-8 h-[300px] flex flex-col justify-between items-center text-center shadow-xl transition-all hover:scale-105"
          >
            {/* Bingkai Lingkaran Foto Profil */}
            <div className="w-24 h-24 rounded-full bg-[#772219]/10 border-2 border-[#772219] flex items-center justify-center text-[#772219]">
              <span className="text-3xl">👤</span>
            </div>

            {/* Nama & Posisi Menggunakan Warna Marun #772219 */}
            <div className="space-y-1">
              <h3 className="font-body font-bold text-2xl text-[#772219] tracking-tight">
                {member.name}
              </h3>
              <p className="font-body font-medium text-base text-[#772219]/70 italic">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
