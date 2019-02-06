import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="social text-center">
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-flickr"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div>

                    <div className="clear"></div>
                </div>
            </footer>
        )
    }
}

export default Footer;