//CommentBox.js
import React, { Component } from 'react'
import axios from 'axios'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import style from './style'
import { Row, Col, Modal, Button } from 'react-bootstrap'

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], showAdd: false };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }
    loadCommentsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                console.log('====================================');
                console.log('loaded data from server', res.data);
                console.log('====================================');
                this.setState({ data: res.data });
            })
    }
    handleCommentSubmit(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        console.log('====================================');
        console.log('submit data', newComments);
        console.log('====================================');
        this.setState({ data: newComments });
        axios.post(this.props.url, comment)
            .catch(err => {
                console.error(err);
                this.setState({ data: comments });
            });
    }
    handleCommentDelete(id) {
        axios.delete(`${this.props.url}/${id}`)
            .then(res => {
                console.log('Comment deleted');
            })
            .catch(err => {
                console.error(err);
            });
    }
    handleCommentUpdate(id, comment) {
        //sends the comment id and new author/text to our api
        axios.put(`${this.props.url}/${id}`, comment)
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    showAdd = () => {
        this.setState({ showAdd: true })
    }
    close = () => {
        this.setState({ showAdd: false })        
    }
    render() {
        return (
            <div style={style.commentBox}>
                <Row style={style.row}>
                    <Col xs={12} md={10}>
                        <p style={style.pageTitle}>Customers:</p>
                    </Col>
                    <Col xs={12} md={2}>
                        <Button style={style.addBtn} onClick={this.showAdd}>add a new customer</Button>                
                    </Col>
                </Row>
                <div style={style.comment}>
                    <h3 style={style.commentItem}>customer ID</h3>
                    <h3 style={style.commentItem}>name</h3>
                    <h3 style={style.commentItem}>birthday</h3>
                    <h3 style={style.commentItem}>gender</h3>
                    <h3 style={style.commentItem}>last contact</h3>
                    <h3 style={style.commentItem}>lifetime value</h3>
                    <h3 style={style.commentItem}>actions</h3>
                </div>
                <CommentList
                    onCommentDelete={this.handleCommentDelete}
                    onCommentUpdate={this.handleCommentUpdate}
                    data={this.state.data} />
                <Modal show={this.state.showAdd} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a New Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CommentForm onCommentSubmit={this.handleCommentSubmit} />    
                        <Button
                            style={style.commentFormPost}
                            onClick={this.close}>
                            Close
                        </Button>                    
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default CommentBox;