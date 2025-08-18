import React from 'react'

const Header = ({ section }) => {
    return (
        <div className="btms-header">
            <h2 className="btms-title">{section.headline}</h2>
            <p className="btms-subtitle">
                {section.slogan}
            </p>
        </div>
    )
}

export default Header