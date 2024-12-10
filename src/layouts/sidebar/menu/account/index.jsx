import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAccount, setCurrentAccount } from "~/store/auth";

function Account() {
  const { currentAccount, accounts } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [close, setClose] = useState(true);
  const [focus, setFocus] = useState(false);

  return (
    <Popover
      className="relative my-3"
    >
      <PopoverButton
        className="outline-none flex items-center group w-[100%]"
        onClick={() => {
          setClose(!close);
          setFocus(true);
        }}
      >
        <div
          className={
            "p-[12px] inline-flex justify-between items-center group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition w-[100%]"
          }
        >
          <div className="flex items-center">
            <img
              src={
                currentAccount !== false
                  ? currentAccount.avatar
                  : "https://static.vecteezy.com/system/resources/thumbnails/005/005/791/small/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              }
              alt="current user images"
              className="w-10 h-10 rounded-full"
            />
            <div className="mx-3">
              <div className="flex items-center">
                <div className="font-bold">{currentAccount.fullName}</div>
                {currentAccount.private && (
                  <svg
                    viewBox="0 0 24 24"
                    width={18.5}
                    height={18.5}
                    className="ml-0.5"
                  >
                    <path
                      fill="white"
                      d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"
                    ></path>
                  </svg>
                )}
              </div>
              <div className="text-[#71767b]">@{currentAccount.username}</div>
            </div>
          </div>
          <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
            <path
              fill="white"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </svg>
        </div>
      </PopoverButton>
      {!close && focus && (
        <PopoverPanel
          static
          anchor={{ to: "bottom" }}
          className="w-[300px] absolute py-3 left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden bg-black"
          close={close}
        >
          {accounts.map((account, index) => (
            <button
              className="flex items-center py-3 px-4 hover:bg-[rgba(231,233,234,0.1)] w-[100%]"
              key={index}
              disabled={account.id === currentAccount.id}
              onClick={() => {
                dispatch(setCurrentAccount(account));
                setClose(true);
              }}
            >
              <img
                src={account.avatar}
                alt="current user images"
                className="w-10 h-10 rounded-full"
              />
              <div className="mx-3 w-[100%] flex flex-col">
                <div className="flex items-center justify-between w-[100%]">
                  <div className="flex items-center">
                    <div className="font-bold">{account.fullName}</div>
                    {account.private && (
                      <svg
                        viewBox="0 0 24 24"
                        width={18.5}
                        height={18.5}
                        className="ml-0.5"
                      >
                        <path
                          fill="white"
                          d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"
                        ></path>
                      </svg>
                    )}
                  </div>
                  {currentAccount.id === account.id && (
                    <svg
                      viewBox="0 0 24 24"
                      className="mr-2 ml-3 h-[1.172rem]"
                      fill="#00ba7c"
                    >
                      <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />
                    </svg>
                  )}
                </div>
                <div className="text-[#7e7e7e] text-left">
                  @{account.username}
                </div>
              </div>
            </button>
          ))}
          <span className="bg-[#71767b] h-[.1px] flex mx-4" />
          <div className="py-3">
            <div className="py-3 px-4 font-bold hover:bg-[rgba(231,233,234,0.1)]">
              Var olan bir hesap ekle
            </div>
            {currentAccount !== false && (
              <div
                className="py-3 px-4 font-bold hover:bg-[rgba(231,233,234,0.1)]"
                onClick={() => dispatch(removeAccount(currentAccount.id))}
              >
                @{currentAccount.username} hesabından çıkış yap
              </div>
            )}{" "}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}

export default Account;
