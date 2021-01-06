import React from 'react'
import { SeasonBody,SeasonSample } from './styles';


export default function index() {
    return (
        <SeasonBody>
            <SeasonSample/>
            <SeasonSample as="figure"/>
        </SeasonBody>
    )
}
