const CodeSnippet = ({ code, language = "javascript" }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors z-10">
        Copy
      </button>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 overflow-x-auto shadow-inner">
        <pre className="text-green-400 text-sm font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
