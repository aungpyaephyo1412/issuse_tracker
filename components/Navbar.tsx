"use client"
import Link from "next/link";
import {AiFillBug} from "react-icons/ai";
import {navLinks} from "@/Util";
import {usePathname} from "next/navigation";
const Navbar = () => {
    const currentPath = usePathname()
    return (
        <nav className="flex w-full h-14 px-5 items-center justify-between mb-5">
            <Link href='/' >
                <AiFillBug/>
            </Link>
            <ul className='flex gap-x-4'>
                {
                    navLinks.map(({label,href})=><li key={href}>
                        <Link href='/' className={`${currentPath === href ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors`}>
                            {label}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
