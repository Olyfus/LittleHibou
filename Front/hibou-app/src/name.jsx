import axios from "axios";
import { useEffect, useState, React } from 'react';

function Name(props) {

    const [dataName, setDataName] = useState('');
    const [method, setMethod] = useState('');

    const onSubmitName = (event) => {
        event.preventDefault();
        console.log(`https://localhost:8000/list/client?method=${method.nom}&name=${dataName.nom}`)
        axios.get(`https://localhost:8000/list/client?method=${method.nom}&name=${dataName.nom}`)
            .then((res) => {
                if (res.data.token) {
                    console.log(res.data)
                };
            })
            .catch(() => {
                console.log("Mauvais nom.");
            });

    }

    const handleChangeName = (event) => {
        console.log("Event target : "+event.target.value)
        setDataName({
            ...dataName,
            [event.target.name]: event.target.value
        });
        console.log("dataName : "+dataName.nom)
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
                    <div>
                        Quel paramètre ?
                        <br/>
                        <input onChange={(event) => handleChangeName(event)} name="nom" type="text"/>
                    </div>
                        <br/>
                    <div>
                        Valeur
                        <br/>
                        <input onChange={(event) => handleChangeName(event)} name="nom" type="text"/>
                    </div>
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </header>
        </div>
    );
};
export default Name;