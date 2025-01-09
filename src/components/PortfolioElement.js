import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './element.css';
import avodigyPreview from '../assets/img/AvodigyPreview.png'
import scottyPreview from '../assets/img/scottypreview.png'
import ajendaPreview from '../assets/img/AjendaPreview.png'
import netbrainPreview from '../assets/img/NetBrainPreview.png'
import cd39l3Preview from '../assets/img/cd39l3preview.png'

const imgs = {
    0: avodigyPreview,
    1: scottyPreview,
    2: ajendaPreview,
    3: netbrainPreview,
    4: cd39l3Preview,
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
