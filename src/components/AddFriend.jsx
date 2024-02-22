import { useState } from "react";

export default function AddFriend({ friends, setFriends, addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      name,
      image: `${image}?=${crypto.randomUUID()}`,
      id: crypto.randomUUID(),
      balance: 0,
    };

    addFriend(newFriend);

    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <label> Image Url</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <button className="button">Add</button>
    </form>
  );
}
