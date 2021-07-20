import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddTodo() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("" as any);

    const fetchdata = async () => {
        let response= await axios.get(" http://localhost:40000/posts");
        setData(response.data);
    }
    useEffect(() => {
        fetchdata();
   
    }, [])
    
    const handleInput = (event:any) => {
        event.persist();
        setMessage(event.target.value);
    }
    const handleSubmit =async (event:any) => {
        event.persist();
        let response = await axios.post("http://localhost:40000/posts", { message: message });
        fetchdata();
       
    }

    return (
        <div>
        <div className="message__head">
            {data.map((message:any)=>
            (
                <div className="message" id={message.id}>
                <h1 className="message__title">{message.message}</h1>
                    <h1 className="message__id">{message.id}</h1>
                    </div>
            ))}
                </div>
            <input type="text" onChange={handleInput} name="message" value={message} id="message" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddTodo
