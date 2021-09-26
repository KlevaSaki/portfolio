import React from 'react';
import styled from "styled-components";
import ImageSection from '../components/ImageSection';
import ReviewsSection from '../components/ReviewsSection';
import ServicesSection from '../components/ServicesSection';
import Title from '../components/Title';
import {MainLayout} from '../styles/LayoutStyles';

function AboutPage() {
    return (
        <MainLayout>
            <AboutPageStyled>
                <Title title={"About Me"} span={"About Me"} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutPageStyled>
        </MainLayout>
    )
}


const AboutPageStyled = styled.section`


`

export default AboutPage
