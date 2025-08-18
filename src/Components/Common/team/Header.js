import React from 'react'

const Header = ({ section }) => {
    return (
        <div className="header">
            <h2 className="title">{section.headline}</h2>
            <p className="subtitle">
                {section.slogan}
            </p>
        </div>
    )
}

export default Header