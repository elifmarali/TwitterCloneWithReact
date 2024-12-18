import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeModalName, modalOpenFunc } from "~/store/modal";

function More() {
  const dispatch= useDispatch();
  return (
    <Popover className="relative">
      <PopoverButton className="block group outline-none">
        <div
          className={
            "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition"
          }
        >
          <div className="w-[30px] h-[30px] relative">
            <svg width="26.25px" height="26.25px">
              <path
                fill="white"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
          </div>
          <span className="sideBarMenuItem">Daha Fazla</span>
        </div>
      </PopoverButton>
			<PopoverPanel className="w-[262px] absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden bg-black">
        <Link
          to="/account_analytics"
          className={
            "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition bg-black overflow-hidden"
          }
        >
          <div className="w-[30px] h-[30px] relative">
            <svg viewBox="0 0 24 24" width="26.25px" height="26.25px">
              <path
                fill="white"
                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
              ></path>
            </svg>
          </div>
          <span className="sideBarMenuItem">İstatistikler</span>
        </Link>
        <button
          className={
            "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition bg-black overflow-hidden"
          }
          onClick={()=> {
            dispatch(modalOpenFunc())
            dispatch(changeModalName("appearanceModal"))
          }}
        >
          <div className="w-[30px] h-[30px] relative">
            <svg viewBox="0 0 24 24" width="26.25px" height="26.25px">
              <path
                fill="white"
                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
              ></path>
            </svg>
          </div>
          <span className="sideBarMenuItem">Görünüm</span>
        </button>
        <Link
          to="/monetization"
          className={
            "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition bg-black overflow-hidden"
          }
        >
          <div className="w-[30px] h-[30px] relative">
            <svg viewBox="0 0 24 24" width="26.25px" height="26.25px">
              <path
                fill="white"
                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
              ></path>
            </svg>
          </div>
          <span className="sideBarMenuItem">Para kazanma</span>
        </Link>
        <Link
          to="/settings"
          className={
            "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition bg-black overflow-hidden"
          }
        >
          <div className="w-[30px] h-[30px] relative">
            <svg viewBox="0 0 24 24" width="26.25px" height="26.25px">
              <path
                fill="white"
                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
              ></path>
            </svg>
          </div>
          <span className="sideBarMenuItem">Ayarlar ve gizlilik</span>
        </Link>
      </PopoverPanel>
    </Popover>
  );
}

export default More;
