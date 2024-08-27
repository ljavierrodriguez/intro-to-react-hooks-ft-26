import React, { Component } from 'react'

function Heading({ text, variant }){
  switch (variant) {
    case 'h1': return <h1>{text}</h1>
    case 'h2': return <h2>{text}</h2>
    case 'h3': return <h3>{text}</h3>
    case 'h4': return <h4>{text}</h4>
    case 'h5': return <h5>{text}</h5>
    case 'h6': return <h6>{text}</h6>
    default: return <span>Error: debe especificar el tipo de Heading</span>
  }
}

class ComponenteA extends Component {

  componentDidMount(){
    console.log("El componente A ha sido renderizado")
  }

  componentDidUpdate(){
    console.log("El componente A ha sido actualizado")
  }

  componentWillUnmount(){
    console.log("El componente A va a ser eliminado")
  }


  render() {
    return (
      <>
      <h1>Componente A</h1>
      <Heading text={"Hola Mundo"} variant={"h1"} />
      <Heading text={"Hola Mundo"} variant={"h2"} />
      <Heading text={"Hola Mundo"} variant={"h3"} />
      <Heading text={"Hola Mundo"} variant={"h4"} />
      <Heading text={"Hola Mundo"} variant={"h5"} />
      <Heading text={"Hola Mundo"} variant={"h6"} />
      </>
    )
  }
}


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount(){
    console.log("El componente App ha sido renderizado")
  }

  componentDidUpdate(){
    console.log("El componente App ha sido actualizado")
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <>
        <h1>React App</h1>
        {
          this.state.open ? (
            <ComponenteA />
          ): null
        }
        <button onClick={this.handleClick}>{ this.state.open ? "Ocultar" : "Mostrar"}</button>
      </>
    )
  }
}

export default App