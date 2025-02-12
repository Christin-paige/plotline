import logo from '/images/logo.png';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <>
      <nav className="flex flex-col">
        <header className="flex flex-col content-between bg-dark-bckground bg-black sticky top-0 z-[20] mx-auto w-full items-center justify-between border-b border-gray-500 p-8 ">
          <img src={logo} />
          <div className="flex justify-start p-6">
            <h1 className="absolute center text-white">
              Follow the plot, own the progress
            </h1>
          </div>
       
        </header>
      </nav>
    </>
  );
}
