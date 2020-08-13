import React, { Component } from "react";

class AtelierContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        gender: '',
        studentcard: '',
        textarea: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) { 
    this.setState({firstName: event.target.firstName});
    this.setState({lastName: event.target.lastName});
    this.setState({email: event.target.email});
    this.setState({telephone: event.target.telephone});
    this.setState({gender: event.target.gender});
    this.setState({studentcard: event.target.studentcard});
    this.setState({textarea: event.target.textarea});
  }

  handleSubmit(event) {
    alert('Le prénom a été soumis : ' + this.state.firstName);
    event.preventDefault();
  }




}