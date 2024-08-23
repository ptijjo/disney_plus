import { IconType } from "react-icons";

interface Props {
  name: string;
  icone: IconType;
}

const HeaderMenu = (props: Props) => {
  return (
    <button className="flex flex-row items-center gap-1 text-white text-[10px] lg:text-sm hover:underline underline-offset-8 bg-black py-1.5">
      <props.icone />
      <p>{props.name}</p>
    </button>
  )
}

export default HeaderMenu