import { Profile } from 'components/Profile/Profile';

import user from 'components/Profile/user.json';

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
    </div>
  );
};


