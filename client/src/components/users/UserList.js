import React from 'react'

import User from './User'

const UserList = props => {
    // console.log(props)
    return (
        <div>
            {props.users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    )
};

export default UserList;