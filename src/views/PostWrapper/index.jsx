import React from 'react'
import styled from 'styled-components';
const Stripe = styled.span`
    display: inline-block;
    width: 4px;
    height: 100%;
    position: absolute;
    background: grey;
    background: ${({color})=>color?color:"grey"};
    top:0;
    left:0;
`
const Wrapper = styled.div`
    background: linear-gradient(to right,#eee,transparent);
    background: ${props=>props.color?`linear-gradient(to right,${props.color},transparent)`:"linear-gradient(to right,#eee,transparent)"};
    padding: 12px;
    padding-left: 20px;
    position: relative;
`
function randomHue(){
    return Math.floor(Math.random() * 361)
}
function PostWrapper(props) {
    const hue = randomHue();
    const stripeColor = `hsla(${hue}, 60%, 70%, 1)`;
    const backgroundColor = `hsla(${hue}, 60%, 95%, 1)`;
    const postColor = `hsla(${hue}, 60%, 93%, 1)`
    return (
        <Wrapper color={backgroundColor}>
            <Stripe color={stripeColor}></Stripe>
            {props.children(postColor)}
        </Wrapper>
    )
}

export default PostWrapper
