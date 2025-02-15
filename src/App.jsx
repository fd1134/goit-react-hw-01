import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import { avatar, username, tag, location, stats } from "./data/userData.json";
import friends from "./data/friends.json";

function App() {
  return (
    <>
      <Profile
        image={avatar}
        name={username}
        tag={tag}
        location={location}
        stats={stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
