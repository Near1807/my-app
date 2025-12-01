"use client";
import React, { useState } from "react";
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink(props: NavLinkProps) {
  return (
    <li className="bg-black text-blue-50">
      <a className={`${props.className}`} href={props.href}>
        {props.children}
      </a>
    </li>
  );
}

export function DarkButton(props: { className?: string }) {
  const [isDark, setDark] = useState(true);
  const toggleDark = () => {
    setDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };
  return (
    <>
      <button
        className={`rounded-2xl px-6 dark:bg-[url('/images/night.jpg')] dark:bg-[length:100px_25px] bg-[url('/images/day.jpg')] bg-[length:100px_25px] transition-colors duration-200 ${props.className}`}
        onClick={toggleDark}
      >
        {isDark ? "" : ""}
      </button>
    </>
  );
}

export default function NavBar() {
  const [isDark, setDark] = useState(false);
  function ToggleDark() {
    setDark(!isDark);
  }
  return (
    <nav className="bg-black">
      <div className="flex flex-row p-4 justify-between px-10">
        <ul className="flex flex-row space-x-10 grid-cols-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/cv">CV</NavLink>
          <NavLink href="/Blog">Blog</NavLink>
        </ul>
        <DarkButton className=""></DarkButton>
      </div>
    </nav>
  );
}
