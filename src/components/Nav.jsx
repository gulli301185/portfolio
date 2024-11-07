import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
function Nav() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex p-10 items-center justify-between lg:flex-row">
        <div className="text-3xl text-white tracking-wider items-center font-mono flex">
          <CgNametag />
          AUCODE
        </div>
        <div className="space-x-4 ">
          <div className="text-white text-lg hidden lg:block">
            <a href="" className="hover:bg-indigo-800 py-2 px-4 rounded-3xl">
              Skills
            </a>
            <a href="" className="hover:bg-indigo-800 py-2 px-4 rounded-3xl">
              Projects
            </a>
            <a href="" className="hover:bg-indigo-800 py-2 px-4 rounded-3xl">
              Testimolials
            </a>
          </div>
          <div className="lg:hidden">
            {toggle ? (
              <AiOutlineClose
                size={30}
                className="text-white cursor-pointer"
                onClick={onToggle}
              />
            ) : (
              <HiMenuAlt1
                size={30}
                className="text-white cursor-pointer"
                onClick={onToggle}
              />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <div className="text-white ml-10 text-xl  flex justyfy-between lg:hidden ">
          <ul>
            <li className="cursor-pointer pb-2">Skills</li>
            <li className="cursor-pointer pb-2">Projects</li>
            <li className="cursor-pointer pb-4">Testimolials</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
