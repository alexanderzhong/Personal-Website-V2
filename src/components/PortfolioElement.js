import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './element.css';

const imgs = {
    0: require('../assets/img/AvodigyPreview.png').default,
    1: require('../assets/img/scottypreview.png').default,
    2: require('../assets/img/AjendaPreview.png').default,
    3: require('../assets/img/NetBrainPreview.png').default,
    4: require('../assets/img/cd39l3preview.png').default,
}

export class PortfolioElement extends Component {
    getStyle = () => {
        // if(this.props.info.completed) {
        //     return {

        //     }
        // } else {
            return {

            }
        // }
    }

    getDate(num) {
        var result = ""
        var month = num%100
        var year = Math.floor(num/100)
        if (month < 10) {
            result += "0"
        }
        result = result + month.toString() + "/" + year.toString()
        return result;
    }

    render() {
        console.log(this.props.info.preview)
        // const baseURL = './../assets/img/'
        return (
            <div className='element-container' style={this.getStyle()} onClick={this.props.onClick}>
                {/* <img src={require(baseURL + this.props.info.preview)} /> */}
                <img id='preview' src={imgs[this.props.info.id]} />
                <h1 id='ele-title'>{this.props.info.title}</h1>
                <p id='brief'>{this.props.info.brief}</p>
                <hr id='divider'/>
                <div id='bottom-info'>
                    <p id='type'>{this.props.info.type}</p>
                    <p id='date'>{this.getDate(this.props.info.date)}</p>
                </div>
            </div>
        )
    }
}

// PropTypes
PortfolioElement.propTypes = {
    info: PropTypes.object.isRequired
}

export default PortfolioElement
