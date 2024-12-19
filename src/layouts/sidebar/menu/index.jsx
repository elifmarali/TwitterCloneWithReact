import { NavLink } from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "~/utils/consts";
import More from "./more";

function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menuItem) => {
        return (
          <NavLink
            to={
              typeof menuItem.path === "function"
                ? menuItem.path()
                : menuItem.path
            }
            key={menuItem.path}
            className="block group"
          >
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-[12px] inline-flex justify-start group-hover:bg-[rgba(231,233,234,0.1)] rounded-full transition",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[30px] h-[30px] relative">
                  {menuItem.notification && (
                    <span className="absolute bg-[color:var(--color-primary)] rounded-full w-[17px] h-[17px] text-white -top-1 right-0 flex items-center justify-center text-[11px] font-bold">
                      {menuItem.notification}
                    </span>
                  )}
                  {!isActive ? menuItem.icons.passive : menuItem.icons.active}
                </div>
                <span className="sideBarMenuItem">{menuItem.title}</span>
              </div>
            )}
          </NavLink>
        );
      })}

      <More />
    </nav>
  );
}

export default Menu;
