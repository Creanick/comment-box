import React from 'react'
import PropTypes from 'prop-types'
import classes from './MoreComment.module.css';
import countFormatter from '../../utils/countFormatter';
function MoreComment(props) {
    const {moreClick,comment={total:0,visible: 0}} = props;
    return (
        <div><span className={classes.moreComment} onClick={moreClick}>View More Comments</span> {comment.total > 0 && <span className={classes.commentCount}>{countFormatter(comment.visible) || 0} of {countFormatter(comment.total)}</span>}</div>
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
