import styled from "styled-components";

import image7 from "../assets/image-7.jpg";



import React from 'react'
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={image7} alt="resume" />
            </div>
            <div className="right-content">
                <h4>I am &nbsp;<span>Kenny Ismaeli</span> </h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cupiditate facere minus aliquam, 
                    in corrupti suscipit et atque quisquam nisi commodi illum, magni a ipsam. 
                    Architecto quisquam voluptatibus cupiditate quia.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Services</p>
                    </div>
                    <div className="info">
                        <p>: Kenny Ismaeli</p>
                        <p>: 28</p>
                        <p>: Kenyan</p>
                        <p>: Swahili, French, English</p>
                        <p>: Riyadh, Saudi Arabia</p>
                        <p>: Web Development, Food Photography, Cooking/Culinary Services</p>
                    </div>
                </div>
                <PrimaryButton title={"Download CV"} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.section`
    display: flex;
    margin: 5rem 0 0 0;
    /* border: 1px solid red; */

    .left-content {
        width: 100%;
        margin-right: 1rem;
        /* border: 1px solid yellow; */
        height: 40vh;

        img {
            width: 75%;
            position: relative;
            /* z-index: -1; */
            object-fit: cover;


            /* &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: red;
                left: 0;
                top: 0;
                border: 1px solid red;
                z-index: 1;
                opacity: 0.7;
            } */
        }


        
    }

    .right-content {
        text-align: left;
        margin-left: 2rem;

        h4 {
            font-size: 2rem;
            color: var(--white-color);

            span {
                font-size: 2rem;
            }
        }

        .paragraph {
            padding: 1rem 0;
        }

        .about-info {
            display: flex;
            margin-top: 2rem;
            /* border: 1px solid red; */
            padding-bottom: 1.5rem;

            .info-title {
                padding-right: 6rem;
                p {
                    padding: .3rem 0;
                    text-transform: uppercase;
                    text-align: left;
                    font-weight: 600;
                    &:not(:last-child) {
                        margin-bottom: 3px;
                    }
                }
            }

            .info {
                margin-left: -3rem;
                p {
                    padding: .3rem 0;
                    text-align: left;
                    &:not(:last-child) {
                        margin-bottom: 3px;
                    }
                }
            }
        }
    }
`;

export default ImageSection
