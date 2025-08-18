import React from 'react'

const Text = ({ member }) => {
    return (
        <div>
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
        </div>
    )
}

export default Text