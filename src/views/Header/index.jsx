import React from 'react'
import PropTypes from 'prop-types'
import classes from './Header.module.css';
function Header(props) {
    const {totalPost=0} = props;
    return (
        <div>
            <h1 className={classes.mainHeader}>The Conversation({totalPost})</h1>
            <p className={classes.tagLine}>Start a discussion, Post with kindness</p>
        </div>
    )
}
Header.propTypes = {
    totalPost: PropTypes.number
}
export default Header
