const dartTheme = {
    color: '#fff',
    backgroundColor: '#000'
}

const Button = (props) => (
    <button type="button" style={dartTheme}>
        {props.children}

        <style jsx>{`
            button {
                width: 110px;
                height: 40px;
                margin-top: 20;
                background-color: #ffffff;
                color: ${props.primary ? '#000' : '#fff'};
                border-radius: 5px;
                font-size: 14px;
                font-weight: bold;
                border: 0;
                font-family: 'Courier';
            }
        `}</style>
    </button>
);

export default Button;