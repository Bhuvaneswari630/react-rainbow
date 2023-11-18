import { useState } from 'react';

function ColorForm({ addColor }) {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user color ', input);
        addColor(input)
        setInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={input}
                placeholder={`hey, I'm typing here!`}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' >Submit</button>
        </form>
    )
}

export default ColorForm