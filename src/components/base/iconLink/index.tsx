// import { twJoin } from "tailwind-merge";
import { IconLinkProps } from "./type";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

export function IconLink(props: IconLinkProps) {
  const { link, label, icon } = props;

  //   const [isActive, setIsActive] = useState(false);

  const activeLink =
    "bg-slate-200 flex gap-3 rounded-md text-slate-700 p-1 font-lato";
  const normalLink =
    "flex gap-3 active:bg-white rounded-md p-1 font-lato font-medium hover:bg-stone-50 hover:bg-opacity-25";

  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        {icon}
        <p className="focus:bg-sky-500 sm:block sm:text-base">{label}</p>
      </NavLink>
    </>
  );
}
