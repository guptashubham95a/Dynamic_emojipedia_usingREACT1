import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiped => {
          return (
            <Entry
              // id={emojipedia.key}
              key={emojiped.key}
              emoji={emojiped.emoji}
              name={emojiped.name}
              description={emojiped.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
