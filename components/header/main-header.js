
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-background";
import classes from './main-header.module.css';

export default function MainHeader(){   
 
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link  className={classes.logo} href="/"> 
                    <Image src={logoImg} alt="NextLevel Food Logo" priority/>
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals"> Browse Meals </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community"> Community </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}