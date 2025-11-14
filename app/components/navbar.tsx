import React from "react";
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
export default function NavBar(){
    return(
        <nav className="bg-slate-950 ">
            <ul className="flex flex-row space-x-10 p-4 ">
                <NavLink href="/">home</NavLink>
                <NavLink href="/cv">CV</NavLink>
            </ul>
        </nav>
    )
}