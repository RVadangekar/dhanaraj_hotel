import { Link } from 'react-router-dom';
import './Home.css';
import {useContext} from "react";
import { Context } from '../Context';

function Home(){

    const {user, setUser} = useContext(Context);

    return(
        <div>
            <header className="header">
                <nav className="nav">
                    <Link to='/' className="nav_logo">Dhanaraj Hotel</Link>

                    <ul className="nav_items">
                        <li className="nav_item">
                            {/* <Link to='/' className="nav_link">Home</Link> */}
                            {user ? 
                            <>
                                <Link to='/products' className="nav_link">Product</Link>
                                {/* <Link to='/' className="nav_link">Services</Link>
                                <Link to='/' className="nav_link">Contact</Link> */}
                            </> : <></>
                            }
                        </li>
                    </ul>
                    {
                        <div>
                            {user ? <></> : <Link className="button" id="form-open" to='/login'>Login</Link>}
                            {user ? <></> : <Link className="button admin-btn" id="form-open" to='/adminLogin'>Admin Login</Link>}
                        </div>
                    }
                </nav>
            </header>

            <section className="home">
                
            </section>
        </div>
    )
}

export default Home;