import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavStyle, NavContainer, Logo, UserIcon, Menu } from "./styles";
import ProfileDropdown from "./ProfileDropdown";
import AuthProfileDropdown from "./AuthenticatedProfileDropdown";
import Dropdown from "components/Dropdown";
import Search from "components/Search";
import MobileNav from "components/layout/MobileNav";
import getIcon from "util/getIcon";
import logoDir from "assets/img/logo.png";
import { useAuth } from "contexts/AuthContext";

export const LINK_ONE = [
    {
        href: (type) => `/list/${type}/trending`,
        label: "Trending",
    },
    {
        href: (type) => `/list/${type}/popular`,
        label: "Popular",
    },
    {
        href: (type) => `/list/${type}/upcoming`,
        label: "Upcoming",
    },
    {
        href: (type) => `/list/${type}/toprated`,
        label: "Top Rated",
    },
];

export const LINK_TWO = [
    {
        href: (type) => `/list/${type}/toprated`,
        label: "Top Rated",
    },
    {
        href: (type) => `/list/${type}/popular`,
        label: "Popular",
    },
    {
        href: (type) => `/list/${type}/airing`,
        label: "Airing",
    },
    {
        href: (type) => `/list/${type}/today`,
        label: "Today",
    },
];

export default function Nav() {
    const { state: AuthState } = useAuth();
    const { isLoggedIn, guestSession } = AuthState;
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);

    // CLOSE THE NAV EVERYTIME THE URL CHANGES
    useEffect(() => {
        if (location.pathname.includes("login")) {
            setIsDisplayed(false);
        } else {
            setIsDisplayed(true);
        }
        setIsOpen(false);
    }, [location.pathname]);

    const handleClick = () => setIsOpen(true);

    const initial = { x: -100, opacity: 0 };
    const animate = { x: 0, opacity: 1 };
    const transition = { delay: 2 };
    return (
        <NavStyle isDisplayed={isDisplayed}>
            <NavContainer>
                <Link to="/" className="logo-link">
                    <Logo
                        src={logoDir}
                        alt="Movie Zone Logo"
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                </Link>
                <Search />
                <Dropdown type="movie" title="Movies" links={LINK_ONE} />
                <Dropdown type="tv" title="TV Shows" links={LINK_TWO} />
                {isLoggedIn || guestSession ? (
                    <AuthProfileDropdown />
                ) : (
                    <ProfileDropdown />
                )}
                <Menu onClick={handleClick}>
                    <UserIcon>
                        <use href={getIcon("menu")} />
                    </UserIcon>
                </Menu>
            </NavContainer>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </NavStyle>
    );
}
