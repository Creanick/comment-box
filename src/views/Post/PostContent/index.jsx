import React,{useState} from 'react'
import styled from 'styled-components'
const Content = styled.p`
    background: #eee;
    padding: 10px 16px;
    border-radius: 0px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 1.5rem;
    font-weight: 500;
    color: #5d5d5d;
    .moreContent{
        color: #4593FF;
        font-size: 12px;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`
function PostContent({children,dangerLength=200,compressLength=100}) {
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
        <div>
            <Content>{isMoreAvailable?(expand?children:children.slice(0,compressLength)):children}{moreContent}</Content>
        </div>
    ):null
}

export default PostContent
