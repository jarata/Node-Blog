import React from 'react'

const User = props => {
    return (
        <div>
            <p>ID: {props.user.id}</p>
            <p>Name: {props.user.name}</p>
        </div>
    )
};

export default User;