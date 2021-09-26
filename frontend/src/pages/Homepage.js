import React from 'react';
import styled from "styled-components";
import Particle from '../components/Particles';
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

function Homepage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>

            <div class="typography">
                <h1>Hi I'm&nbsp;<span>Kenny Ismaeli </span></h1>
                <p>
                    I design and create websites, mobile applications(Android & iOS), food photography and branding for restaurants, hotels and culinary personnels.
                    I am a Chef and I also love technology, so this is how I contribute and merge both worlds with knives, fire and code.
                </p>
                <div class="icons">
                    <a href="http://www.facebook.com" className="icon i-facebook">
                        <FacebookIcon color="#4267B2" />
                    </a>
                    <a href="https://www.github.com/kleva_saki" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
            
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        p {
            font-size: 1.2rem;
            /* line-height: 2px; */
        }

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;


            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:not(:last-child) {
                    margin-right: 1rem;
                }

                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }

                svg {
                    margin: 0.5rem;
                }
            }

            .i-youtube {
                &:hover {
                    border: 2px solid #FF0000; 
                }
            }

            .i-facebook {
                &:hover {
                    border: 2px solid #4267B2;
                }
            }
        }
    }

`

export default Homepage;
