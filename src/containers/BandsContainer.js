import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import RenderBands from '../components/RenderBands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBands}/>
        <RenderBands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    bands: state.bands 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBands: (band) => dispatch({type: 'ADD_BAND', band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
