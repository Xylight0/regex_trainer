import React from "react";
let informations = require("./information.json");

export default function List() {
  function addSection() {
    return informations.information.section.map((e, i) => (
      <div key={i}>
        <p className="py-4 rounded-md text-black font-bold text-2xl flex w-max grow">
          {e.title}
        </p>
        <div className="flex flex-col gap-4">{addPoints(i)}</div>
      </div>
    ));
  }

  function addPoints(index) {
    let pts = [];
    for (var key in informations.information.section[index].points) {
      pts.push(key);
    }
    return pts.map((e, i) => (
      <div
        key={i}
        className="bg-gray p-4 rounded-md text-white font-semibold text-lg flex w-max gap-8"
      >
        <p>{e}</p>
        <p>{informations.information.section[index].points[e]}</p>
      </div>
    ));
  }

  return (
    <>
      <div className="pt-2">
        <p className="text-lg font-semibold">
          JavaScript RegEx Reference by{" "}
          <a
            className="text-custom-blue font-bold"
            href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
          >
            W3S
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-8">{addSection()}</div>
    </>
  );
}
