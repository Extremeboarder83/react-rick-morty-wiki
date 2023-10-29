import React from 'react'

const Card = ({name, image, species, status}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{status}</p>
                <a href="#" className="btn btn-primary">{species}</a>
            </div>
        </div>
    )
}

export default Card