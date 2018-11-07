import React from "react";
import Header from "../header/Header"
import Footer from "../footer/Footer"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page">{this.props.children}</div>
                <Footer />
            </div>
        );
    }
}