import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { log, unfollowModalCloseFunc } from "~/store/modal";
import Button from "../Button";
import { followUser } from "~/store/userList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    padding: "32px",
    maxWidth: "600px",
    borderRadius: "16px",
    width: "320px",
  },
};

export const FollowModal = () => {
  const dispatch = useDispatch();
  let { unfollowModal, user } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(log());
  });

  useEffect(() => {
    console.log("unfollowModal : ", unfollowModal);
  }, [unfollowModal]);

  return (
    <Modal
      isOpen={unfollowModal}
      onRequestClose={() => {
        dispatch(unfollowModalCloseFunc());
      }}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-[#e7e9ea] mb-2 font-bold text-[20px] leading-6">
        @{user?.username} adlı kişinin takibi bırakılsın mı?
      </div>
      <p className="text-[#71767b] leading-5">
        Bu kullanıcının gönderileri artık Sana Özel zaman akışında
        görüntülenmeyecek. Gönderileri korumalı değilse kullanıcının profilini
        görüntülemeye devam edebilirsin.
      </p>
      <Button
        text="Takibi bırak"
        color="white"
        className="w-full px-8 py-[12px] mb-2 mt-6"
        onClick={() => {
          dispatch(followUser({ userId: user.id, isFollow: false }));
          dispatch(unfollowModalCloseFunc())
        }}
      />
      <Button text="İptal" className="w-full border px-8 py-[12px] mb-2" onClick={()=>{
        dispatch(unfollowModalCloseFunc())
      }} />
    </Modal>
  );
};
