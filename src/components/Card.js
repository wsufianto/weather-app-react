const Card = ({ icon, name, description, temp, feelslike }) => {
    return (
        <div className="card m-3">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={icon} alt="Weather Icon" />
                </div>
                <div className="col-4 text-left">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
                    </div>
                </div>
                <div className="col-4">    
                    <div className="card-body">
                        <p className="card-text">{temp} feels like {feelslike}</p>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Card