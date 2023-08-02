import axios from "axios";
import { useEffect, useState, React } from 'react';

function name(props) {

    const [dataName, setDataName] = useState({ name: '' });

    const onSubmitName = (event) => {
        event.preventDefault();
        axios.get(`https://localhost:8000/list/client/${props.name}`)
            .then((res) => {
                if (res.data.token) {
                };
            })
            .catch(() => {
                console.log("Mauvais nom.");
            });

    }

    const handleChangeName = (event) => {
        setDataName({
            ...dataName,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <form autoComplete='off' className='form' onSubmit={(event) => onSubmitName(event)}>
                    <div className='control'>
                        <h1>
                        Nom du client
                        </h1>
                    </div>
                    <input onChange={(event) => handleChangeName(event)} name="nom" type="text"></input>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </header>
        </div>
    );
};
export default name;