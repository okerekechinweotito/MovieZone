import React from "react";
import { NavLink } from "react-router-dom";

import getIcon from "util/getIcon";
import { DropdownHead, DropdownButton, UserIcon } from "./styles";

export default function ProfileDropdown() {
    const initial = { opacity: 0, y: -100 };
    const animate = { opacity: 1, y: 0 };
    const transition = { delay: 2 };
    return (
        <DropdownHead
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <NavLink to="/login">
                <DropdownButton>
                    <UserIcon>
                        <use href={getIcon("user-circle")} />
                    </UserIcon>
                </DropdownButton>
            </NavLink>
        </DropdownHead>
    );
}
