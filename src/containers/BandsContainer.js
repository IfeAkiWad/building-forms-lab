import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBands}/>
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
