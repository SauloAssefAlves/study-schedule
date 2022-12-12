import React from "react";
import style from "./botao.module.scss";

class Botao extends React.Component<{
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
