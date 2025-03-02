import "./Header.scss";
import { Link } from "react-router-dom";


export default function Header() {

    return (
        <header className="header">
            <Link to="/"><h1 className="header__title">Snaps</h1></Link>
            <Link className="header__home" to="/">← Home</Link>
        </header>
    );
}