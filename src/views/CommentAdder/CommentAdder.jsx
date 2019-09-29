import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import RandomAvatar from '../../components/RandomAvatar';
import config from '../../config';
import Input from './Input';
import SubmitButton from './SubmitButton';

const useStyles = makeStyles(()=>createStyles(
    {
        grow: {
            flexGrow: 1
        }
    }
    ))
function CommentAdder(props) {
    const classes = useStyles()
    const comment = useRef()
    const name = useRef()
    function submitHandler(event){
        event.preventDefault();
        if(props.onSubmit){
            props.onSubmit(event,comment.current,name.current);
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={2} alignItems="flex-start">
                <Grid item>
                    <RandomAvatar style={{marginTop: "0px",display:"inline-block"}} avatarStyle={props.avatarStyle} size={config.avatarSize}/>
                </Grid>
                <Grid item className={classes.grow}>
                    <Grid container spacing={2} direction="column">
                        <Grid item >
                            <Input placeholder="Add your comment..." ref={comment} onChange={props.onCommentChange}/>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item className={classes.grow}>
                                    <Input placeholder="Enter Your Name" ref={name} onChange={props.onNameChange}/>
                                </Grid>
                                <Grid item>
                                    <SubmitButton>Submit</SubmitButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}
CommentAdder.propTypes = {
    avatarStyle: PropTypes.object,
    onCommentChange: PropTypes.func,
    onNameChange: PropTypes.func,
    onSubmit: PropTypes.func
}
export default CommentAdder
