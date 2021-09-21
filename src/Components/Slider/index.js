import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import {Container, Arrow, Wrapper, Slide, ImgContainer, InfoContainer, Image, Title, Description, Button } from './SliderStyles'

const Slider = () => {
    return (
        <Container>
            <Arrow  direction="left">
               <ArrowLeftOutlined /> 
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALES</Title>
                        <Description>DON'T COMPROMISE ON STYLE! LET CONSONANT STYLE YOU. GET 40% OFF FOR NEW ARRIVALS. </Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALES</Title>
                        <Description>DON'T COMPROMISE ON STYLE! LET CONSONANT STYLE YOU. GET 40% OFF FOR NEW ARRIVALS. </Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALES</Title>
                        <Description>DON'T COMPROMISE ON STYLE! LET CONSONANT STYLE YOU. GET 40% OFF FOR NEW ARRIVALS. </Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
