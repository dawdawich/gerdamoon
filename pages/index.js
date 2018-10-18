import Header from "../components/header/header"
import Content from "../components/content/content"


export default () => (
    <div>
        <Header/>
        <Content contentColor={{background: '#f1f1f1'}}>
            <div style={{ width: '42%' }}>
                <div style={{ fontSize: '20px',
                    fontFamily: 'Arial', fontWeight: 'bold', width: '40px',
                    marginTop: '10%', float: 'right', marginRight: '50%' }}>
                    THE GERDAMOON STORY
                </div>
            </div>
            <div style={{ width: '58%', overflow: 'hidden' }} >
                <img src='../static/nitki.jpg' style={{ display: 'block', position: 'relative',
                left: '-50%', top: '-50%' }} />
            </div>
        </Content>
        <Content>
            <div>
                hello
            </div>
        </Content>
        <style global jsx>{`
      body {
        margin: 0;
        background: #000000;
      }
    `}</style>
    </div>
);