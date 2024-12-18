import { useSelector } from "react-redux";

export const useUnfollowModal = () => {
  useSelector((state) => state.modal.unfollowModal);
};


export const useModalName = ()=>{
  useSelector((state)=> state.modal.modalName)
}

export const useUser = () =>{
  useSelector((state)=> state.modal.user)
}

export const useModal = ()=>{
  useSelector((state)=> state.modal.modal)
}