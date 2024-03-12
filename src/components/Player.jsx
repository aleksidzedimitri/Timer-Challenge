import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  const handleSetName = () => {
    if (playerName.current) {
      setEnteredPlayerName(playerName.current.value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSetName();
    }
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" onKeyDown={handleKeyDown} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
