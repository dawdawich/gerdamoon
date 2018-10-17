import Headroom from "react-headroom";

const Header = () => (
    <div>
        <Headroom>
            <div className='header'>
                <div className='headerItem'>logo</div>
                <div className='headerItem' id='nav'>
                    <div className='nav-item'>Гобелены</div>
                    <div className='nav-item'>Гобелены премиум класса</div>
                    <div className='nav-item'>Индивидуальный заказ</div>
                    <div className='nav-item'>Оплата и доставка</div>
                    <div className='nav-item'>Контакты</div>
                </div>
                <div className='headerItem'>+38(093)015-06-34</div>
                <style jsx>{`
                    .header {
                        background: #ffe8e8;
                        display: flex;
                        justify-content: space-around;
                        flex-direction: row;
                        align-items: center;
                        border-top-style: solid;
                        width: 100%;
                        height: 40px;
                        left: 0;
                        top: 0;
                        border: 3px solid;
                    }

                    #nav {
                        display: flex;
                        justify-content: space-around;
                    }

                    .nav-item {
                        padding: 10px;
                    }

                    .headerItem {
                        border: 3px solid;
                    }

                `}</style>
            </div>
        </Headroom>
    </div>
);


export default Header;