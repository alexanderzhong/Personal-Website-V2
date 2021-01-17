import React, { useState, Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

class Navbar extends Component {
    // const [sidebar, setSidebar] = useState(false)

    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
            page: 0
        }
    }

    // showSidebar = () => setSidebar(!sidebar);
    showSidebar = () => {
        console.log('Hello')
        // this.state.sidebar = !this.state.sidebar
        this.setState({
            sidebar: !this.state.sidebar
        })
    }
    
    render () {
        return (
            <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div>
                    <div className="navbar">
                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars onClick={this.showSidebar}/>
                        </Link>
                        <h1 id='page-name'>{this.state.page ? 'Portfolio' : 'Home'}</h1>
                    </div>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex: 5}}>
                    <ul className='nav-menu-items' onClick={this.showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={() => this.setState({page: index})}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
            </>
        );
    }
}

export default Navbar
