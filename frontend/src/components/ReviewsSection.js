import styled from "styled-components";
import { InnerLayout } from "../styles/LayoutStyles";


import React from 'react'
import Title from "./Title";
import ReviewItem from "./ReviewItem";

function ReviewsSection() {
    return (
            <ReviewsSectionStyled>
                <Title title={"Reviews"} span={"Reviews"} />
                <InnerLayout>
                    <div class="reviews">
                        <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, perferendis?"} />
                        <ReviewItem text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, perferendis?"} />
                    </div>
                </InnerLayout>
            </ReviewsSectionStyled>
    )
}



const ReviewsSectionStyled = styled.div`
    .reviews {
        display: flex;
        
    }
`

export default ReviewsSection
