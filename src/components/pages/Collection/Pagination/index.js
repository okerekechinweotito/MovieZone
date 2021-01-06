import React from "react";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { PaginationContainer, Prev, Next, PaginationMain } from "./styles";

export default function Pagination({
    setPageCount,
    pageCount,
    pageLimit,
    length,
}) {
    const goToPrev = () => {
        setPageCount((prevCount) => (prevCount -= 1));
        window.scrollTo(0,0,);
    };

    const goToNext = () => {
        setPageCount((prevCount) => (prevCount += 1));
        window.scrollTo(0,0,);
    };

    return (
        length !== 0 && (
            <PaginationMain pageCount={pageCount}>
                <PaginationContainer>
                    <Prev onClick={goToPrev} pageCount={pageCount}>
                        <Icon>
                            <use href={getIcon("arrow-left")} />
                        </Icon>
                    </Prev>

                    <h3>
                        Page {pageCount} of {pageLimit}
                    </h3>

                    <Next
                        onClick={goToNext}
                        pageCount={pageCount}
                        pageLimit={pageLimit}
                    >
                        <Icon>
                            <use href={getIcon("arrow-right")} />
                        </Icon>
                    </Next>
                </PaginationContainer>
            </PaginationMain>
        )
    );
}
