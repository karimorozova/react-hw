
import Profile from './Components/Profile';
import user from './user.json'

function App() {
  return (
   
    <div className="App">
       
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

export default App;
