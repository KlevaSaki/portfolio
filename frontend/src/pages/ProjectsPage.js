import React from 'react';
import styled from 'styled-components'
import Title from '../components/Title'
import { InnerLayout, MainLayout } from '../styles/LayoutStyles'

function ProjectsPage() {
    return (
        <MainLayout>
            <Title title={"Projects"} span={"Projects"} />
            <InnerLayout>
                <ProjectsPageStyled>
                    
                </ProjectsPageStyled>
            </InnerLayout>
        </MainLayout>
    )
}

const ProjectsPageStyled = styled.div`

`

export default ProjectsPage
