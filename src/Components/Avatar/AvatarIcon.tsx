import React from "react";
import { Avatar } from "@mui/material";


function stringAvatar(name: string) {
    if (name.trim().length === 0)
      return { children: "" };
    try {
      const [firstName, lastName] = name.split(" ");
      return {
        children: `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`,
      };
    } catch (e: any) {
      console.error(e);
      return { children: "Undefined", };
    }
  }
  
export const AvatarIcon = (props: any) => {
  return (
    <Avatar
      alt=""
      src={props.src}
      {...stringAvatar(props.firstName + " " + props.lastName)}
      sx={props.style}
    />
  );
};
