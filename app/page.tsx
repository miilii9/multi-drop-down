"use client";
import DropDown from "@/components/shared/DropDown";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [dropDownList, setDropDownList] = useState<string[]>([]);
  const [activeList, setActiveList] = useState<string[]>([]);
  const [expand, setExpand] = useState<boolean>(false);
  // add item to the list
  const addItem = (item: string) => {
    if (item.length > 0) {
      const trimmedItem = item.trim();
      setDropDownList([...dropDownList, trimmedItem]);
      setInputValue("");
    }
  };
  // save text of input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };
  // check status of item in list
  const handleActive = (item: string) => {
    if (activeList.includes(item)) {
      setActiveList(activeList.filter((i) => i !== item));
    } else {
      setActiveList([...activeList, item]);
    }
  };
  const closeDropDown = (e: any) => {
    if (!document.getElementById("dropDown")?.contains(e.target)) {
      setExpand(false);
    }
  };
  return (
    <main className='flex min-h-screen flex-col items-start justify-start gap-8 p-24'>
      <div
        onClick={(e) => {
          closeDropDown(e);
        }}
        className='fixed w-full h-full'></div>
      <h1 className='text-4xl font-bold'>creating a custome dropdown list</h1>
      <p className='text-xl font-medium'>created by nextjs</p>

      <DropDown
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        addItem={addItem}
        dropDownList={dropDownList}
        expand={expand}
        handleExpand={handleExpand}
        handleActive={handleActive}
        activeList={activeList}
      />
    </main>
  );
}
