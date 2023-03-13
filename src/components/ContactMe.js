import React, {useState} from 'react'

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={event => setMessage(event.target.value)} />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactMe