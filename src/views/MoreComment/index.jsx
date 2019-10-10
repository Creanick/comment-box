import React from 'react'
import PropTypes from 'prop-types'
import classes from './MoreComment.module.css';
function commentCountFormatter(num){
    if(num > 1000){
        num = Math.floor(num/1000)
        return num+"k+"
    }
    return num;
}
function MoreComment(props) {
    const {moreClick,comment={total:0,visible: 0}} = props;
    return (
        <div><span className={classes.moreComment} onClick={moreClick}>View More Comments</span> {comment.total > 0 && <span className={classes.commentCount}>{commentCountFormatter(comment.visible) || 0} of {commentCountFormatter(comment.total)}</span>}</div>
    )
}
MoreComment.propTypes = {
    moreClick: PropTypes.func,
    comment:PropTypes.shape({
        total: PropTypes.number,
        visible:PropTypes.number
    })
}
export default MoreComment
