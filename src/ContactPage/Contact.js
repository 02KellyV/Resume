import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section id="contactUs" class="page-section secPad">
                <div class="container">

                    <div class="row">
                        <div class="heading text-center">
                            <h2>Let's Keep In Touch!</h2>
                            <p>Thank you for visiting out my profile. If you would like to get into contact with me, please fill out the form below.</p>
                        </div>
                    </div>

                    <div class="row mrgn30">

                        <form method="post" action="" id="contactfrm" role="form">

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Enter name" title="Please enter your name (at least 2 characters)"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" title="Please enter a valid email address"/>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="comments">Comments</label>
                                    <textarea name="comment" class="form-control" id="comments" cols="3" rows="5" placeholder="Enter your message…" title="Please enter your message (at least 10 characters)"/>
                                </div>
                                <button name="submit" type="submit" class="btn btn-lg btn-primary" id="submit">Submit</button>
                                <div class="result"></div>
                            </div>
                        </form>
                        <div class="col-sm-4">
                            <h4>Address:</h4>
                            <address>
                                WebThemez Company<br/>
                                134 Stilla. Tae., 414515<br/>
                                Leorislon, SA 02434-34534 USA
                                <br/>
                            </address>
                            <h4>Phone:</h4>
                            <address>
                                12345-49589-2<br/>
                            </address>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;