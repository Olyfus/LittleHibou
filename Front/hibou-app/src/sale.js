import axios from "axios";
import { useEffect, useState, React } from 'react';

function sale(props) {

    const [dataId, setDataId] = useState({ id: '' });

    const onSubmitId = (event) => {
        event.preventDefault();
        axios.get(`https://localhost:8000/client/${props.id}/sales`)
            .then((res) => {
                if (res.data.token) {
                };
            })
            .catch(() => {
                console.log("Mauvais id.");
            });

    }

    const handleChangeId = (event) => {
        setDataId({
            ...dataId,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <form autoComplete='off' className='form' onSubmit={(event) => onSubmitId(event)}>
                    <div className='control'>
                        <h1>
                            Id client pour Vente
                        </h1>
                    </div>
                    <input onChange={(event) => handleChangeId(event)} name="id" type="number"></input>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </header>
        </div>
    );
};
export default sale;