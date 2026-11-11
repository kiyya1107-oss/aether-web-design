// components/AboutOurRobot.jsx
export default function AboutOurRobot() {
  return (
    <section 
      className="relative w-full bg-[#24130a]/80 backdrop-blur-sm text-white px-6 py-20 pb-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 my-12"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)" }}
    >
      {/* Sisi Kiri: Konten Deskripsi */}
      <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
        {/* Post No Bills Colombo */}
        <h2 className="font-heading text-4xl md:text-6xl text-white mb-2 uppercase tracking-wide">
          About Our Robot
        </h2>
        {/* Familjen Grotesk */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Short description about the robot, its purpose, and how it works. Keep it concise and clear. 
          Tuliskan rincian mengenai teknologi utama, misi, atau keunggulan kompetitif yang dimiliki oleh robot buatan tim Anda di sini.
        </p>
        <div className="pt-2 flex justify-center md:justify-start">
          <button className="px-5 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold rounded-full transition-all duration-300 flex items-center gap-2 group text-xs uppercase tracking-wider">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Sisi Kanan: Tempat Gambar Banner/Video Robot */}
      <div className="w-full max-w-xl aspect-[16/9] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center hover:border-orange-500/30 transition-colors duration-500">
        <p className="text-gray-500 text-xs font-medium tracking-wide">[ Ilustrasi / Dimensi Gambar Robot ]</p>
      </div>

    </section>
  );
}
