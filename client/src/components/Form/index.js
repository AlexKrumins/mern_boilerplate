import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button className="button" {...props} style={{ float: "right", marginBottom: 10 }} >
      {props.children}
    </button>
  );
}

export function Email(props) {
  return (
    <div className="form-group">
      <label id="email">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" {...props}/>
      <small id="loginHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  );
}

export function Password(props) {
  return (
    <div className="form-group">
      <label id="password">Password</label>      
      <textarea type="password" className="form-control" placeholder="Password"{...props} />
      <small id="loginHelp" className="form-text text-muted">Use a strong password. Or don't. I'm not your mom.</small>
    </div>
  );
}
