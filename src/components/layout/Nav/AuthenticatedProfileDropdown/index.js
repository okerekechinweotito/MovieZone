import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
    UserIcon,
    NavBtn,
} from "./styles";
import { useAuth } from "contexts/AuthContext";
import actionTypes from "ActionTypes";
import getIcon from "util/getIcon";

export default function ProfileDropdown() {
    const { state: AuthState, dispatch } = useAuth();
    const { user } = AuthState;
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);

    const logoutUser = () => {
        dispatch({ type: actionTypes.LOGOUT });
        history.push("/");
    };

    const goToProfile = () => {
        history.push("/profile");
        window.location.reload();
    };
    
    const initial = { opacity: 0, y: -100 };
    const animate = { opacity: 1, y: 0 };
    const transition = { delay: 2 };

    return (
        <DropdownHead
            onMouseLeave={closePanel}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <DropdownButton onClick={handleClick} name={user?.username}>
                {user ? (
                    <UserIcon
                        src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=64
                    `}
                        alt={`${user?.username} avatar`}
                    />
                ) : (
                    <UserIcon as="svg">
                        <use href={getIcon("user-circle")} />
                    </UserIcon>
                )}
            </DropdownButton>
            <DropdownBody isOpen={isOpen}>
                <DropdownItem>
                    <NavBtn onClick={goToProfile}>
                        {user ? user.username : "Guest"} Profile
                    </NavBtn>
                </DropdownItem>
                <DropdownItem>
                    <NavBtn onClick={logoutUser}>Logout</NavBtn>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
