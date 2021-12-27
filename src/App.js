import "./App.css";
import { Component } from "react";
import TOC from "./component/TOC";
import Subject from "./component/Subject";
import Content from "./component/Content";
import Control from "./component/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "welcome", desc: "hello react!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText...." },
        { id: 2, title: "CSS", desc: "CSS is Style...." },
        { id: 3, title: "JavaScript", desc: "JavaScript is JS...." },
      ],
    };
  }

  render() {
    let _title,
      _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i += 1;
      }
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "read",
            });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (mode) {
            this.setState({ mode });
          }.bind(this)}
        ></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
