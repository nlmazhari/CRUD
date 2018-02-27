//CommentList.js
import React, { Component } from 'react'
import Comment from './Comment'
import style from './style'
class CommentList extends Component {
    componentDidMount() { 
        console.log('====================================');
        console.log('commentList props', this.props);
        console.log('====================================');
    }
    
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment
                    customerID={comment.customerID}
                    firstName={comment.firstName}
                    lastName={comment.lastName}
                    birthday={comment.birthday}
                    gender={comment.gender}
                    lastContact={comment.lastContact}
                    customerLifetimeValue={comment.customerLifetimeValue}
                    uniqueID={comment['_id'] }
                    onCommentDelete = { this.props.onCommentDelete }
                    onCommentUpdate = { this.props.onCommentUpdate }
                    key = { comment['_id'] } 
                    >
                </Comment>
            )
        })
        return (
            <div style={style.commentList}>
                {commentNodes}
            </div>
        )
    }
}
export default CommentList;