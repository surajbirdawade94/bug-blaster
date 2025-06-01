import logo from './logo.svg';
import './App.css';
import './styles.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import { useReducer } from 'react';
import TicketList from './components/TicketList';

function App() {
  const intitalState = {
    tickets: [],
    editingTicket: null
  }
  const [state, dispatch] = useReducer(ticketReducer, intitalState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        <h2>Tickets</h2>
        {
          state.tickets.length > 0 && (
            <div className='results'>
              <TicketList tickets={state.tickets} dispatch={dispatch} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
