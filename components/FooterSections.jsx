"use client";

import { useState } from "react";
import Image from "next/image";

export default function FooterSections() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Gagal mengirim pesan.");

      setStatus("success");
      setFeedbackMsg(result.message || "Pesan berhasil terkirim!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setFeedbackMsg(err.message || "Terjadi kesalahan.");
    }
  };

  return (
    <div className="w-full relative overflow-hidden text-[#FFF8DD] z-10">
      <style jsx global>{`
        @import url('https://cdnfonts.com');
        .font-colombo {
          font-family: 'Post No Bills Colombo', sans-serif;
          font-weight: 800;
        }
      `}</style>

            {/* FORMULIR GET IN TOUCH */}
      <section 
      id="contact" 
      className="w-full relative -mt-3 sm:-mt-4 py-14 sm:py-20 lg:py-24 bg-[#2F0C0A] overflow-hidden">
        {/* Gambar Group 48098140.png ditarik memanjang vertikal (h-[135%]) dengan object-fill */}
        <div className="absolute inset-x-0 -top-[15%] bottom-0 pointer-events-none z-0">
          <Image
            src="/images/Group 48098140.png"
            alt="Get In Touch Background"
            width={1782}
            height={937}
            className="w-full h-[135%] object-fill"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <h2 className="font-colombo text-4xl sm:text-6xl lg:text-[84px] text-[#FFF8DD] leading-none tracking-tight mb-6 sm:mb-10 text-left">
            Get in touch
          </h2>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-12 gap-3 sm:gap-5 lg:gap-7 items-stretch">
              <div className="col-span-5 flex flex-col justify-between gap-2.5 sm:gap-4 lg:gap-5">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full h-[38px] sm:h-[60px] lg:h-[78px] px-3 sm:px-6 bg-[#FFCA9A] border-[1.5px] border-[#E99040] rounded-[14px] sm:rounded-[26px] text-[#772219] placeholder-[#772219]/85 font-body font-medium text-[11px] sm:text-base lg:text-[22px] focus:outline-none focus:ring-2 focus:ring-[#EC6C05] shadow-md"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your e-mail"
                  className="w-full h-[38px] sm:h-[60px] lg:h-[78px] px-3 sm:px-6 bg-[#FFCA9A] border-[1.5px] border-[#E99040] rounded-[14px] sm:rounded-[26px] text-[#772219] placeholder-[#772219]/85 font-body font-medium text-[11px] sm:text-base lg:text-[22px] focus:outline-none focus:ring-2 focus:ring-[#EC6C05] shadow-md"
                />
              </div>

              <div className="col-span-7">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="w-full h-full min-h-[86px] sm:min-h-[136px] lg:min-h-[176px] p-3 sm:p-6 bg-[#FFCA9A] border-[1.5px] border-[#E99040] rounded-[14px] sm:rounded-[28px] text-[#772219] placeholder-[#772219]/85 font-body font-medium text-[11px] sm:text-base lg:text-[22px] resize-none focus:outline-none focus:ring-2 focus:ring-[#EC6C05] shadow-md"
                ></textarea>
              </div>
            </div>
                        <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col items-start">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-[140px] sm:w-[215px] lg:w-[260px] h-[34px] sm:h-[52px] lg:h-[60px] rounded-full text-[#FFFCF2] font-body font-semibold text-[11px] sm:text-base lg:text-[20px] flex items-center justify-center gap-2 sm:gap-3.5 shadow-xl transition-transform hover:scale-105 disabled:opacity-60 cursor-pointer"
                style={{ background: "linear-gradient(90deg, #EC6C05 0%, #C05019 100%)" }}
              >
                <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                <Image
                  src="/images/akar-icons_arrow-right.png"
                  alt="Arrow Right"
                  width={22}
                  height={22}
                  className="w-3.5 h-3.5 sm:w-5 sm:h-5 object-contain"
                />
              </button>

              {status === "success" && (
                <p className="mt-3 text-xs sm:text-sm font-medium text-emerald-300 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/40">
                  {feedbackMsg}
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-xs sm:text-sm font-medium text-red-300 bg-red-950/80 px-4 py-1.5 rounded-full border border-red-500/40">
                  {feedbackMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

            {/* FOOTER BAWAH (Ditarik naik dengan -mt-16 sm:-mt-20 lg:-mt-24 & z-20 agar menutup pita gelap kosong) */}
      <footer className="w-full relative -mt-16 sm:-mt-20 lg:-mt-24 z-20 py-6 sm:py-10 lg:py-12 bg-[#6D2118]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-row items-center justify-between gap-4">
          <Image
            src="/images/Rectangle 17733019.png"
            alt="AETHER Footer Logo"
            width={87}
            height={92}
            className="w-[38px] sm:w-[60px] lg:w-[75px] h-auto object-contain"
          />

          <div className="flex items-center gap-4 sm:gap-8 lg:gap-11">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#FFF8DD] hover:text-[#EC6C05] transition-colors">
              <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#FFF8DD] hover:text-[#EC6C05] transition-colors">
              <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#FFF8DD] hover:text-[#EC6C05] transition-colors">
              <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.3 3.3 0 0 0-3.3-3.3c-.8 0-1.8.5-2.3 1.3v-1.1h-2.8v8.4h2.8v-4.9c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4v4.9h2.8M6.9 8.6a1.7 1.7 0 0 0 1.7-1.7 1.7 1.7 0 0 0-1.7-1.7 1.7 1.7 0 0 0-1.7 1.7 1.7 1.7 0 0 0 1.7 1.7m1.4 9.9v-8.4H5.5v8.4h2.8z" />
              </svg>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#FFF8DD] hover:text-[#EC6C05] transition-colors">
              <svg className="w-5 h-5 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.77-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.45.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
              </svg>
            </a>
          </div>

          <p className="font-body italic font-semibold text-[11px] sm:text-lg lg:text-[22px] text-[#FFFCF2] whitespace-nowrap">
            Innovation. together
          </p>
        </div>
      </footer>
    </div>
  );
}

