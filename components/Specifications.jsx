// components/Specifications.jsx
export default function Specifications() {
  const specs = [
    {
      title: "Mechanical",
      icon: "⚙️",
      desc: "Perancangan sasis, lengan robot, dan sistem mekanis menggunakan kalkulasi presisi tinggi."
    },
    {
      title: "Electrical",
      icon: "⚡",
      desc: "Integrasi sensor, aktuator, mikrokontroler, dan manajemen daya yang efisien."
    },
    {
      title: "Programming",
      icon: "💻",
      desc: "Pengembangan algoritma kontrol, automasi, AI, dan pemrosesan data secara real-time."
    }
  ];

  return (
    <section className="w-full bg-transparent text-white px-6 py-16 max-w-7xl mx-auto">
      {/* Judul Section menggunakan Post No Bills Colombo ExtraBold */}
      <h2 className="font-heading text-4xl md:text-6xl mb-10 border-b-2 border-orange-600/30 pb-4 text-[#f3f4f6] uppercase tracking-wider">
        Specifications
      </h2>

      {/* Grid 3 Kotak Krem */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#f8c195] p-8 rounded-2xl flex flex-col space-y-4 text-black text-left shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              {/* Judul Kotak menggunakan Post No Bills Colombo ExtraBold */}
              <h3 className="font-heading text-2xl uppercase tracking-wide text-orange-950">
                {item.title}
              </h3>
            </div>
            
            {/* Deskripsi otomatis menggunakan Familjen Grotesk */}
            <p className="text-sm font-semibold text-orange-950/80 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
