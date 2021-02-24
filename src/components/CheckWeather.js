// Checkweather component to provide form input & button for user
import { useState } from 'react'

const CheckWeather = ({toFind}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        toFind({text});
        setText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group m-3">
                <h1> What's the weather </h1>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">In</div>
                    </div>
                    <input className="form-control" type="text" placeholder="Enter a location" value={text} onChange={(e) => setText(e.target.value)} required/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Go!</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default CheckWeather