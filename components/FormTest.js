import React, { useState } from "react";

function FormTest() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault()
  };

  return (
    <div>
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <div className="border rounded-lg p-1">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=""
              placeholder="Enter a task"
            />
        </div>
        <button
          disabled={!input}
          type="submit"
          className="disabled:text-gray-400"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default FormTest;
