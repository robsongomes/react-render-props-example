import React from "react";

export default class Toggle extends React.Component {
  state = {
    on: false
  };

  hide = () => this.setState({ on: !this.state.on });

  render() {
    const { render } = this.props;
    return render({
      on: this.state.on,
      hide: this.hide
    });
    // return (
    //   <div>
    //     {this.state.on ? <h1>Hide Me</h1> : <div />}
    //     <button onClick={this.hide}>{this.state.on ? "Hide" : "Show"}</button>
    //   </div>
    // );
  }
}
