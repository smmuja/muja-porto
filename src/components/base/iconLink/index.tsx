// import { twJoin } from "tailwind-merge";
import { IconLinkProps } from "./type";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

export function IconLink(props: IconLinkProps) {
  const { link, label, children } = props;

  //   const [isActive, setIsActive] = useState(false);

  const activeLink =
    "bg-white flex gap-3 rounded-md text-slate-700 p-1 font-lato";
  const normalLink =
    "flex gap-3 active:bg-white active:rounded-md p-1 font-lato font-medium";

  return (
    <>
      <NavLink
        to={link}
        // className={twJoin(
        //   "flex gap-3 text-center active:bg-white active:rounded-md"
        // )}

        className={({ isActive }) => (isActive ? activeLink : normalLink)}

        // className={`flex gap-3 text-center` ${isActive ? "active:bg-white" : ""}}
      >
        {children}
        <p className="focus:bg-sky-500">{label}</p>
      </NavLink>
    </>
  );
}
