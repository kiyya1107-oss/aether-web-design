"use client";

import { useState } from "react";

export default function Specifications() {
  // State untuk mengatur item mana yang sedang terbuka di HP (null = tertutup semua)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const specs = [
    {
      title: "Mechanical",
      detail: "5 servo motors",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      ),
    },
    {
      title: "Electrical",
      detail: "PCB & components",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Programming",
      detail: "STM32 & Debugging",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
  ];

  return (
        <section
      id="robot"
      className="w-full relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28 -mt-10 sm:-mt-14 lg:-mt-20 z-10 text-[#FFF8DD]"
      style={{
        background: "linear-gradient(180deg, #9C3718 0%, #311714 100%)",
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
        className="absolute -left-24 -bottom-24 w-[420px] h-[320px] rounded-full pointer-events-none z-0 opacity-25 blur-[90px]"
        style={{ background: "radial-gradient(circle, #E09F3E 0%, transparent 70%)" }}
      ></div>
      <div
        className="absolute -right-24 -bottom-24 w-[420px] h-[320px] rounded-full pointer-events-none z-0 opacity-25 blur-[90px]"
        style={{ background: "radial-gradient(circle, #E09F3E 0%, transparent 70%)" }}
      ></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <h2 className="font-colombo text-4xl sm:text-6xl lg:text-[84px] text-[#FFF8DD] leading-none tracking-tight mb-7 sm:mb-10 lg:mb-12 text-left">
          Specifications
        </h2>

        <div className="flex flex-col gap-3.5 md:hidden">
          {specs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.title}
                onClick={() => toggleItem(idx)}
                className="w-full bg-[#FFCA9A] border-[1.5px] border-[#772219] rounded-[28px] px-6 py-4 text-[#772219] shadow-lg cursor-pointer transition-all duration-200 active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="font-body font-bold text-[18px]">
                      {item.title}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center leading-none">
                    <svg className="w-4 h-4 -mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <svg className="w-4 h-4 -mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-3 pt-2.5 border-t border-[#772219]/20 pl-10">
                    <p className="font-body font-bold text-[16px] text-[#772219]">
                      {item.detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-9">
          {specs.map((item) => (
            <div
              key={item.title}
              className="w-full min-h-[165px] lg:min-h-[191px] bg-[#FFCA9A] border-[1.29px] border-[#772219] rounded-[26px] lg:rounded-[32.27px] px-6 lg:px-8 py-6 flex flex-col justify-center text-left shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-2.5 lg:gap-3 mb-3 lg:mb-4 text-[#772219]">
                {item.icon}
                <span className="font-body font-bold text-[18px] lg:text-[22px] leading-tight">
                  {item.title}
                </span>
              </div>
              <p className="font-body font-bold text-[21px] lg:text-[26px] text-[#772219] leading-snug">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
