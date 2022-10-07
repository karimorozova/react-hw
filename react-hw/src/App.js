
// import Profile from './Components/Profile';
// import Stats from './Components/Stats/Stats';
// import user from './user.json'
// import data from './data.json'
// import friends from './friends.json'
// import FriendList from './Components/FriendList/FriendList';
// import TransactionHistory from './Components/TransactionHistory'
// import transactions from './transactions.json'

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleFeedback = (e) => {
    
    const {name} = e.currentTarget
    
    this.setState(prevState => ({
      // prevState[name] +=1
      [name]: prevState[name] + 1
    }))
  }
  render() {
    const {good, neutral, bad} = this.state
    const total = good + neutral + bad

    return (
   
    <div className="App">
      <Section title={'Kari'}/>
      <FeedbackOptions options={['good', 'bad', 'neutral']} onLeaveFeedback={this.handleFeedback}/>
      {total !== 0 && <Statistics good={good} neutral={neutral} bad={bad}/>}
      {total === 0 && 'No feedbacks'}
      
    </div>
    );
  }
}

export default App;

// {/* <FriendList friends={friends}/> */}
//       {/* <TransactionHistory transactions={transactions}/> */}
       
//       {/* <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//       <Stats title={'Kari'} stats={data} />
//       <Stats stats={data} /> */}
