import React, { useRef, useState } from "react";
import List from "./comp/LearnSection/List";
import Navbar from "./comp/Navbar/Navbar";
import Field from "./comp/RegexField/Field";

const MIN_LIST_WIDTH = 200;
const MIN_FIELD_WIDTH = 300;

function App() {
  const listRef = useRef(null);
  const [listWidth, setListWidth] = useState(null);

  function onMDown(e) {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = listRef.current.getBoundingClientRect().width;

    function onMove(e) {
      const maxWidth = window.innerWidth - MIN_FIELD_WIDTH;
      const width = startWidth + e.clientX - startX;
      setListWidth(Math.min(Math.max(width, MIN_LIST_WIDTH), maxWidth));
    }

    function onUp() {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      document.body.style.userSelect = "";
    }

    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }

  return (
    <div className="bg-dark-gray w-screen h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-row overflow-hidden">
        <div
          ref={listRef}
          style={listWidth !== null ? { width: listWidth } : undefined}
          className="bg-light-gray h-full w-1/3 shrink-0 py-2 px-4 pb-4 overflow-scroll"
        >
          <List></List>
        </div>
        <div className="h-full flex items-center">
          <div
            onMouseDown={onMDown}
            className="bg-gray border-r-2 border-t-2 border-b-2 border-custom-blue w-6 h-16 rounded-r-md cursor-ew-resize hover:bg-custom-blue"
          />
        </div>
        <Field />
      </div>
    </div>
  );
}

export default App;
