import Headroom from "react-headroom";
import HeaderLeft from "../navigation/navigation-left"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Headroom style={{background: 'black'}}>
                    <header className="header-main">
                        <div>

                        </div>
                    </header>
                </Headroom>
            </div>
        );
    }
}