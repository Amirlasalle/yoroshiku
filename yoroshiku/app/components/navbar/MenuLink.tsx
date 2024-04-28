'use client';

import React from "react";

interface MenuLinkProps{
    label:string;
    onClick: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({
    label,
    onClick
}) => {
  return (
    <div
    onClick={onClick}
    className="px-5 py-2 cursor-pointer hover:bg-hoverGray transition">
        {label}
    </div>
  );
};

export default MenuLink