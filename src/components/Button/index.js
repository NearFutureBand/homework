import React, { Component, useState } from "react";

class Button extends Component {

  state = {
    title: "Play",
    some: true,
  }

  onButtonClick = (newTitle) => {
    this.setState({ title: newTitle });
  }

  render() {
    return (
      <button onClick={() => this.onButtonClick( this.state.title === "Play" ? "Pause" : "Play" )}>{this.state.title}</button>
    )
  }
}

//export default Button;

const ButtonFC = () => {
  // 1) Создаем состояние, будем хранить текст кнопки
  const [title, setTitle] = useState("Play");

  // 3) Создаем функцию которая будет вызываться на клик кнопки
  // внутри меняем значение переменной состояния title
  const onButtonClick = () => {
    setTitle(title === "Play" ? "Pause" : "Play");
  }

  // 2) помещаем переменную с текстом кнопки в кнопку: <button>{title}</button>
  // 4) Привязываем написанную функцию на клик кнопки: onClick={onButtonClick}
  return (
    <button onClick={onButtonClick}>{title}</button>
  )
}

export default ButtonFC;