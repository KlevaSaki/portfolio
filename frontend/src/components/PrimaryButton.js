import styled from "styled-components";

import React from 'react'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.2rem;
    color: #ffff;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    border-radius: 5px;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;

    &:hover::after {

        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--white-color);
        left: 0;
        bottom: 0;
        border-radius: 5px;
        opacity: .6;
        animation: ButtonHoverSlideIn .7s alternate;
        transition: all .6s ease-in-out;
    }


    @keyframes ButtonHoverSlideIn {
        0%{
            width: 0%;
        }

        100% {
            width: 100%;
        }
    }
`

export default PrimaryButton
