import React from 'react'
import './sidebar.css'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom' 

const Sidebar_Item = (props) => {
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}>
                    <span>
                        {props.title}
                    </span>
                </i>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src="" alt="Jersey Premier League"/>
            </div>
            {
                sidebar_items.map((items,index) => (
                    <Link to={items.route} key={index}>
                        <Sidebar_Item  
                            title={items.display_name}
                            icon={items.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))

            }
        </div>
    )
}

export default Sidebar
