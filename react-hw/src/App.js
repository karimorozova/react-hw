
import Profile from './Components/Profile';
import Stats from './Components/Stats/Stats';
import user from './user.json'
import data from './data.json'

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
      <Stats title={'Kari'} stats={data} />
      <Stats stats={data} />
      
    </div>
    
  );
}

export default App;
