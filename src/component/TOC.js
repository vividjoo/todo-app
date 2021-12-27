import { Component } from "react";

class TOC extends Component {
  render() {
    let data = this.props.data;
    let i = 0;
    let lists = [];

    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-idd={data[i].id}
            onClick={function (e) {
              // debugger;
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.idd);
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
