function AnswerPanel({ response }) {
    const citation = response.citations[0];
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg mt-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">AI-Generated Answer</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{response.answer}</p>
        </div>
  
        <div className="border-t pt-4 mt-4">
          <h3 className="text-md font-semibold text-gray-800 mb-1">Citation</h3>
          <p className="text-gray-600 italic">“{citation.text}”</p>
          <a
            href={citation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 font-medium underline hover:text-blue-800 transition"
          >
            View Full Judgment ({citation.source})
          </a>
        </div>
      </div>
    );
  }
  
  export default AnswerPanel;
  