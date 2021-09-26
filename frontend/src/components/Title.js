import React from 'react';
import styled from "styled-components";

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}


const TitleStyled = styled.div`
    position: relative;
    margin-left: 5rem;

    h2 {
        position: relative;
        color: var(--white-color);
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
        text-align: left;
        padding-bottom: .4rem;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 8rem;
            height:.33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }

        span {
            font-weight: 900;
            font-size: 4rem;
            color: rgba(25,29,43,.95);
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
        }
    }
`

export default Title;
