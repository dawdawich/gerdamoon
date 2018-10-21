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
            <div>

            </div>
        </div>
        <style jsx>{`
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