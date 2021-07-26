import React, { useState } from "react";
import "./styles.css";

const foodmojiDictionary = {
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥞": "Pancakes",
  "🧇": "Waffle"
};

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const emojiInputHandler = (event) => {
    const userInput = event.target.value;
    const emojiMeaning = foodmojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "Can't find the meaning in dictionary. Sorry!";
    }

    setSelectedEmoji(emojiMeaning);
  };

  const emojiSelectedHandler = (foodSeleted) => {
    const clickedEmoji = foodmojiDictionary[foodSeleted];
    setSelectedEmoji(clickedEmoji);
  };

  // const keys = Object.keys(foodmojiDictionary);
  return (
    <div className="App">
      <h1>Foodmoji</h1>
      <input id="user-input" onChange={emojiInputHandler}></input>

      <div id="show-selected-emojiname">{selectedEmoji}</div>

      <div
        id="emoji-table"
        style={{
          display: "grid",
          gridTemplateRows: "50px 50px 50px",
          gridTemplateColumns: "50px 50px 50px",
          justifyContent: "center"
        }}
      >
        {
          Object.keys(foodmojiDictionary).map((food) => {
            return (
              <span
                id="food-item"
                key={food}
                onClick={() => emojiSelectedHandler(food)}
              >
                {food}
              </span>
            );
          })
          // keys.map((item) => {
          //   return item
          // })
        }
      </div>
    </div>
  );
}
