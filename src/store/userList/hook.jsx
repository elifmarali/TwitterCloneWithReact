import { useSelector } from "react-redux"
export const useUserList =()=> useSelector((state)=> state.userList.userList) 