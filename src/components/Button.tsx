import React from "react";

interface ButtonProps {
  label: string;
  iconUrl: string;
  onClick?: () => void;
}

const Button = ({ label, iconUrl, onClick }: ButtonProps) => {
  return (
    <button
      id=""
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:bg-coral-red-500 hover:text-white focus:outline-none active:shadow-none"
      name={label}
    >
      <img src={iconUrl} alt={label} className="ml-2 rounded-full w-5 h-5">
        {label}
      </img>
    </button>
  );
};

export default Button;
