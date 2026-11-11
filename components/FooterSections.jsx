// components/FooterSections.jsx
export default function FooterSections() {
  return (
    <section className="w-full bg-[#560C05] text-white px-8 py-16 rounded-[40px] max-w-7xl mx-auto my-16 shadow-2xl relative overflow-hidden">
      
      {/* Flex/Grid Baris Utama: Membagi Sponsors di Kiri & Form Kirim Pesan di Kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* ================= SISI KIRI: OUR SPONSORS (Bobot Kolom 5) ================= */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-heading text-4xl md:text-[71.33px] text-[#FFF8DD] leading-none uppercase">
            Our Sponsors
          </h2>
          <p className="font-body text-lg text-[#FFF8DD]/80 max-w-xs leading-tight">
            We are grateful for the support from:
          </p>
          
          {/* Grid Ikon Logo Sponsor Pendukung Kecil */}
          <div className="grid grid-cols-4 gap-3 pt-2">
            {[1, 2, 3, 4].map((id) => (
              <div 
                key={id} 
                className="aspect-square bg-[#772219] border border-[#FFCA9A]/20 rounded-xl flex items-center justify-center hover:bg-[#1f0b03] transition-colors"
              >
                <div className="w-5 h-5 bg-[#FFCA9A]/30 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SISI KANAN: GET IN TOUCH FORM (Bobot Kolom 7) ================= */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-heading text-4xl md:text-[67.86px] text-[#FFF8DD] leading-none uppercase">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-[#FFF8DD]/80 leading-none">
            Have any question? Send us a message!!
          </p>

          {/* Form Isian Bergaya Solid Krem #FFCA9A Teks Marun #772219 */}
          <form className="space-y-4 w-full font-body text-[#772219]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-bold text-[#FFFCF2]/80 uppercase pl-1">Your Name</span>
                <input 
                  type="text" 
                  className="w-full h-[50px] bg-[#FFCA9A] border border-[#E99040] rounded-[18px] px-4 font-bold text-[#772219] focus:outline-none focus:ring-2 focus:ring-[#FFFCF2]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-bold text-[#FFFCF2]/80 uppercase pl-1">Your e-mail</span>
                <input 
                  type="email" 
                  className="w-full h-[50px] bg-[#FFCA9A] border border-[#E99040] rounded-[18px] px-4 font-bold text-[#772219] focus:outline-none focus:ring-2 focus:ring-[#FFFCF2]"
                />
              </div>
            </div>
            
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-bold text-[#FFFCF2]/80 uppercase pl-1">Your message</span>
              <textarea 
                rows="3" 
                className="w-full bg-[#FFCA9A] border border-[#E99040] rounded-[20px] p-4 font-bold text-[#772219] focus:outline-none focus:ring-2 focus:ring-[#FFFCF2]"
              ></textarea>
            </div>

            <div className="flex justify-end pt-1">
              <button 
                type="button" 
                className="px-8 py-3 bg-[#772219] text-[#FFFCF2] hover:bg-[#1f0b03] font-body font-semibold rounded-full transition-all text-sm shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* ================= BOTTOM METADATA BAR BANNER ================= */}
      <div className="mt-16 pt-6 border-t border-[#772219] flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFCF2]/60 font-body gap-4">
        <div className="flex items-center space-x-6 text-base text-[#FFFCF2]/80">
          <a href="#" className="hover:text-[#FFCA9A]">📸</a>
          <a href="#" className="hover:text-[#FFCA9A]">🎥</a>
          <a href="#" className="hover:text-[#FFCA9A]">👔</a>
          <a href="#" className="hover:text-[#FFCA9A]">💬</a>
        </div>
        {/* Slogan Kebanggaan Miring Khas Desain Anda */}
        <span className="text-[#FFFCF2] text-2xl font-semibold italic tracking-wide">
          Innovation. together
        </span>
      </div>
    </section>
  );
}
