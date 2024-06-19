// import { twJoin } from "tailwind-merge";
import { IconLinkProps } from "./type";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

export function IconLink(props: IconLinkProps) {
  const { link, label, children } = props;

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
        {children}
        <p className="focus:bg-sky-500">{label}</p>
      </NavLink>
    </>
  );
}
