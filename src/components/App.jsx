import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';

import user from 'components/Profile/user.json';
import data from 'components/Statistic/data.json';
import friends from 'components/FriendList/friends.json';
import transactions from 'components/Transactions/transactions.json';


export const App = () => {
  return (
    <div
      style={{
     
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};


