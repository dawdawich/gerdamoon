import Link from "next/link";
import styles from "./navigation.scss"

export default () => (
    <div className="nav button" role="navigation">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Link href="/#">
            <a className="nav-item">Blog</a>
        </Link>
        <Link href="/#">
            <a className="nav-item">About</a>
        </Link>
    </div>
)
