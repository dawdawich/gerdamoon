const Button = (props) => (
    <button type="button" className={props.className}>
        {props.children}

        <style jsx>{`
            button {
                width: 110px;
                height: 40px;
                border-radius: 5px;
                font-size: 14px;
                font-weight: bold;
                border: 0;
                font-family: 'Courier';
            }

            .white {
                color: #000;
                background-color: #fff;
            }

            .dark {
                color: #fff;
                background-color: #000;
            }

        `}</style>
    </button>
);

export default Button;