import React, {Component} from 'react';
import banner from'../images/banner-bg.png';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <section id="home">
                <div className="banner-container">
                    <img src={banner} alt="banner"/>
                </div>
            </section>
        )
    }
}

export default Banner;