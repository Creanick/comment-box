import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import HeartIcon from "../../../components/HeartIcon/";
import MessageIcon from '../../../components/MessageIcon/';
import styles from './InteractionBar.module.scss';
import countFormatter from '../../../utils/countFormatter.js';
const useStyles = makeStyles(()=>createStyles(
    {
        grow: {
            flexGrow: 1
        },
        commentIconBox:{
            background: "#eee",
            borderRadius: "25px",
            padding: "3px 12px 2px",
            cursor: "pointer",
            transition:"all 0.3s",
            "&:hover":{
                boxShadow:"0px 3px 12px rgba(69,147,255,0.5)",
                background: "#4593FF",
                color: "#4593FF"
            }
        },
        paddingControl:{
            padding:"0px 4px"
        }
    }
    ))
function InteractionBar({likes=0,comments=0,liked,onLikeClick,onCommentClick,onReplyClick,...rest}) {
    const classes = useStyles()
    const iconSize = 22;
    return (
        <Grid container spacing={2} alignItems="center" {...rest}>
            <Grid item>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                    <HeartIcon width={iconSize} solid={liked} onClick={onLikeClick}/>
                    </Grid>
                    <Grid item className={styles.interactionFont}>{countFormatter(likes)}</Grid>

                </Grid>
            </Grid>
            <Grid item>
                <Grid onClick={onCommentClick} container spacing={0} alignItems="center" className={[styles.commentIconBox,classes.commentIconBox]}>
                    <Grid item className={classes.paddingControl}>
                    <MessageIcon width={iconSize} />

                    </Grid>
                    <Grid item className={[styles.interactionFont,classes.paddingControl].join(" ")}>
                        {countFormatter(comments)}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.grow}>
                <span className={[styles.interactionFont,styles.reply].join(" ")}><span onClick={onReplyClick}>Reply</span></span>
            </Grid>
        </Grid>
    )
}

export default InteractionBar
