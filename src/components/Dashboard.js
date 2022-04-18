import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'


const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;

  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  box-shadow: 0 7px #999;

  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
`;

const Header = () => {
    return(
      <div style={{fontWeight: "bold", fontSize: 50, color: "#1b1b1b", padding: 20, marginLeft: 50, fontFamily: "Zapfino"}}>
        <p>Sebs Aio</p>
      </div>
    );
}

class Shipping extends React.Component {
  state = {
    first: '',
    last: '',
    street: '',
    apt: '',
    zip: '',
    city: '',
    state: '',
    telephone: ''
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  success = () => {
    alert("Shipping address updated!");
  };

  incorrect = () => {
    alert("Failed to update address at the moment!");
  };

  handleSubmit = async () => {
    let data = this.state;
    let res = await axios.put(`http://localhost:4000/shipping/${this.props.username}`, data);
    if (res.data === "success") {
      this.success();
      setTimeout(() => {
      }, 2000);
    } else {
      this.incorrect();
    }
  }

  render(){
  return(
    <div style={{width:"40%", backgroundColor:"#f1fdcd", marginLeft: 60, borderRadius: 20}}>
            <div style={{fontWeight: "bold", fontSize: 30, fontFamily: "Zapfino", display:"flex", justifyContent:"center"}}>
                <p style={{marginTop: 30, color:"black"}}>Shipping details</p>
            </div>  
          <div style={{display:"flex", justifyContent:"center", alignItems: "center", marginTop: 20}}>
          <div style={{display:"flex", justifyContent:"center", width: "80%", flexDirection:"column"}}>
          <Input
            type="text"
            name="first"
            id="first"
            placeholder="First Name"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="text"
            name="last"
            id="last"
            placeholder="Last Name"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
            type="name"
            name="street"
            id="street"
            placeholder="Street Address"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
                type="tel"
                name="apt"
                id="apt"
                placeholder="Apt/Unit No."
                maxLength={5}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
          />
             <Input
            type="text"
            name="zip"
            id="zip"
            placeholder="Zip code"
            maxLength={10}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            maxLength={20}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
            type="text"
            name="state"
            id="state"
            placeholder="State"
            maxLength={20}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <Input
            type="text"
            name="telephone"
            id="telephone"
            placeholder="Telephone"
            maxLength={20}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Button onClick={this.handleSubmit}
            style={{marginBottom: 40, marginTop: 15}}
            >Update</Button>
          </div>
          </div>
        </div>
  );
  }
}
class Card extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  
    success = () => {
      alert("Shipping address updated!");
    };
  
    incorrect = () => {
      alert("Failed to update address at the moment!");
    };

    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }
    handleSubmit = async () => {
      let data = this.state;
      let res = await axios.put(`http://localhost:4000/card/${this.props.username}`, data);
      if (res.data === "fill") {
        alert("Fill the form details!")
      } else if (res.data == "puzzle"){
        alert("Solve the recaptcha there!")
      }else{
        alert("Something went wrong, pls try again!")
      }
    }
     
    render() {
      return (
        <div style={{width:"40%", backgroundColor:"#053271", borderRadius: 20}}>
            <div style={{fontWeight: "bold", fontSize: 30, fontFamily: "Zapfino", display:"flex", justifyContent:"center"}}>
                <p style={{marginTop: 30, color: "white"}}>Cards details</p>
            </div>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <div style={{display:"flex", justifyContent:"center", alignItems: "center", marginTop: 30}}>
          <div style={{display:"flex", justifyContent:"center", width: "80%", flexDirection:"column"}}>
          <Input
            type="tel"
            name="number"
            id="number"
            placeholder="Card number"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Input
                type="tel"
                name="expiry"
                id="expiry"
                placeholder="MM/YY"
                pattern="[0-9][0-9]/[0-9][0-9]"
                maxLength={5}
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
          />
             <Input
            type=""
            name="cvc"
            id="cvc"
            placeholder="Cvc"
            maxLength={4}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
            <Button onClick={this.handleSubmit}
            style={{marginBottom: 40}}
            >Update</Button>
          </div>
          </div>
        </div>
      );
    }
  }


class PlaceOrder extends React.Component{
  state = {
    url: '',
    size: '',
    color: '',
  };

  success = () => {
    alert("Successfully placed the order!");
  };

  incorrect = () => {
    alert("Failed to place the order at the moment!");
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async () => {
    let data = {
      username: this.props.username,
      url: this.state.url,
      size: this.state.size,
      color: this.state.color
    }
    let res = await axios.post("http://localhost:4000/place", data);
    if (res.data === "success") {
      this.success();
    } else {
      this.incorrect();
    }
  }

  render(){
    return(
      <div style={{width:"40%", backgroundColor:"#053271", borderRadius: 20, marginLeft: 40, marginTop: 50 }}>
            <div style={{fontWeight: "bold", fontSize: 30, fontFamily: "Zapfino", display:"flex", justifyContent:"center"}}>
                <p style={{marginTop: 30, color: "white"}}>Place Order</p>
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center", marginTop: 30}}>
          <div style={{display:"flex", justifyContent:"center", width: "80%", flexDirection:"column"}}>
          <Input
            type="tel"
            name="url"
            id="url"
            placeholder="Url of product"
            maxLength={100}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="tel"
            name="size"
            id="size"
            placeholder="Size"
            maxLength={10}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Input
            type="tel"
            name="color"
            id="color"
            placeholder="Color"
            maxLength={20}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <Button onClick={this.handleSubmit}
            style={{marginBottom: 40}}
            >Order</Button>
          </div>
          </div>
      </div>
    );
  }
}
const Dashboard = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username')
    return(
        <>
        <Header />
        <PlaceOrder username={username}/>
        <p style={{marginTop: 50, color: "black", fontSize: 30, fontFamily: "Zapfino", marginLeft: 60, fontWeight:"bold"}}>Settings</p>
        <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-around", marginTop: 50}}> 
        <Card username={username}/>
        <Shipping username={username}/>
        </div>
        </>
    );
}

export default Dashboard;