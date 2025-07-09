import React, { useState } from 'react'
import PdfModal from './PdfModal'
import InputPanel from './InputPanel'

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! Ask me any legal question related to motor vehicle claims.',
    }
  ])

  const [selectedCitation, setSelectedCitation] = useState(null)
  const [showPdf, setShowPdf] = useState(false)

  const handleCitationClick = (citation) => {
    setSelectedCitation(citation)
    setShowPdf(true)
  }

  const handleSend = (question) => {
    setMessages(prev => [...prev, { sender: 'user', text: question }])
  
    const trimmedQuestion = question.trim().toLowerCase()
  
    // Only show simulated answer if it matches this
    if (
      trimmedQuestion.includes('section 166') ||
      trimmedQuestion.includes('motor vehicle') ||
      trimmedQuestion.includes('dani devi') ||
      trimmedQuestion.includes('compensation')
    ) {
      const response = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988...",
        citations: [
          {
            text: "as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
            paragraph: 7
          }
        ]
      }
  
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: response.answer,
          citation: response.citations[0]
        }
      ])
    } else {
      // Generic fallback for unmatched questions
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: "Sorry, I couldn't find any case law or legal citation for that question."
        }
      ])
    }
  }
  
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      <div className="bg-white p-4 rounded shadow max-h-[60vh] overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-sm ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <p className="text-sm">{msg.text}</p>

              {msg.citation?.text && (
                <p className="mt-2 italic text-sm text-gray-700">
                  “{msg.citation.text}” (Para {msg.citation.paragraph})
                </p>
              )}

              {msg.citation && (
                <button
                  className="mt-2 text-blue-600 underline text-sm"
                  onClick={() => handleCitationClick(msg.citation)}
                >
                  View Citation
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <InputPanel onSend={handleSend} />

      <PdfModal
        isOpen={showPdf}
        onClose={() => setShowPdf(false)}
        citation={selectedCitation}
      />
    </div>
  )
}

export default Chat
