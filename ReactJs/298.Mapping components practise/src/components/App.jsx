import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Create(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      key={emojipedia.id}
      Emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Create)}</dl>
    </div>
  );
}

export default App;
