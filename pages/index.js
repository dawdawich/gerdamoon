import Button from "../components/button/Button"
import Layout from "../components/layout/layout";

export default () => (
    <div>
        <Layout>
            <div className='content' style={{background: '#ffffff'}}>
                <div style={{width: '42%'}}>
                    <div style={{marginLeft: '50%'}}>
                        <div className='content-header-header'>
                            THE GERDAMOON STORY
                        </div>
                        <Button className='dark'>
                            Read more
                        </Button>
                    </div>
                </div>
                <div style={{width: '58%', overflow: 'hidden'}}>
                    <img src='../static/nitki.jpg' className='content-header-image'/>
                </div>
            </div>
            <div className='content' style={{background: '#eaeaea'}}>
                <div className='menu-table'>
                    <div className='product-variant'>
                        test
                    </div>
                    <div className='product-variant'>
                        test
                    </div>
                    <div className='product-variant'>
                        test
                    </div>
                </div>
            </div>
            <div className='content' style={{background: '#C4C4C4', flexDirection: 'column'}}>
                <div className='content-text-column-header'>
                    Оплата
                </div>
                <div style={{width: '50%', margin: 'auto'}}>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velitminim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit
                </div>
            </div>
            <div className='content' style={{background: '#dddddd', flexDirection: 'column'}}>
                <div className='content-text-column-header'>
                    Доставка
                </div>
                <div style={{width: '50%', margin: 'auto'}}>
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velitminim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit
                </div>
            </div>
        </Layout>
        <style jsx>{`

            .product-variant {
                width: 220px;
                height: 220px;
                border: solid;
            }

            .menu-table {
                border: solid;
                width: 70%;
                height: 300px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                align-items: center;
            }

            .content {
                display: flex;
                height: 400px;
                width: 100%;
            }

            .content-header-image {
                display: block;
                position: relative;
                left: -50%;
                top: -50%;
            }

            .content-header-header {
                font-size: 40px;
                font-family: 'Courier';
                font-weight: bold;
                margin-top: 10%;
                width: 220px;
            }

            .content-text-column-header {
                width: auto;
                height: auto;
                margin-top: 80px;
                text-align: center;
                font-size: 20px;
                font-family: 'Courier';
                font-weight: bold;
            }

            .noselect {
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                 user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
            }
        `}</style>
        <style global jsx>{`
      body {
        margin: 0;
        background: #000000;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </div>
);