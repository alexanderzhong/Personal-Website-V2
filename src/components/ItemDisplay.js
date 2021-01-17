import React, { Component } from 'react'
import './display.css'
import * as IoIcons from 'react-icons/io5';

export class ItemDisplay extends Component {
    render() {
        return (
            <div className="display">
                <div id="display-header">
                    <IoIcons.IoCaretBack id="back" onClick={this.props.onBack}/>
                    <h1 id="display-title">{this.props.data.title}</h1>
                </div>
                <p id="display-description">{this.props.data.description}</p>
                <center><iframe id="demo" width="560" height="315" 
                src="https://www.youtube.com/embed/qkdmO3_Z-Rs" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe></center>
            </div>
        )
    }
}

export default ItemDisplay
