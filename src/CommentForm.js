import React, { Component } from 'react'
import style from './style'
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleLifeChange = this.handleLifeChange.bind(this);
    }
    handleIdChange(e) {
        this.setState({ customerID: e.target.value });
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
    handleSubmit(e) {
        e.preventDefault();
        
        let customerID = (this.state.customerID) ? this.state.customerID : null;
        let firstName = (this.state.firstName) ? this.state.firstName : null;
        let lastName = (this.state.lastName) ? this.state.lastName : null;
        let birthday = (this.state.birthday) ? this.state.birthday : null;
        let gender = (this.state.gender) ? this.state.gender : null;
        let lastContact = (this.state.lastContact) ? this.state.lastContact : null;
        let customerLifetimeValue = (this.state.customerLifetimeValue) ? this.state.customerLifetimeValue : null;
        
        this.props.onCommentSubmit({ customerID: customerID, firstName: firstName, lastName: lastName, birthday: birthday, gender: gender, lastContact: lastContact, customerLifetimeValue: customerLifetimeValue });
        this.setState({ 
            customerID: '',
            firstName: '', 
            lastName: '',
            birthday: '',
            gender: '',
            lastContact: '',
            customerLifetimeValue: '' });
    }
    render() {
        return (
            <Form style={style.commentForm} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Customer ID:</ControlLabel>
                    <FormControl
                        type='number'
                        style={style.commentFormAuthor}
                        value={this.state.customerID}
                        onChange= {this.handleIdChange} >
                    </FormControl>
                    <ControlLabel>First Name:</ControlLabel>
                    <FormControl
                        type='text'
                        style={style.commentFormAuthor}
                        value={this.state.firstName}
                        onChange= {this.handleFirstChange} >
                    </FormControl>
                    <ControlLabel>Last Name:</ControlLabel>
                    <FormControl
                        type='text'
                        style= {style.commentFormText}
                        value={this.state.lastName}
                        onChange={this.handleLastChange} >
                    </FormControl>
                    <ControlLabel>Birthday:</ControlLabel>
                    <FormControl
                        type='date'
                        style={style.commentFormAuthor}
                        value={this.state.birthday}
                        onChange= {this.handleAuthorChange} >
                    </FormControl>
                    <ControlLabel>Gender:</ControlLabel>
                    <FormControl
                        type='text'
                        style= {style.commentFormText}
                        value={this.state.gender}
                        onChange={this.handleTextChange} >
                    </FormControl>
                    <ControlLabel>Last Contact:</ControlLabel>
                    <FormControl
                        type='date'
                        style={style.commentFormAuthor}
                        value={this.state.lastContact}
                        onChange= {this.handleContactChange} >
                    </FormControl>
                    <ControlLabel>Lifetime value:</ControlLabel>
                    <FormControl
                        type='number'
                        style= {style.commentFormText}
                        value={this.state.customerLifetimValue}
                        onChange={this.handleLifeChange} >
                    </FormControl>
                    <Button
                        type='submit'
                        style={style.commentFormPost}
                        >
                        Add
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}
export default CommentForm;