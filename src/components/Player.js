import { useState } from "react";

export function Player({ intialName, symbol, isActive, onNameChange }) {
  const [playername, setplayerName] = useState(intialName);
  const [isEditing, setidEditing] = useState(false);

  function handleEditClick() {
    setidEditing((editing) => !editing);

    if (isEditing) {
      onNameChange(symbol, playername);
    }
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playername}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playername} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
