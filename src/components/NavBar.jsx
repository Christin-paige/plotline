import logo from '/images/logo.png';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <>
      <nav className="flex flex-col">
        <header className="flex flex-col content-between bg-dark-bckground bg-black sticky top-0 z-[20] mx-auto w-full items-center justify-between border-b border-gray-500 p-8 ">
          <img src={logo} />
          <div className="flex justify-start p-6">
            <p className="absolute left-16 text-white">
              Follow the plot, own the progress
            </p>
          </div>
          <div>
            <NavLink
              to="#"
              className="text-white p-4 font-specialElite text-3xl hover:text-pink-600"
            >
              My Books
            </NavLink>
            <NavLink
              to="#"
              className="text-white p-4 font-specialElite text-3xl hover:text-pink-600"
            >
              Tracked
            </NavLink>
            <NavLink
              to="#"
              className="text-white p-4 font-specialElite text-3xl hover:text-pink-600"
            >
              Browse
            </NavLink>
          </div>
        </header>
      </nav>
    </>
  );
}
