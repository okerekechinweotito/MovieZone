import React from "react";
import { Link } from "react-router-dom";

import { Cast, CastPhoto, Content, Placeholder } from "./styles";

export default function CastCard({ person }) {
    return (
        <Link to={`/person/${person.id}`}>
            <Cast>
                {person.profile_path ? (
                    <CastPhoto
                        src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                        alt={`${person.name}`}
                    />
                ) : (
                    <Placeholder>No Photo</Placeholder>
                )}

                <Content>
                    <h3>{person.name}</h3>
                    <p>as</p>
                    <p>{person.character}</p>
                </Content>
            </Cast>
        </Link>
    );
}
