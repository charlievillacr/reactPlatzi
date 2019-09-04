import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return (
           <div>
               <Navbar />
               <div className="BadgeNew__hero">
                   <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName="Luke" lastName="Skywalker" twitter="@skywalker" 
                                jobTitle="Hero"
                                avatarUrl="https://avatarfiles.alphacoders.com/118/118895.jpg"
                            />
                        </div>
                    </div>
                </div>
           </div>
        ); 
    }
}

export default BadgeNew;