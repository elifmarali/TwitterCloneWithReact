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

  useEffect(() => {
    console.log("modal : ", modal, " modalName : ", modalName);
  }, [modalName, modal]);

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
