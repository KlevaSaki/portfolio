import React from 'react';
import styled from 'styled-components'
import Title from '../components/Title'
import { InnerLayout, MainLayout } from '../styles/LayoutStyles'

function ResumePage() {
    return (
        <MainLayout>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <ResumePageStyled>
                    
                </ResumePageStyled>
            </InnerLayout>
        </MainLayout>
    )
}


const ResumePageStyled = styled.div`

`

export default ResumePage
