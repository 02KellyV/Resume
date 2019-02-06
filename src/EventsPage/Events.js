import React, {Component} from 'react';
import './Events.css';

class Events extends Component {
    render() {
        return(
            <section id="portfolio" className="page-section section appear clearfix secPad">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Portfolio</h2>
                        <p>At lorem Ipsum available, but the majority have suffered alteration in some form by injected
                            humour.</p>
                    </div>

                    <div className="row">
                        <nav id="filter" className="col-md-12 text-center">
                            <ul>
                                <li><a href="#" className="current btn-theme btn-small" data-filter="*">All</a></li>
                                <li><a href="#" className="btn-theme btn-small" data-filter=".webdesign">Web Design</a>
                                </li>
                                <li><a href="#" className="btn-theme btn-small"
                                       data-filter=".photography">Photography</a></li>
                                <li><a href="#" className="btn-theme btn-small" data-filter=".print">Print</a></li>
                            </ul>
                        </nav>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="portfolio-items isotopeWrapper clearfix" id="3">
                                    <article className="col-sm-4 isotopeItem webdesign">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img1.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img1.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem photography">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img2.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img2.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem photography">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img3.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img3.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem print">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img4.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img4.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem photography">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img5.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img5.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem webdesign">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img6.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img6.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem print">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img7.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img7.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem photography">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img8.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img8.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="col-sm-4 isotopeItem print">
                                        <div className="portfolio-item">
                                            <img src="images/portfolio/img9.jpg" alt=""/>
                                            <div className="portfolio-desc align-center">
                                                <div className="folio-info">
                                                    <a href="images/portfolio/img9.jpg" className="fancybox">
                                                        <h5>Project Name</h5>
                                                        <i className="fa fa-arrows-alt fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Events;