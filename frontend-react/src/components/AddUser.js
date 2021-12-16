import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";

export default class CreateUser extends Component{
  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      username: ''
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const user ={
      username: this.state.username
    }

    console.log(user);
    alert("User added")

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render(){
    return (
      <div>
        <Navbar/>
        <div className="Container">
        <h3>Loo uus kasutaja</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Kasutaja nimi: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Loo kasutaja" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </div>
    )
  }
}