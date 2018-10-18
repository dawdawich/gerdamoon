import Header from "../components/header/header"
import Content from "../components/content/content"


export default () => (
    <div>
        <Header/>
        <Content>
            <div style={{ width: '40%', background: '#b5b5b5' }}>
            </div>
            <div style={{ width: '60%' }} >
                <img src=''/>
                <p style={{ textAlign: 'center' }}>IMAGE</p>
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
      }
    `}</style>
    </div>
);