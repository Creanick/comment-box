 import React from 'react'
 import Grid from '@material-ui/core/Grid';
 import PropTypes from 'prop-types';
 import RandomAvatar from '../../components/RandomAvatar';
 import NameViewer from './NameViewer'
 import PostContent from './PostContent';
 import InteractionBar from './InteractionBar';
 function Post({children="",postAvatarStyle,postAvatarSize,name,date,postColor,
 onPostDelete,liked,likes,comments,onPostLike,onPostComment,onPostReply}) {
     return children.length > 0?(
         <Grid container spacing={2}>
             <Grid item>
                 <RandomAvatar style={postAvatarStyle} size={postAvatarSize}/>
             </Grid>
             <Grid item>
                 <Grid container spacing={2} direction="column">
                     <Grid item>
                        <NameViewer name={name} date={date}/>
                     </Grid>
                     <Grid item>
                        <PostContent onDeleteClick={onPostDelete} color={postColor}>{children}</PostContent>
                     </Grid>
                     <Grid item>
                        <InteractionBar liked={liked} likes={likes} comments={comments} onLikeClick={onPostLike} onCommentClick={onPostComment} onReplyClick={onPostReply}/>
                     </Grid>
                 </Grid>
             </Grid>
         </Grid>
     ):null;
 }
 Post.propTypes = {
     children: PropTypes.string,
     postAvatarStyle: PropTypes.object,
     postAvatarSize:PropTypes.number,
     name: PropTypes.string,
     date:PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(Date)]),
     postColor:PropTypes.string,
     onPostDelete:PropTypes.func,
     liked:PropTypes.bool,
     likes:PropTypes.number,
     comments:PropTypes.number,
     onPostLike:PropTypes.func,
     onPostComment:PropTypes.func,
     onPostReply: PropTypes.func
 }
 export default Post
 