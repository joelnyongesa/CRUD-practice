import { useState } from "react";

function PresidentForm(){
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [birthday, setBirthday] = useState('')
    const [number, setNumber] = useState()

    function changeName(e){
        setName(e.target.value)
    }

    function changeImage(e){
        setImage(e.target.value)
    }

    function changeBirthday(e){
        setBirthday(e.target.value)
    }

    function changeNumber(e){
        setNumber(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        let newPresident = {
            name: name,
            birthday: birthday,
            image: image,
            number: number,
        };
        e.target.reset();

        fetch('http://localhost:8081/presidents', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPresident)
        })
        .then(r=>r.json())
        .then(data => console.log(data))
        .catch(e=>console.log(e))
        
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <h3>Add President</h3>
            <input type="text" placeholder="Enter President's Name" onChange={changeName}/>
            <input placeholder="Enter Presidents Image" type="url" onChange={changeImage}/>
            <input placeholder="Enter President's date of birth" type="text" onChange={changeBirthday}/>
            <input placeholder="President Number?" type="number" onChange={changeNumber} />
            <button type="submit">Add President</button>
        </form>
    )
}



export default PresidentForm;