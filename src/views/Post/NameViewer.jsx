import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import diffDate from '../../utils/diffDate';
const NameWrapper = styled.div`
    & .postName{
        font-size: 15px;
        font-weight: 600;
    }
    & .postDate{
        color: grey;
        font-size: 12px;
        font-weight: 600;
        display: inline-block;
        margin-left: 10px;
    }
`
function NameViewer(props) {
    const {name="Unknown",date=new Date()} = props;
    return (
        <NameWrapper>
            <span className="postName">{name}</span> <span className="postDate">{diffDate(date)}</span>
        </NameWrapper>
    )
}
NameViewer.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string
}
export default NameViewer
