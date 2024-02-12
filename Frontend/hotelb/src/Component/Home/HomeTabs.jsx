import React from "react";
import { RoomsCard } from "./RoomsCard";

export const HomeTabs = () => {
  return (
    <div>
      <h1>Tabs</h1>
      <div className="tab1">
        <button>All location </button>
        <h1>Tab1</h1>
        <p></p>
      </div>
      <div className="tab2">
        <button>Tab 2</button>

        <h1>Tab2</h1>
      </div>
      <div className="tab3">
        <button>Tab 3</button>

        <h1>Tab3</h1>
      </div>
    </div>
  );
};
