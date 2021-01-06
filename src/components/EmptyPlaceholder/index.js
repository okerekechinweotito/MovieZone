import React from "react";
import { EmptyBody, EmptyIcon, EmptyTitle } from "./styles";
import getIcon from "util/getIcon";

export default function EmptyReviews({ title }) {
    return (
        <EmptyBody>
            <EmptyIcon>
                <use href={getIcon('sad')}/>
            </EmptyIcon>
            <EmptyTitle>{title}</EmptyTitle>
        </EmptyBody>
    );
}
