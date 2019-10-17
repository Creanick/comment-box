import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Delete} from '../../../assets/icons/delete.svg'
import styled from 'styled-components'
const CloseContent = styled.div`
    background: #FF4D4D;
    color: white;
    text-align: right;
    padding: 8px 8px 6px;
    border-radius: 4px;
    position: absolute;
    right: 0;
    top:0;
    width: 50px;
    cursor: pointer;
    transition: all 0.3s;
    transform: translate(-10px,0px);
    &:hover{
        background: red;
    }
`
const Content = styled.p`
    background: #F8F8F8;
    background: ${props=>props.color?props.color:"#F8F8F8"};
    padding: 10px 16px;
    border-radius: 0px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 1.5rem;
    font-weight: 500;
    color: #5d5d5d;
    z-index: 100;
    position: relative;
    .moreContent{
        color: #4593FF;
        font-size: 12px;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
const ContentWrapper = styled.div`
    position: relative;
    cursor: pointer;
    &:hover ${CloseContent}{
        transform: translate(24px,0px);
    }
`
function PostContent({color,children,dangerLength=200,compressLength=100,onDeleteClick}) {
    const [expand, setExpand] = useState(false)
    const isMoreAvailable = children.length > dangerLength;
    let moreContent = null;
    if(isMoreAvailable){
        moreContent = (
            <>
                {!expand&&<span>...</span>}<span onClick={()=>setExpand(!expand)} className="moreContent">{expand?" < See Less":"See More"}</span>
            </>
        )
    }
    return children.length > 0?(
        <ContentWrapper >
            <Content color={color}>{isMoreAvailable?(expand?children:children.slice(0,compressLength)):children}{moreContent}</Content>
            <CloseContent onClick={onDeleteClick}><Delete width={10}/></CloseContent>
        </ContentWrapper>
    ):null
}
PostContent.propTypes = {
    color:PropTypes.string,
    children:PropTypes.string,
    dangerLength:PropTypes.number,
    compressLength: PropTypes.number,
    onDeleteClick: PropTypes.func
}
export default PostContent
