import Button from "../button/Button"

const Footer = () => (
    <div>
        <div className='footer'>
            <div className='text-footer'>
                Can't find what are you looking for?
            </div>
            <Button className='white'>Contact us</Button>
            <style jsx>
                {`
                    .footer {
                        width: 100%;
                        height: 100px;
                        background-color: black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .text-footer {
                        color: #ffffff;
                        font-family: 'Courier';
                        font-weight: bold;
                    }

                    .footer > * {
                        margin: 0 20px;
                    }
                `}
            </style>
        </div>
        <div className='down-footer'>
            <div className='dropup'>
                <div className="dropbtn">
                    <a href="#nl">
                        <img src="http://i65.tinypic.com/2d0kyno.png"/>Netherlands
                    </a>
                </div>
                <div className='dropup-content'>
                    <a href="#nl">
                        <img src="http://i65.tinypic.com/2d0kyno.png"/>Poland
                    </a>
                    <a href="#nl">
                        <img src="http://i65.tinypic.com/2d0kyno.png"/>Ukraine
                    </a>
                    <a href="#en">
                        <img src="http://i64.tinypic.com/fd60km.png"/>English
                    </a>
                </div>
            </div>
            <div style={{width: 50, height: 50, background: 'blue'}}></div>
            <style jsx>
                {
                    `

                        .down-footer {
                            height: 50px;
                            background-color: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }

                        .down-footer > * {
                            margin: 0 7%;
                        }

                        .dropbtn {
                            height: 40px;
                            font-size: 16px;
                            border: 1px solid;

                        }

                        .dropbtn a {
                            text-decoration: none;
                            width: 100px;
                            padding-top: 10px;
                        }

                        .dropup {
                            position: relative;
                            display: inline-block;
                        }

                        .dropup-content {
                            visibility: hidden;
                            opacity: 0;
                            position: absolute;
                            bottom: 40px;
                            background-color: #f1f1f1;
                            transition: visibility 0s, opacity 0.1s linear;
                            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                            border-radius: 5px;
                            width: 100px;
                            z-index: 1;
                        }

                        .dropup-content a {
                            color: black;
                            padding: 12px 16px;
                            text-decoration: none;
                            display: block;
                        }

                        .dropup-content a:hover {
                            background-color: #ddd
                        }

                        .dropup:hover .dropup-content {
                            visibility: visible;
                            opacity: 1;
                        }

                    `
                }
            </style>
        </div>
    </div>
);

export default Footer
