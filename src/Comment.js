import React, { Component } from 'react'
import style from './style'
import moment from 'moment'
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBeUpdated: false,
            showUpdate: false
        };
        //binding all our functions to this class
        this.deleteComment = this.deleteComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleLifeChange = this.handleLifeChange.bind(this);
        this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
    }
    componentDidMount() { 
        console.log('====================================');
        console.log('comments props:', this.props);
        console.log('====================================');
    }
    
    updateComment(e) {
        e.preventDefault();
        //brings up the update field when we click on the update link.
        this.setState({ showUpdate: true });

    }
    close = () => {
        this.setState({ showUpdate: false })
    }
    handleCommentUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        //if author or text changed, set it. if not, leave null and our PUT 
        //request will ignore it.
        let firstName = (this.state.firstName) ? this.state.firstName : null;
        let lastName = (this.state.lastName) ? this.state.lastName : null;
        let birthday = (this.state.birthday) ? this.state.birthday : null;
        let gender = (this.state.gender) ? this.state.gender : null;
        let lastContact = (this.state.lastContact) ? this.state.lastContact : null;
        let customerLifetimeValue = (this.state.customerLifetimeValue) ? this.state.customerLifetimeValue : null;
        let comment = { firstName: firstName, lastName: lastName, birthday: birthday, gender: gender, lastContact: lastContact, customerLifetimeValue: customerLifetimeValue };
        this.props.onCommentUpdate(id, comment);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            firstName: '', 
            lastName: '',
            birthday: '',
            gender: '',
            lastContact: '',
            customerLifetimeValue: ''
        })
    }
    deleteComment(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onCommentDelete(id);
        console.log('oops deleted');
    }
    handleFirstChange(e) {
        this.setState({ firstName: e.target.value });
    }
    handleLastChange(e) {
        this.setState({ lastName: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ gender: e.target.value });
    }
    handleAuthorChange(e) {
        this.setState({ birthday: e.target.value });
    }
    handleContactChange(e) {
        this.setState({ lastContact: e.target.value });
    }
    handleLifeChange(e) {
        this.setState({ customerLifetimeValue: e.target.value });
    }
    render() {
        return (
            <div style={style.comment}>
                <p style={style.commentItem}>{this.props.customerID}</p>
                <p style={style.commentItem}>{this.props.firstName} {this.props.lastName}</p>
                <p style={style.commentItem}>{moment(this.props.birthday).format('YYYY-MM-DD h:mm:ss a')}</p>
                <p style={style.commentItem}>{this.props.gender}</p>
                <p style={style.commentItem}>{moment(this.props.lastContact).format('YYYY-MM-DD h:mm:ss a')}</p>
                <p style={style.commentItem}>{this.props.customerLifetimeValue}</p>
                <div>
                    <a style={style.updateLink} href='#' onClick={this.updateComment}>update</a>
                    <a style={style.deleteLink} href='#' onClick={this.deleteComment}>delete</a>
                </div>
                <Modal show={this.state.showUpdate} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update a Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form style={style.commentForm} onSubmit={this.handleCommentUpdate}>
                            <FormGroup>
                                <ControlLabel>First Name:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='first name'
                                    defaultValue={this.props.firstName}
                                    style={style.commentFormAuthor}
                                    value={this.state.firstName}
                                    onChange={this.handleFirstChange} >
                                </FormControl>
                                <ControlLabel>Last Name:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='last name'
                                    defaultValue={this.props.lastName}
                                    style={style.commentFormText}
                                    value={this.state.lastName}
                                    onChange={this.handleLastChange} >
                                </FormControl>
                                <ControlLabel>Birthday:</ControlLabel>
                                <FormControl
                                    type='date'
                                    placeholder='birthday'
                                    defaultValue={moment(this.props.birthday).format('YYYY-MM-DD')}
                                    style={style.commentFormAuthor}
                                    value={this.state.birthday}
                                    onChange={this.handleAuthorChange} >
                                </FormControl>
                                <ControlLabel>Gender:</ControlLabel>
                                <FormControl
                                    type='text'
                                    placeholder='gender'
                                    defaultValue={this.props.gender}
                                    style={style.commentFormText}
                                    value={this.state.gender}
                                    onChange={this.handleTextChange} >
                                </FormControl>
                                <ControlLabel>Last Contact:</ControlLabel>
                                <FormControl
                                    type='date'
                                    placeholder='last contacted at'
                                    defaultValue={moment(this.props.lastContact).format('YYYY-MM-DD')}
                                    style={style.commentFormAuthor}
                                    value={this.state.lastContact}
                                    onChange={this.handleContactChange} >
                                </FormControl>
                                <ControlLabel>Lifetime Value</ControlLabel>
                                <FormControl
                                    type='number'
                                    placeholder='lifetime value'
                                    defaultValue={this.props.customerLifetimeValue}
                                    style={style.commentFormText}
                                    value={this.state.customerLifetimValue}
                                    onChange={this.handleLifeChange} >
                                </FormControl>
                                <Button
                                    type='submit'
                                    style={style.commentFormPost}
                                    >
                                    Update
                                </Button>
                            </FormGroup>
                            <Button
                                style={style.commentFormPost}
                                onClick={this.close}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                
            </div >
        )
    }
}
export default Comment;