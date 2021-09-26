import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.jpg";

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>ABOUT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>RESUME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="active-class" exact>PROJECTS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>BLOG</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contacts" activeClassName="active-class" exact>CONTACTS</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Rogers Ismaeli</p>
            </footer>
        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .active-class {
        background-color: var(--primary-color);
        color: var(--font-dark-color-2);
    }

    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;


        img {
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);

        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        margin-top: -5rem;

        li {
            display: block;

            a {
                display: block;
                padding: 5px 0;
                position: relative;
                font-size: 1rem;
                font-weight: 700;


                &::before {
                content: "";
                width: 0%;
                height: 100%;
                position: absolute;
                background-color: var(--primary-color);
                opacity: 0.21;
                bottom: 0;
                left: 0;
                transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
                }

                &:hover::before {
                width: 100%;
                }
            }

            
        }
    }

    .footer {
        border-top: 1px solid var(--border-color);
        padding: 5px 0;
        width: 100%;
        display: block;
        text-align: center;
        
        p {
            padding: 5px 0;
            margin-bottom: 20px;
        }
    }
`

export default Navigation
