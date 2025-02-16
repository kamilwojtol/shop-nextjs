import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "primary" | "secondary";
  big?: boolean;
};

export default function Button({ children, type, big }: Props) {
  return (
    <button
      className={clsx("bg-white px-5 py-3 rounded-xl w-full h-12 text-black", {
        "h-20": big,
        "bg-black text-white": type === "secondary",
      })}
    >
      {children}
    </button>
  );
}
