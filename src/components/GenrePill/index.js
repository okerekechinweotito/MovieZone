import React from "react";
import { Link } from "react-router-dom";
import { Pill } from "./styles";

export default function GenrePill({ genre, id, type }) {
    return (
        <Link to={`/genre/${genre}/${type}/${id}`}>
            <Pill>{genre}</Pill>
        </Link>
    );
}
