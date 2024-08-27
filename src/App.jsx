import React, { useState, useEffect } from 'react'


const ComponenteA = () => {

    useEffect(() => {
        // componentDidMount()
        console.log("El componente A ha sido renderizado")

        return () => {
            // componentWillUnmount
            console.log("El componete A va a ser eliminado")
        }

    }, [])


    return (
        <h1>Componente A</h1>
    )
}

const ManejoEstado = () => {

    //const [nameVariable, asignarValorVariable] = useState(valorVariable)
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [show, setShow] = useState(false)
    const [users, setUsers] = useState([])
    const [person, setPerson] = useState({ name: 'John', lastname: 'Doe' })
    const [notes, setNotes] = useState(null)

    useEffect(() => {

        updateShow()
        //updatePerson()
    }, [])

    const updateShow = () => {
        setShow((prevState) => {
            return !prevState
        }) // false > true
        setShow((prevState) => {
            return !prevState
        }) // true > false
        setShow((prevState) => {
            return !prevState
        }) // false > true

        setShow(show)
        setShow(!show)
        setShow(show)
        setShow(!show)
    }


    const updatePerson = () => {
        //setPerson({ ...person, name: 'Jane' })
        setPerson((prevState) => {
            return { ...prevState, name: 'Jane'}
        })
    }

    const updateUsers = () => {
        //setUsers([...users, "1"])
        /* setUsers((prevState) => {
            return [...prevState, "1"]
        }) */
       setUsers(users.concat(users.length + 1))
    }

    const handleChange = e => {
        setName(e.target.value)
    }

    return (
        <>
        <p>{show ? "verdadero": "falso"}</p>
        <p>{person.name} {person.lastname}</p>
        <button onClick={updatePerson}>Update Person</button>
        <button onClick={updateUsers}>Update Users</button>
        <ul>
            {
                users.map((item) => {
                    return <li key={item}>{item}</li>
                })
            }
        </ul>

        <input type="text" onChange={handleChange} placeholder='Insert Name'/>
        <input type="number" onChange={(e) => setAge(parseInt(e.target.value))} placeholder='Insert Age'/>
        <button onClick={() => {
            updatePerson()
            updateUsers()
        }}>Click Here</button>
        </>
    )
}


const App = () => {

    const [show, setShow] = useState(false) // [value, function(){}]

    useEffect(() => {
        // componentDidMount()
        console.log("El componente App ha sido renderizado")

        
    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("El componente App ha sido actualizado")
    }, [show])

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
        <h1>React App</h1>
        <ManejoEstado />
        {
            show ? (
                <ComponenteA />
            ): null
        }
        <button onClick={handleClick}>{show ? "Ocultar" : "Mostrar"}</button>
        </>
    )
}

export default App