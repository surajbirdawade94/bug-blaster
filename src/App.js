import logo from './logo.svg';
import './App.css';
import './styles.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import { useReducer } from 'react';

function App() {

  const intitalState = {
    tickets: []
  }
  const [state, dispatch] = useReducer(ticketReducer, intitalState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}/>
    
        </div>
    </div>
  );
}

export default App;
