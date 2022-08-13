import React from "react";
import { Button } from "./form";
import { useDispatch,useSelector } from "react-redux";
import { clearSession } from "../../features/users/usersSlice";

export const Card = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.users);

 

  
};
