import MarkUp from "./components/MarkUp";
import data from "./user.json";
import stats from "./data.json";
import Statistics from "./components/Statistics";
import friends from "./friends.json";
import FriendList from "./components/Friendlist";
import transaction from "./transactions.json";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <div>
      <MarkUp
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <Transactions items={transaction} />;
    </div>
  );
}
