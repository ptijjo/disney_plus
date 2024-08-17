import React from "react";
import Image from "next/image";
import { FaHome, FaSearch, FaPlus, FaStar } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import HeaderMenu from "./HeaderMenu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icone: FaHome,
    },
    {
      name: "SEARCH",
      icone: FaSearch,
    },
    {
      name: "PLUS",
      icone: FaPlus,
    },
    {
      name: "FAVORIES",
      icone: FaStar,
    },
    {
      name: "MOVIES",
      icone: TbMovie,
    },
    {
      name: "SERIES",
      icone: PiTelevision,
    },
  ];

  return (
    <header className="flex flex-row items-center justify-between p-3.5 w-full">
      <div className="flex flex-row items-center gap-x-8">
        <Image
          src="/Images/disney-logo.png"
          alt="logo disney plus"
          width={80}
          height={80}
        />
        <div className="hidden lg:flex flex-row items-center gap-3">
          {menu.map((liste) => (
            <HeaderMenu
              key={liste.name}
              name={liste.name}
              icone={liste.icone}
            />
          ))}
        </div>
        <div className="flex flex-row items-center gap-3 lg:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderMenu
                  key={item.name}
                  name={item.name}
                  icone={item.icone}
                />
              )
          )}
        </div>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
