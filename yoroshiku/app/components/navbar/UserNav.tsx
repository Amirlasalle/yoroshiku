"use client";

import { useState } from "react";
import MenuLink from "./MenuLink";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-2 relative inline-block border border-gray-200 rounded-full hover:shadow-md">
      <button 
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="cursor-pointer absolute flex flex-col  top-[60px] right-0 w-[220px] bg-white boreder rounded-xl shadow-md ">
          <MenuLink 
          label='Log in'
          onClick={() => console.log('clicked button')}
          />
            <MenuLink 
          label='Sign up'
          onClick={() => console.log('clicked button')}
          />
        </div>
      )}
    </div>
  );
};

export default UserNav;
