import '../App.css'

const Navigation = ({navValue}) => {
    return(
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">{!navValue ? "About" : navValue}</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;