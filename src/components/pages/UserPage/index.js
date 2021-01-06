import React from "react";
import {
    HeaderBG,
    Avatar,
    Joined,
    Username,
    User,
    UserDetails,
} from "./styles";
import UserList from "./UserLists";
import GuestList from "./GuestList";
import { useAuth } from "contexts/AuthContext";
import getIcon from "util/getIcon";

export default function Profile() {
    const { state: AuthState } = useAuth();
    const { user } = AuthState;
    
    return (
        <>
            <HeaderBG>
                <User>
                    {user ? (
                        <Avatar
                            src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=256
                    `}
                        />
                    ) : (
                        <Avatar as="svg">
                            <use href={getIcon("user-circle")} />
                        </Avatar>
                    )}
                    <UserDetails>
                        <Username>{user ? user.username : "Guest"}</Username>
                        <Joined>{user?.name}</Joined>
                    </UserDetails>
                </User>
            </HeaderBG>
            {user ? <UserList /> : <GuestList />}
        </>
    );
}
