import React from "react";

export class GreatingHeader extends React.Component <any, any> {
  render() {
    const {studentName = "friend"} = this.props
    return <h1>Hello, {studentName} we are thrilled to have you!</h1>;
  }
}

