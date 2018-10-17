import Header from "../components/header/header"
import React from "react"


export default () => (
    <div>
        <Header/>
        <div style={{ height: '5000px' }}>
            hello
        </div>
        <style global jsx>{`
      body {
        margin: 0;
      }
    `}</style>
    </div>
);