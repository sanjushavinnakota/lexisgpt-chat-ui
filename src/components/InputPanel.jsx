import React, { useState } from 'react'

const InputPanel = ({ onSend }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded px-4 py-2"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  )
}

export default InputPanel
