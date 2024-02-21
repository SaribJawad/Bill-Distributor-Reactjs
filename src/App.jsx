import { useState } from "react";
import AddFriend from "./components/AddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleOnClick() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
  }

  function handleSplitBill(value) {
    console.log(value);

    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          handleSelectedFriend={handleSelectedFriend}
          friends={friends}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <AddFriend
            addFriend={handleAddFriend}
            friends={friends}
            setFriends={setFriend}
          />
        )}
        <button onClick={handleOnClick} className="button">
          {showAddFriend ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
