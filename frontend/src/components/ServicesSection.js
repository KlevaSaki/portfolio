import styled from "styled-components";
import { InnerLayout } from "../styles/LayoutStyles";


import React from 'react'
import Title from "./Title";
import ServiceCard from "./ServiceCard";

import image5 from "../assets/monitoring.png";
import image3 from "../assets/burger.png";
import image4 from "../assets/chef.png";

function ServicesSection() {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={"Services"} span={"Services"}/>
                <div className="services">
                    <ServiceCard image={image5} title={"Web Design & Programming"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, aspernatur!"} />
                    <ServiceCard image={image3} title={"Food Photography"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, aspernatur!"} />
                    <ServiceCard image={image4} title={"Cooking"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, aspernatur!"} />
                </div>
                
            </ServiceSectionStyled>
        </InnerLayout>
    )
}


const ServiceSectionStyled = styled.div`
    .services {
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
    }
`

export default ServicesSection
