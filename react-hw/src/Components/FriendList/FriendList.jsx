import s from './FriendList.module.css'
import FriendItem from '../FriendItem/FriendItem'

function FriendList({friends}) {
    return <ul className="friend-list">
                {friends.map(({avatar, name, id, isOnline}) => (
                    <FriendItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    id={id}
                    isOnline={isOnline}
                    />
                ))}
    
            </ul>
}
export default FriendList