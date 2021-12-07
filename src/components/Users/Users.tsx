import React from 'react'
import styles from './users.module.css'
import {UsersPropsType} from './UsersContainer';


export let Users = (props:UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/SQcSrqRfkWbkSlY3jqDyxpxN_S0lSzJoPrJix0D8eWNTRVwm8YkFRU1KeWqW8o3bfyA4BIIT.jpg?size=200x202&quality=96&crop=368,42,1594,1613&ava=1',
                fullname: 'Bogdan',
                followed: false,
                status: 'I am BigGun',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://sun9-88.userapi.com/impf/c623922/v623922591/36f68/-wRxDL-zGOY.jpg?size=504x504&quality=96&sign=6695b7a3a5d4c04392f5b20b96f0c87f&type=album',
                fullname: 'Lena',
                followed: true,
                status: 'I love you!',
                location: {city: 'Vilnus', country: 'Litva'}
            },
            {
                id: 3,
                photoUrl: 'https://sun9-62.userapi.com/impg/7CpiAxIkyUAi5656gUJS44WRsRbiEBc3IgPz1A/T200uYziLTA.jpg?size=810x1080&quality=96&sign=b603db45025c952578db79889009cef5&type=album',
                fullname: 'Sergay',
                followed: false,
                status: 'I love to lick!',
                location: {city: 'Minsk', country: 'Belarus'}
            },])

    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>

                       {u.followed
                           ? <button onClick={() => {
                               props.unfollow(u.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
                               props.follow(u.id)
                           }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}