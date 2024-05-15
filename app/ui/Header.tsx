"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import NavigationBar from "./NavigationBar";
export default function Header() {
  const router = useRouter();
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    const handleValue = event.target.value;
    event.preventDefault();
    if (handleValue == "10") {
      router.push("/");
    } else if (handleValue == "20") {
      router.push("/bsc-info");
    } else if (handleValue == "30") {
      router.push("/eth-info");
    }
    setAge(event.target.value);
  };

  return (
    <>
      <div className="py-1 px-6 bg-[#444]  flex justify-between items-center w-full">
        <Link className="flex gap-2 grow-0 items-center" href={"/"}>
          <Image className="shrink-0" width={40} height={30} src={"/logo.png"} alt="logo-icon" />

          <div className="flex flex-row justify-center ">
            <span className="flex md:flex-row flex-col text-xl md:text-4xl ">
              <h1>CRYPTO BUBBLES</h1>
            </span>
          </div>
        </Link>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="bg-[#ffffff1f] ml-28 ">
            <InputLabel id="demo-simple-select-standard-label">Chains</InputLabel>
            <Select labelId="demo-simple-select-help-label" id="demo-simple-select-help" value={age} onChange={handleChange} label="Age">
              <MenuItem value={10}>BSC,ETH</MenuItem>

              <MenuItem value={20}>BSC</MenuItem>

              <MenuItem value={30}>ETH</MenuItem>
            </Select>
          </FormControl>
        </div>

        <NavigationBar />
      </div>
      <div>
        <div className="bg-[#84cc16] h-1 animate-time-flow text-center"></div>
      </div>
    </>
  );
}
