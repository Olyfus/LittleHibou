import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function endpoint(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Front App Little Hibou
          </p>
          <a
            className="App-link"
            href="http://localhost:3000/sale"
          >
            Vente Client
          </a>
          <a
            className="App-link"
            href="http://localhost:3000/name"
          >
            Nom Client
          </a>
        </header>
      </div>
    );
};
export default endpoint;