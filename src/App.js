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
    let emojiMeaning = foodmojiDictionary[userInput];
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
      <nav className="navigation">
        <p className="nav-header">Foodmoji</p>
      </nav>

      <div className="primary-header">
        <h1>Foodmoji</h1>
        <p>An interpreter that displays the meaning of emojis</p>
      </div>

      <input
        id="user-input"
        placeholder="Enter emoji"
        onChange={emojiInputHandler}
      ></input>

      <div id="show-selected-emojiname">{selectedEmoji}</div>

      <div
        id="emoji-table"
        style={{
          display: "grid",
          // gridTemplateRows: "50px 50px 50px",
          // gridTemplateColumns: "50px 50px 50px",
          // justifyContent: "center"
          gridTemplateColumns: "repeat(3, 1fr)"
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

      <footer className="footer">
        <div className="footer-header">
          <p>The emoji tranlator!</p>
          <p>Use it to know the meanings of the emojis.</p>
          <p>
            <i className="fa fa-copyright"></i> | 2021
          </p>
        </div>
      </footer>
    </div>
  );
}
