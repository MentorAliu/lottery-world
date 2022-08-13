import { NavLink } from "react-router-dom";
export const Header = () => {
  const activeClassName = "bg-slate-100 rounded-sm p-2 text-white w-full text-black";
  return (
    <header className="col-span-2 md:col-span-8 flex justify-between items-center p-4 bg-[#24292F] text-white">
      <h3>World Wide Lottery</h3>
      <ul className="flex space-x-3">
        <li>
          <NavLink
            to={`/home`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/winners`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            Winners
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/session-players`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            Session Players
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/stats`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            Stats
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
