import React, { useEffect, useRef, useState } from "react";
import { useRegexSyntax } from "../../../context/Regex_context";

export default function TextInput(props) {
  const textareaVal = useRef();
  const { setTextInput } = useRegexSyntax();
  const [input, setInput] = useState("");

  useEffect(() => {
    let text = "Visit W3Schools";
    textareaVal.current.value = text;
  }, []);

  useEffect(() => {
    setTextInput(textareaVal.current.value);
  }, [input, setTextInput]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="rounded-md bg-custom-blue w-fit px-3 py-2">
        <p className="text-dark-gray font-bold font-poppins text-xl">Input</p>
      </div>
      <div className="w-full h-full bg-light-gray rounded-md flex p-4">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          ref={textareaVal}
          type="text"
          className="resize-none h-full w-full border-none text-dark-gray font-bold text-lg"
        />
      </div>
    </div>
  );
}
