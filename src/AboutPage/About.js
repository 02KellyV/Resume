import React, {Component} from 'react';
import './About.css';


class About extends Component {
    render() {
        return (
            <section id="aboutUs" className="secPad">
                <div className="container">
                    <div className="heading text-center">
                        <h2>I am Sam, a UI Designer & developer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-desktop"></i>
                                <h3>Responsive <span className="id-color">Design</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-css3"></i>
                                <h3>HTML5/CSS3 <span className="id-color">Dev</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-lightbulb-o"></i>
                                <h3>JavaScript <span className="id-color">jQuery</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
