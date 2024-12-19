import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "~/components/Button";
import RigthbarSection from "~/components/RigthbarSection";
import { changeModalName, modalOpenFunc } from "~/store/modal";
import { useUnfollowModal } from "~/store/modal/hook";
import { followUser } from "~/store/userList";
import { useUserList } from "~/store/userList/hook";
function WhoFollow() {
  const dispatch = useDispatch();
  const userList = useUserList();
  const unfollowModal = useUnfollowModal();
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      setIsOverflow(element.scrollHeight > element.offsetHeight);
    }
  }, [userList]);

  return (
    <RigthbarSection
      title="Kimi takip etmeli"
      ref={contentRef}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      isOverflow={isOverflow}
    >
      {userList?.map((user) => (
        <div className="py-3 px-4 flex" key={user.id}>
          <img
            src={user.image}
            alt={`${user.name} images`}
            width={40}
            height={40}
            className="mr-2 rounded-full object-cover"
          />
          <div className="flex justify-between items-center flex-1">
            <div className="flex flex-col	flex-1">
              <div className="font-bold">{user.name}</div>
              <div className="text-[color:var(--background-descText)]">@{user.username}</div>
            </div>
            {user.followed === false && (
              <Button
                text="Takip Et"
                size="normal"
                color="white"
                className="whitespace-nowrap"
                onClick={() => {
                  dispatch(followUser({ userId: user.id, isFollow: true }));
                }}
              />
            )}
            {user.followed === true && (
              <Button
                text="Takip Ediliyor"
                size="normal"
                color="white"
                className="whitespace-nowrap w-[120px]"
                onClick={() => {
                  if (!unfollowModal) {
                    dispatch(modalOpenFunc(user));
                    dispatch(changeModalName("followModal"))
                  }
                }}
              />
            )}
          </div>
        </div>
      ))}
    </RigthbarSection>
  );
}

export default WhoFollow;
