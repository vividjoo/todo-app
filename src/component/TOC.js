import { Component } from "react";

class TOC extends Component {
  render() {
    let data = this.props.data;
    let i: number = 0;
    let lists = [];

    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i++;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
