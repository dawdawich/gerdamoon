import Button from "../button/Button"

const Footer = () => (
    <div className='footer'>
        <div className='text-footer'>
            Can't find what are you looking for?
        </div>
        <Button>Contact us</Button>
        <style jsx>{`

            .footer {
                width: 100%;
                height: 150px;
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
        `}</style>
    </div>
)

export default Footer
