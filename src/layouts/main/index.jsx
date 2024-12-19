import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Rightbar from "../rightbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "~/store/userList";
import { useModal, useModalName } from "~/store/modal/hook";
import CustomModal from "~/components/Modal";

function MainLayout() {
  const dispatch = useDispatch();
  const { modalName, modal } = useSelector((state) => state.modal);
  const appearance = useSelector((state) => state.appearance);

  useEffect(() => {
    document.documentElement.style.setProperty('--background-primary', appearance.backgroundColors.primary);
    document.documentElement.style.setProperty('--background-second', appearance.backgroundColors.second);
    document.documentElement.style.setProperty('--background-third', appearance.backgroundColors.third);
    document.documentElement.style.setProperty('--background-titleText', appearance.backgroundColors.titleText);
    document.documentElement.style.setProperty('--background-descText', appearance.backgroundColors.descText);
    document.documentElement.style.setProperty('--background-hover', appearance.backgroundColors.hover);

    document.documentElement.style.setProperty('--color-primary', appearance.color.primary);
    document.documentElement.style.setProperty('--color-second', appearance.color.second);
    document.documentElement.style.setProperty('--color-primary1a', appearance.color.primary1a);

    document.documentElement.style.setProperty('--font-size', appearance.fontSize +"px");
    

    console.log("appearance : ", appearance);
  }, [appearance]);

  useEffect(() => {
    dispatch(getUserList());
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
