import React from 'react'
import Modal from 'react-modal'

const PdfModal = ({ isOpen, onClose, citation }) => {
  if (!citation) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Viewer"
      className="bg-white p-6 rounded shadow-lg max-w-3xl mx-auto mt-10"
      overlayClassName="fixed inset-0 bg-black bg-opacity-30"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{citation.source}</h2>
        <button onClick={onClose} className="text-red-500 font-semibold">Close</button>
      </div>

      <div className="mb-4">
        <p className="text-sm italic text-gray-600 mb-2">
          Scroll to <strong>Paragraph {citation.paragraph}</strong> manually in the judgment PDF.
        </p>

        <a
          href={citation.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          📄 Download Judgment PDF
        </a>
      </div>
    </Modal>
  )
}

export default PdfModal
