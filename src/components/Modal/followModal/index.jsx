import React from "react";
import { modalCloseFunc, resetModalInfo } from "~/store/modal";
import Button from "../../Button";
import { followUser } from "~/store/userList";
import { useUser } from "~/store/modal/hook";
import { useDispatch, useSelector } from "react-redux";

export const FollowModal = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.modal.user);
  return (
    <>
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
          dispatch(modalCloseFunc());
          dispatch(resetModalInfo());
        }}
      />
      <Button
        text="İptal"
        className="w-full border px-8 py-[12px] mb-2"
        onClick={() => {
          dispatch(modalCloseFunc());
          dispatch(resetModalInfo());
        }}
      />
    </>
  );
};
