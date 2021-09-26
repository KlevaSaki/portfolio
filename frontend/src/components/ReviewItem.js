import styled from "styled-components";


import React from 'react'

function ReviewItem({text}) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )
}


const ReviewItemStyled = styled.div`
    height: 15vh;
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-color-2);
    width: 50%;
    position: relative;
    &:not(:first-child) {
        margin-left: 2rem;
    }

    &::after {
        content: "";
        position: absolute;
        left: 2rem;
        top: 100%;
        border-width: .8rem;
        border-style: solid;
        border-color: var(--background-dark-color-2) transparent transparent var(--background-dark-color-2);
    }
    
    p {
        padding: 1rem 0;
        text-align: left;
    }
`

export default ReviewItem
