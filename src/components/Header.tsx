import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Header = () => {

    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleClick = (e: any) => {
        navigate(`/search/:${e}`)
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h2>Добро пожаловать!</h2>
                    <NavLink to={'/'}>Popular</NavLink>
                    <NavLink to={'/now-playing'}>Now-Playing</NavLink>
                    <NavLink to={'/top-rated'}>Top-Rated</NavLink>
                    <input type="text" placeholder="Найти фильм, сериал..."
                           onChange={event => setValue(event.target.value)} onKeyDown={(event) => {
                        if (event.key === 'Enter') handleClick(value)
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Header;