import React from "react";
import Header from "../header/Header"

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="page">{this.props.children}</div>
            </div>
        );
    }
}