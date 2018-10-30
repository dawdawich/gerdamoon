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
                color: "black";
                background-color: "white";
            }

            .dark {
                color: "white";
                background-color: "black";
            }

        `}</style>
    </button>
);

export default Button;