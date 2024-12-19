import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Rightbar from "../rightbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "~/store/userList";
import { useModal, useModalName } from "~/store/modal/hook";
import CustomModal from "~/components/Modal";
import { setBackgroundColor, setColor } from "~/store/appearance";

function MainLayout() {
  const dispatch = useDispatch();
  const { modalName, modal } = useSelector((state) => state.modal);
  const appearance = useSelector((state) => state.appearance);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColors.primary
    );
    document.documentElement.style.setProperty(
      "--background-second",
      appearance.backgroundColors.second
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColors.third
    );
    document.documentElement.style.setProperty(
      "--background-titleText",
      appearance.backgroundColors.titleText
    );
    document.documentElement.style.setProperty(
      "--background-descText",
      appearance.backgroundColors.descText
    );
    document.documentElement.style.setProperty(
      "--background-hover",
      appearance.backgroundColors.hover
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );
    document.documentElement.style.setProperty(
      "--color-second",
      appearance.color.second
    );
    document.documentElement.style.setProperty(
      "--color-primary1a",
      appearance.color.primary1a
    );

    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );

    console.log("appearance : ", appearance);
  }, [appearance]);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    dispatch(
      setBackgroundColor({
        name: "Işıklar Kapalı",
        primary: "#000",
        second: "#16181c",
        third: "#273340",
        titleText: "#fff",
        descText: "#71767b",
        hover: "rgba(231,233,234,0.1)",
      })
    );
    dispatch(
      setColor({
        name: "blue",
        primary: "#1d9bf0",
        second: "#8ecdf8",
        primary1a: "rgba(142, 205, 248, 0.1)",
      })
    );
  }, []);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && modalName && <CustomModal />}
      <Sidebar />
      {/* router kısmında tanımladığımız child elemanlarını kullanmak için Outlet elementini kullanırız*/}
      <main className="flex flex-1 gap-[30px]">
        <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>
  );
}

export default MainLayout;
