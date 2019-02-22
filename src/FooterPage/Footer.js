import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="social text-center">
                        <a href="#"><i className="fab fa-twitter"/></a>
                        <a href="#"><i className="fab fa-facebook"/></a>
                        <a href="#"><i className="fab fa-dribbble"/></a>
                        <a href="#"><i className="fab fa-flickr"/></a>
                        <a href="#"><i className="fab fa-github"/></a>
                    </div>

                    <div className="clear"/>
                </div>
            </footer>
        )
    }
}

export default Footer;
