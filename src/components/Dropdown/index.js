import React from "react";
import { NavLink } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
} from "./styles";

export default function Dropdown({ links, title, type }) {
    const initial = { opacity: 0, y:-100 };
    const animate = { opacity: 1, y:0 };
    const transition = { delay: 2 };

    return (
        <DropdownHead
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <DropdownButton>{title}</DropdownButton>
            <DropdownBody>
                {links?.map((link) => (
                    <DropdownItem key={link.href(type)}>
                        <NavLink to={link.href(type)}>{link.label}</NavLink>
                    </DropdownItem>
                ))}
            </DropdownBody>
        </DropdownHead>
    );
}
