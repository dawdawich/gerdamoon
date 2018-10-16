import React from "react";
import Header from "../header/header"

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="page">{this.props.children}</div>
            </div>
        );
    }
}