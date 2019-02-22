import React, {Component} from 'react';
import './About.css';


class About extends Component {
    render() {
        return (
            <section id="aboutUs" className="secPad">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Puts "Hola..."</h2>
                        <h3>I am: Kelly Villa 🙋‍♀ </h3>
                        <h3>Everything started as a support engineer in the IT industry...</h3>
                        <p>⚛️ Web Developer 🅰️ </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-desktop"></i>
                                <h3>React <span className="id-color"> JS</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-css3"></i>
                                <h3>Angular<span className="id-color"> Dev</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-lightbulb-o"></i>
                                <h3> Node <span className="id-color"> JS</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>
                    </div>
                    <div className="heading text-center">
                        <h2>¯</h2>
                        <p>IoT Developer 🦇</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-desktop"></i>
                                <h3>LoRa <span className="id-color"> WAN</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-css3"></i>
                                <h3>IEEE<span className="id-color"> 802.15.9</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>

                        <div className="col-md-4 text-center tileBox">
                            <div className="txtHead"><i className="fa fa-lightbulb-o"></i>
                                <h3> Zig<span className="id-color">Bee</span></h3></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt
                                volutpat. Cras eget augue id dui varius pretium.</p>
                        </div>
                        <div className="heading text-center">
                            <h2> _ </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
