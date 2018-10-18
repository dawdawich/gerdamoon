const contentStyle = {
    display: 'flex',
    height: '400px',
    width: '100%',
    background: '#ffffff'
};

const Content = (props) => (
    <div style={contentStyle}>
        {props.children}
    </div>
);

export default Content;