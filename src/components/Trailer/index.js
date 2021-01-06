import React from "react";

import TrailerSlider from "./TrailerSlider";
import {
    TrailerStyle,
    TrailerContainer,
    TrailerButton,
    CloseIcon,
} from "./styles";
import getIcon from "util/getIcon";

export default function Trailer({ trailers, isOpen, setIsTrailerOpen }) {
    const handleClick = () => setIsTrailerOpen(false);

    return (
        <TrailerStyle isOpen={isOpen}>
            <TrailerContainer>
                {trailers && isOpen ? (
                    <TrailerSlider videos={trailers} />
                ) : (
                    <h2>No Trailer Found</h2>
                )}

                <TrailerButton onClick={handleClick}>
                    <CloseIcon>
                        <use href={getIcon("close-outline")} />
                    </CloseIcon>
                </TrailerButton>
            </TrailerContainer>
        </TrailerStyle>
    );
}
