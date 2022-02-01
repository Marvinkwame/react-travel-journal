import React from "react"




export default function Places(props) {
    return (
        <div className="travel-card">
            <div className="img-section">
                <img src={`../images/${props.item.imageUrl}`} className="place-img" />
            </div>

            <div className="info">
                <div className="location-title">
                    <img src="../images/location.png" />
                    <p className="country">{props.item.location}</p>
                    <p><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <div className="info-content">
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}
