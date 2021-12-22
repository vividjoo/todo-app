import { Component } from "react";

class Content extends Component {
  render() {
    let data = this.props.title;

    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
