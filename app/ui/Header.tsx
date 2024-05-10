import Image from "next/image";
import Link from "next/link";
import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <div className="py-1 px-6 bg-[#444] flex justify-between border-b border-lime-400 flex justify-between items-center w-full">
      <Link className="flex gap-2 grow-0 items-center" href={"/"}>
        <Image className="shrink-0" width={40} height={30} src={"/logo.png"} alt="logo-icon" />

        <div className="flex flex-col justify-center ">
          <span className="flex md:flex-row flex-col text-xl md:text-4xl ">
            <h1>CRYPTO BUBBLES</h1>
          </span>
        </div>
      </Link>
      <NavigationBar />
    </div>
  );
}
