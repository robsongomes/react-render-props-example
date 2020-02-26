import React from "react";

export default class ToggleRenderChild extends React.Component {
  state = {
    on: false
  };

  hide = () => this.setState({ on: !this.state.on });

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      hide: this.hide
    });
  }
}
