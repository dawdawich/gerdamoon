import Header from "../components/header/header"

export default () => (
    <div>
        <Header/>
        <div className='content' style={{background: '#ffffff'}}>
            <div style={{width: '42%'}}>
                <div style={{marginLeft: '20%'}}>
                    <div style={{
                        fontSize: 40,
                        fontFamily: 'Courier', fontWeight: 'bold',
                        marginTop: '10%',
                        width: 220
                    }}>
                        THE GERDAMOON STORY
                    </div>
                    <div className='noselect' style={{
                        width: 110, height: 40, marginTop: 20, background: '#000000', borderRadius: 5,
                        color: 'white', fontSize: 14, display: 'flex', alignItems: 'center',
                        justifyContent: 'space-around', cursor: 'pointer'
                    }}>
                        Read more
                    </div>
                </div>
            </div>
            <div style={{width: '58%', overflow: 'hidden'}}>
                <img src='../static/nitki.jpg' style={{
                    display: 'block', position: 'relative',
                    left: '-50%', top: '-50%'
                }}/>
            </div>
        </div>
        <div className='content' style={{background: '#eaeaea'}}>
            <div style={{
                border: 'solid', width: '70%', height: 300,
                left: 0, right: 0, top: 0, bottom: 0, margin: 'auto',
                display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'
            }}>
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
            <div style={{
                width: 'auto', height: 'auto', marginTop: 80,
                textAlign: 'center', fontSize: 20, fontFamily: 'Courier', fontWeight: 'bold'
            }}>
                Оплата
            </div>
            <div style={{width: '50%', margin: 'auto'}}>
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </div>
        </div>
        <style jsx>{`

            .product-variant {
                width: 220px;
                height: 220px;
                border: solid;
            }

            .content {
                display: flex;
                height: 400px;
                width: 100%;
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
    `}</style>
    </div>
);