import s from './FriendItem.module.css'

function FriendItem({avatar, isOnline, name}) {
    return <li className="item" >
                <span className={s[isOnline]}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
           </li>
  
}
export default FriendItem