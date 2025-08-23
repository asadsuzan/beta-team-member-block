

const Image = ({ member }) => {
    return (
        <div className="img-wrapper">
            <img
                src={member.image}
                alt={member.name}
                className="image"
            />
            <div className="img-overlay" />
        </div>
    )
}

export default Image