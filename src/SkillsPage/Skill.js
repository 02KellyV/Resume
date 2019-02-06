import React, {Component} from 'react';
import './Skills.css';

class Skill extends Component {
    render() {
        return (
            <section id="skills" className="secPad white">
                <div className="container">
                    <div className="heading text-center">
                        <h2>My Skills</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Programming <strong>Skills</strong></h2>
                            <p className="mrgBtm20">
                                It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping
                                make great ideas happen for the past 7 years and am always ready for new challenges.

                            </p>
                            <div className="row">
                                <div className="col-md-2 skilltitle">HTML5</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '90%'}}>
                                            <span className="sr-only">90% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 skilltitle">CSS/CC3</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '90%'}}>
                                            <span className="sr-only">90% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 skilltitle">JavaScript</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '80%'}}>
                                            <span className="sr-only">80% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 skilltitle">jQuery/Ajax</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '90%'}}>
                                            <span className="sr-only">90% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2>Designing <strong>Skills</strong></h2>
                            <p className="mrgBtm20">
                                Problem solving is not always about sitting in a board room talking about the way things should be done.
                                I have a strong background in UI design which allows me to think on my feet and act upon it.

                            </p>
                            <div className="row">
                                <div className="col-md-2 skilltitle">Photoshop</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '90%'}}>
                                            <span className="sr-only">90% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 skilltitle">Illustrator</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '80%'}}>
                                            <span className="sr-only">80% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 skilltitle">Indesign</div>
                                <div className="col-md-8">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                             aria-valuemax="100" style={{width: '75%'}}>
                                            <span className="sr-only">75% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Skill;
