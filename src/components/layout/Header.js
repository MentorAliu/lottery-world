import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="col-span-2 md:col-span-6 lg:col-span-8 col-start-1 flex justify-between items-center p-4 bg-violet-800 text-white">
      <h3>Lottery World</h3>
      <ul className="flex space-x-3">
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/winners`}>Winners</Link>
        </li>
        <li>
          <Link to={`/session-players`}>Session Players</Link>
        </li>
        <li>
          <Link to={`/stats`}>Stats</Link>
        </li>
      </ul>
    </header>
  );
};
