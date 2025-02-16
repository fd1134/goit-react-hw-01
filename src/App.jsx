import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { avatar, username, tag, location, stats } from "./data/userData.json";
import friends from "./data/friends.json";
import transactionsData from "./data/transactions.json";

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

      <TransactionHistory transactions={transactionsData} />
    </>
  );
}

export default App;
