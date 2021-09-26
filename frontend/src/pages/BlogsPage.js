import React from 'react'
import styled from 'styled-components';
import Title from '../components/Title.js';
import blogs from "../data/blogs.js";
import { InnerLayout, MainLayout } from '../styles/LayoutStyles';

function BlogsPage() {
    return (
        <MainLayout>
            <BlogsPageStyled>
                <Title title={"Blogs"} span={"Blogs"} />
                <InnerLayout className="container">
                    {
                        blogs.map(blog => {
                            const {image, id, title, link } = blog;
                            return <div key={id} className="blog-item">
                                <div className="image">
                                    <img src={image} alt="" />
                                </div>

                                <a href={link}>{title}</a>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsPageStyled>
        </MainLayout>
    )
}

const BlogsPageStyled = styled.div`
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;

        .blog-item {
            background-color: var(--background-dark-color-2);
            padding: 1rem 1rem;
            text-align: left;
            z-index: 100;

                
            a{
                font-size: 1.3rem;
                cursor: pointer !important;
                transition: all .4s ease-in-out;
                color: var(--white-color);

                &:hover {
                    color: var(--primary-color) !important;
                }
            }


            .image {
                width: 100%;
                height: 90%;
                transition: all .4s ease-in-out;

                img {
                    width: 100%;
                    height: 90%;
                    object-fit: cover;
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-color: red;
                        top: 0;
                        left: 0;
                    }

                    &:hover {
                        cursor: pointer;
                        transform: translateY(-3px);
                    }
                }
            }

        }

        

        
    }
`;

export default BlogsPage
