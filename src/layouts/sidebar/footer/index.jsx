import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React from "react";

function Footer() {
  return (
    <div className="mr-4 mb-[300px]">
      <div className="px-4 flex flex-wrap gap-y-2">
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Hizmet Şartları
        </span>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Gizlilik Politikası
        </span>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Çerez Politikası
        </span>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Imprint
        </span>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Erişilebilirlik
        </span>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          Reklam Bilgisi
        </span>
        <Popover className="relative">
          <PopoverButton className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal flex items-center gap-x-2">
            Daha fazla
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="#71767b"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </PopoverButton>
          <PopoverPanel className="absolute z-10 shadow-box min-w-[178.5px] rounded-xl">
            <div className="py-3 px-4 font-bold	text-[15px] hover:bg-[rgb(255,255,255,0.1)] rounded-t-xl">
              Hakkında
            </div>
            <div className="py-3 px-4 font-bold	text-[15px] hover:bg-[rgb(255,255,255,0.1)]">
              X uygulamasını indir
            </div>
            <div className="py-3 px-4 font-bold	text-[15px] hover:bg-[rgb(255,255,255,0.1)]">
              İşletmeler için X
            </div>
            <div className="py-3 px-4 font-bold text-[15px] rounded-l-xl hover:bg-[rgb(255,255,255,0.1)]">
              Geliştiriciler
            </div>
          </PopoverPanel>
        </Popover>
        <span className="text-[13px] text-[color:var(--background-descText)] hover:underline leading-3 pr-3 font-normal">
          © 2024
        </span>
      </div>
    </div>
  );
}

export default Footer;
