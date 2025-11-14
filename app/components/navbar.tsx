"use client"
import React, { useState } from "react";
type NavLinkProps = {
    href: string;
    children: React.ReactNode;
}

function NavLink(props:NavLinkProps){
    return(
        <li className="bg-slate-950 text-blue-50" >
            <a href={props.href}>{props.children}</a>
        </li>
    )
}

export function DarkButton(props: {className?: string;}){
    const [isDark,setDark] = useState(true);
    const toggleDark = () =>{
        setDark(!isDark);
        document.documentElement.classList.toggle('dark',!isDark);
    };
    return(
        <>
        <button className={`bg-white ${props.className}`} onClick={toggleDark}>{isDark ? "dark":"light"}</button>
        </>
    )  
}

export default function NavBar(){
    const [isDark,setDark] = useState(false);
    function ToggleDark() {
        setDark(!isDark);
    }
    return(
        <nav className="bg-slate-950">
            <div className=" flex flex-row p-4 justify-between px-10">
                <ul className="flex flex-row space-x-10 grid-cols-1">
                    <NavLink href="/">home</NavLink>
                    <NavLink href="/cv">CV</NavLink>
                </ul>
                <DarkButton className=""></DarkButton>
            </div>
        </nav>
    )
}


