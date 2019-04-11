//https://www.robinwieruch.de/react-fetching-data/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import './MyAccount.css'

class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: undefined,
      IsReadOnly: true,
      imageIsReadOnly: true,
      userName: '',
      userEmail: '',
      successCheck: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleClassHistory = this.handleClassHistory.bind(this);
  }

  componentDidMount() {

    if(this.props.auth.isAuthenticated) {
      console.log("correct!");
      this.setState({userId: this.props.auth.user.id}, function() {
        const url = '/api/my-account/' + this.state.userId;
        console.log(url);
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({userName: data[0].name, userEmail: data[0].email}))
      });
    }
    else {
      this.props.history.push("/login");
    }

      //console.log(this.state.userName);
  }




  handleNameChange(event) {
    this.setState({userName:event.target.value});
  }

  handleEmailChange(event) {
    this.setState({userEmail:event.target.value});
  }

  handleSubmit(event) {
    this.setState({successCheck: {"result": "success"}});
    alert('A new profile is submitted! ');
    event.preventDefault();

    const newUserData = new FormData(event.target);
		const newUserObj = {};

		for (let userInput of newUserData.entries()) {
			newUserObj[userInput[0]] = userInput[1];
		}

		console.log(newUserObj);

		const { userId } = this.props.match.params;
		const url = '/api/my-account/' + userId;
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(newUserObj),
			headers: {
			'Content-Type': 'application/json'
		}
		}).then(response => response.json())
			.then(data => this.setState({successCheck: data}));
  }

  handleEditClick(event) {
    this.setState({IsReadOnly:false});
  }

  handleClassHistory(event) {

      this.props.history.push("/class-history");


  }

  render() { console.log(this.state.userEmail);
    return (
      <div className='myaccount-page'>
        <h3>My Account Page</h3><br />

        <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type = "text" name = "name" value = {this.state.userName} readOnly={this.state.IsReadOnly}
        onChange = {this.handleNameChange} required/><br />
        <label>Email</label>
        <input type = "text" name = "email" value = {this.state.userEmail} readOnly={this.state.IsReadOnly}
        onChange = {this.handleEmailChange} required/>
        <input type = "button" name = "editemail" value = "Edit" onClick={this.handleEditClick}/><br />
        <input type = "submit" value = "Submit"/>
        </form>

        <input type = "button" name = "viewclasshistory" value = "View Class History" onClick={this.handleClassHistory}
        history = {this.props.history}/>


      </div>
    );
  }


}
MyAccount.propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(MyAccount);
