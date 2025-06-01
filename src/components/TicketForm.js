import React, { useState, useEffect } from 'react';


export default function TicketForm({ dispatch, editingTicket }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    useEffect(() => {
        if (editingTicket) {
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        } else {
            clearForm();
        }
    }, [editingTicket])

    const priorityLabels = {
        '1': 'Low',
        '2': 'Medium',
        '3': 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        const newTicket = {
            id: editingTicket ? editingTicket.id : new Date().toISOString(),
            title,
            description,
            priority: parseInt(priority)
        }

        dispatch({
            type: editingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET',
            payload: newTicket
        });
    }

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input type='text' value={title} className='form-input' onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea type='text' value={description} className='form-input' onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <fieldset className='priortiy-fieldset'>
                <legend>Priority</legend>

                {Object.entries(priorityLabels).map(([value, label]) => (
                    <label key={value} className='priority-label'>
                        <input
                            type='radio'
                            value={value}
                            checked={priority === value}
                            className='proirity-input'
                            onChange={e => setPriority(e.target.value)}
                        ></input>
                        {label}
                    </label>
                ))}
            </fieldset>
            <button type='submit' className='button'>Submit</button>
        </form>
    )
}