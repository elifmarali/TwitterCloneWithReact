import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import store from "~/store";
import { setBackgroundColor, setColor, setFontSize } from "~/store/appearance";
import { log, resetModalInfo } from "~/store/modal";
function Appearace() {
  const dispatch = useDispatch();
  const backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--background-primary")
    .trim();
  const selectBackground = store.getState().appearance.backgroundColors.primary;
  const colorName = store.getState().appearance.color.name;
  const selectColor = store.getState().appearance.color.primary;
  const selectFontSize = store.getState().appearance.fontSize;
  const [fontSizePercent, setFontSizePercent] = useState(0);

  useEffect(() => {
    setFontSizePercent();
    switch (selectFontSize) {
      case 13:
        setFontSizePercent(10);
        break;
      case 18:
        setFontSizePercent(
          document.querySelector(".active-font-size").offsetLeft + 26
        );
        break;
      default : 
      setFontSizePercent(
        document.querySelector(".active-font-size").offsetLeft + 10
      );
    }
  }, [selectFontSize]);

  const themes = [
    {
      name: "Işıklar Kapalı",
      primary: "#000",
      second: "#16181c",
      third: "#273340",
      titleText: "#fff",
      descText: "#71767b",
      hover: "rgba(231,233,234,0.1)",
    },
    {
      name: "Loş",
      primary: "#15202b",
      second: "#2f3336",
      third: "#273340",
      titleText: "#fff",
      descText: "#8b98a5",
      hover: "rgba(247,249,249,0.1)",
    },
    {
      name: "Varsayılan",
      primary: "#fff",
      second: "#eff3f4",
      third: "#536471",
      titleText: "#000",
      descText: "#536471",
      hover: "rgba(15,20,25,0.1)",
    },
  ];

  const color = [
    {
      name: "blue",
      primary: "#1d9bf0",
      second: "#8ecdf8",
      primary1a: "rgba(142, 205, 248, 0.1)",
    },
    {
      name: "yellow",
      primary: "#ffd400",
      second: "#ffea80",
      primary1a: "rgb(255, 212, 0.1)",
    },
    {
      name: "pink",
      primary: "#f91880",
      second: "#fc8cc0",
      primary1a: "rgba(34, 139, 230, 0.1)",
    },
    {
      name: "purple",
      primary: "rgb(120, 86, 255)",
      second: "rgb(188, 171, 255)",
      primary1a: "rgba(188, 171, 255, 0.97)",
    },
    {
      name: "orange",
      primary: "rgb(255, 122, 0)",
      second: "rgb(255, 189, 128)",
      primary1a: "rgba(255, 122, 0,.1)",
    },
    {
      name: "green",
      primary: "rgb(0, 186, 124)",
      second: "rgb(128, 221, 190)",
      primary1a: "rgba(0, 186, 124,.1)",
    },
  ];

  const fontSize = [13, 14, 16, 17, 18];

  return (
    <div className="flex flex-col justify-center  w-[90%] gap-2 ">
      <div className="flex flex-col justify-center items-center  w-full gap-2 ">
        <div className="leading-5 text-[20px] font-bold mb-3">
          Görünümünü özelleştir
        </div>
        <div className="leading-3 text-[color:var(--background-descText)]">
          Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.
        </div>
      </div>
      <div
        className="flex justify-between w-full p-3 mb-2 shadow-box mt-4 rounded-md"
        style={{
          border:
            backgroundColor === "#fff"
              ? "0.1px solid var(--background-third)"
              : "none",
        }}
      >
        <svg viewBox="0 0 24 24" width={30} height={30} className="mt-1">
          <path
            fill="white"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          ></path>
        </svg>
        <div className="flex flex-col flex-1 ps-5">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="font-bold">X</div>
              <svg
                viewBox="0 0 22 22"
                width={16}
                height={16}
                className="text-[color:var(--color-primary)]"
              >
                <path
                  fill="currentColor"
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                ></path>
              </svg>
            </div>
            <div className="ttext-[color:var(--background-descText)]">
              @X · 10d
            </div>
          </div>
          <div>
            X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar yatar.
            Gönderiler; fotoğraflar, videolar, bağlantılar, metinler, etiketler
            ve{" "}
            <Link
              to="/"
              className="text-[color:var(--color-primary)] hover:underline"
            >
              @X
            </Link>{" "}
            gibi bahsetmeler içerebilir.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 mb-4">
        <div className="text-[color:var(--background-descText)] text-[20px] font-bold flex w-[100%]">
          Yazı tipi boyutu
        </div>
        <div className="flex px-4 w-full justify-between items-center gap-x-2 shadow-box p-2 rounded-md">
          <div className="text-[13px]">Aa</div>
          <div className="bg-[color:var(--color-second)] h-[1px] flex-1 mx-5 relative flex justify-between items-center">
            <div
              style={{ width: fontSizePercent }}
              className="h-full absolute top-0 left-0 rounded-full bg-[color:var(--color-primary)]"
            />
            {fontSize.map((fontItem) => (
              <button
                key={fontItem}
                onClick={() => dispatch(setFontSize(fontItem))}
                className={classNames(
                  "w-8 h-8 flex items-center justify-center relative first:-ml-1.5 last:-mr-1.5 before:hover:bg-[color:var(--color-primary)] before:rounded-full before:inset-0 before:absolute before:opacity-20",
                  {
                    "active-font-size": fontItem === selectFontSize,
                  }
                )}
              >
                <div
                  className={classNames(
                    "absolute w-3 h-3 rounded-full bg-[color:var(--color-second)]",
                    {
                      "w-4 h-4": fontItem === selectFontSize,
                      "!bg-[color:var(--color-primary)]":
                        fontItem <= selectFontSize,
                    }
                  )}
                />
              </button>
            ))}
          </div>
          <div className="text[20px]">Aa</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 mb-4">
        <div className="text-[color:var(--background-descText)] text-[20px] font-bold flex w-[100%]">
          Renk
        </div>
        <div className="flex px-4 w-full justify-between items-center gap-x-2 shadow-box p-2 rounded-md">
          {color.map((colorItem) => (
            <button
              className={`p-3 leading-4 w-[40px] h-[40px] rounded-full  font-bold shadow-box`}
              style={{
                backgroundColor: colorItem.primary,
                color: colorItem.titleText,
                border:
                  colorName === colorItem.name
                    ? `1px solid ${colorItem.primary}`
                    : "none",
              }}
              onClick={() => {
                dispatch(setColor(colorItem));
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 mb-4">
        <div className="text-[color:var(--background-descText)] text-[20px] font-bold flex w-[100%]">
          Arka Plan
        </div>
        <div className="flex px-4 w-full justify-between items-center gap-x-2 shadow-box p-2 rounded-md">
          {themes.map((themeItem) => (
            <button
              className={`p-3 leading-4 min-h-[40px] rounded-md min-w-[110px] font-bold shadow-box`}
              style={{
                backgroundColor: themeItem.primary,
                border:
                  selectBackground === themeItem.primary
                    ? `1px solid ${selectColor}`
                    : "none",
                color: themeItem.titleText,
              }}
              onClick={() => {
                dispatch(setBackgroundColor(themeItem));
              }}
            >
              {themeItem.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          buttonOption="colorfull"
          text="Bitti"
          size="normal"
          color="var(--color-primary)"
          onClick={() => {
            dispatch(resetModalInfo());
          }}
        />
      </div>
    </div>
  );
}

export default Appearace;
