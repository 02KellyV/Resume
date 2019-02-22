import React, {Component} from 'react';
import './Quote.css';

class Quote extends Component {
    render() {
        return (
            <section id="quote" className="bg-parlex">
                <div className="parlex-back">
                    <div className="container secPad text-center">
                        <h2>"Construiremos con código nuestro propio universo"</h2><h3>-Pioneras Developers</h3>
                    </div>
                </div>
            </section>
        )
    }
}
export default Quote;