import React, {Component} from 'react';
import banner from'../images/banner-bg.png';
import avatar from'../images/FotoAVATAR-01.png';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <section id="home">
                <div className="banner-container">
                    <img src={avatar} className="avatar" alt="avatar"/>
                </div>
            </section>
        )
    }
}

export default Banner;
