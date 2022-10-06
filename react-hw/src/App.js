
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import user from './user.json'
import data from './data.json'
console.log(data);

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
      <Statistics title={user.username}/>
      
    </div>
  );
}

export default App;
