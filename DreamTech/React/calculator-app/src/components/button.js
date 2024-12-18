import React from "react";

function Button() {
  return (
    <div className="button-grid">
      <button className="btn toprow-operator" key="ac">
        AC
      </button>
      <button className="btn toprow-operator" key="c">
        C
      </button>
      <button className="btn toprow-operator" key="percent">
        %
      </button>
      <button className="btn siderow-operator" key="divide">
        /
      </button>

      <button className="btn num" key="7">
        7
      </button>
      <button className="btn num" key="8">
        8
      </button>
      <button className="btn num" key="9">
        9
      </button>
      <button className="btn siderow-operator" key="multiply">
        x
      </button>

      <button className="btn num" key="4">
        4
      </button>
      <button className="btn num" key="5">
        5
      </button>
      <button className="btn num" key="6">
        6
      </button>
      <button className="btn siderow-operator" key="minus">
        -
      </button>

      <button className="btn num" key="1">
        1
      </button>
      <button className="btn num" key="2">
        2
      </button>
      <button className="btn num" key="3">
        3
      </button>
      <button className="btn siderow-operator" key="plus">
        +
      </button>

      <button className="btn bigbtn bottomrow num" key="0">
        0
      </button>
      <button className="btn bottomrow num" key="dot">
        .
      </button>
      <button className="btn siderow-operator bottomrow" key="equals">
        =
      </button>
    </div>
  );
}

export default Button;
