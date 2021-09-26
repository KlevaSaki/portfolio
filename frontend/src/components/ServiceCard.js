import styled from "styled-components";

import React from 'react'

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}


const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-color-2);
    margin: 0 1rem;
    /* border-top: 8px solid var(--border-color); */
    /* border-right: 1px solid var(--border-color); */
    /* border-left: 1px solid var(--border-color); */
    border-bottom: 1px solid var(--border-color);
    position: relative;

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 8px;
        background-color: var(--border-color);
        top: 0;
        left: 0;
    }

    &:hover::after {
        /* transform: translateY(3px); */
        animation: borderTop 1s forwards;
        /* border-top: 8px solid var(--primary-color); */
    }

    .container {
        padding: 2rem;
        text-align: left;
        
        img {
            width: 80px;
            height: 80px;
        }

        h4 {
            color: var(--white-color);
            font-size: 1.35rem;
            padding: 1rem 0;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 4rem;
                height: 4px;
                background-color: var(--border-color);
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p {
            margin-top: 1rem;
        }
    }

    @keyframes borderTop {
        0% {
            width: 0;
            /* background-color: var(--primary-color); */
        }

        100% {
            width: 100%;
            background-color: var(--primary-color);

        }
    }

`



export default ServiceCard
