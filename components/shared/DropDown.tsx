import { DropDownProps } from "@/types/Types";
import Image from "next/image";
import React from "react";
import styles from "@/styles/dropDown.module.scss";
export default function DropDown({
  inputValue,
  addItem,
  handleInputChange,
  dropDownList,
  expand,
  handleExpand,
  handleActive,
  activeList,
}: DropDownProps) {
  return (
    <div className='flex flex-col gap-2 w-fit max-h-fit relative' id='dropDown'>
      <form
        onSubmit={(e) => {
          addItem(inputValue);
          e.preventDefault();
        }}>
        <label className='input input-bordered input-info flex items-center gap-2 bg-white'>
          <input
            type='text'
            className='grow '
            placeholder='Search'
            onChange={(e) => {
              handleInputChange(e);
            }}
            value={inputValue}
          />
          {/* expand icon */}
          <Image
            alt='expand icon'
            height={20}
            width={20}
            src='/assets/icons/collapseArrow.png'
            onClick={handleExpand}
            className={`${
              expand ? "" : "rotate-180"
            } transition-all duration-500`}
          />
        </label>
      </form>
      <div
        className={`  bg-white   rounded-lg  ${styles.dropdown}  ${
          expand ? "max-h-60 overflow-y-scroll" : "max-h-0  overflow-hidden "
        }`}>
        <ul className={`p-2   `}>
          {dropDownList.length > 0 ? (
            dropDownList.map((item, q) => {
              // if dynamic this would change based on id
              const isActive = activeList.includes(item);
              return (
                <li
                  className={`${
                    isActive ? "bg-[#f2f4ff]" : "bg-white"
                  } p-2 rounded-lg cursor-pointer hover:bg-blue-200 flex justify-between items-center gap-2`}
                  key={q}
                  onClick={() => {
                    handleActive(item);
                  }}>
                  <span className={`${isActive ? "text-[#7f94dc]" : ""}`}>
                    {item}
                  </span>
                  {/* if active shows the icon */}
                  {isActive && (
                    <Image
                      alt='check icon'
                      height={20}
                      width={20}
                      src='/assets/icons/checked.png'
                      className='w-5 h-5'
                    />
                  )}
                </li>
              );
            })
          ) : (
            <span className='text-gray-500 w-full text-center'>No Results</span>
          )}
        </ul>
      </div>
    </div>
  );
}
