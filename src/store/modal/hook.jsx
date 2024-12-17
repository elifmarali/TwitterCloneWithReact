import { useSelector } from "react-redux";

export const useUnfollowModal = () => {
  useSelector((state) => state.modal.unfollowModal);
};
