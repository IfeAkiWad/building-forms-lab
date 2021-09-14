import React from 'react'

const RenderBands = (props) => {
    const displayBands = props.bands.map( (band, index) => <li key={index}>{band.name}</li>)


    return (
        <div>
           {displayBands} 
        </div>
    )
}

export default RenderBands