// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-center items-center px-6 py-16 md:flex-row md:justify-between max-w-7xl mx-auto gap-8 pt-24">
      
      {/* Sisi Kiri: Informasi Tim & Robot */}
      <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
          ROBOTIC RESEARCH TEAM
        </span>
        {/* Post No Bills Colombo */}
        <h1 className="font-heading text-6xl md:text-8xl text-white leading-none uppercase">
          TEAM NAME
        </h1>
        <h2 className="font-heading text-3xl md:text-5xl text-orange-500 uppercase tracking-wide">
          Robot Name
        </h2>
        {/* Familjen Grotesk */}
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          Tagline goes here. Tuliskan deskripsi singkat mengenai visi atau semboyan tim robotik Anda di sini.
        </p>
        <div className="pt-4 flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-600/20 flex items-center gap-2 group text-xs uppercase tracking-wider">
            Learn More 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Sisi Kanan: Bingkai Gambar Futuristik */}
      <div className="w-full max-w-lg aspect-[4/3] bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center relative group hover:border-orange-500/50 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-500 rounded-tr-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-orange-500 rounded-bl-2xl pointer-events-none"></div>
        <p className="text-gray-500 text-xs font-medium tracking-wide">[ Tempat Gambar Robot Utama ]</p>
      </div>

    </section>
  );
}
