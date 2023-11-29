import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/home"}>Acceuil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/products"}>Produits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"to={"/categories"}> Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"to={"/contacts"}>Contacts </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"to={"/connexion"}> Connexion</NavLink>
                        </li>
                    </ul>
            </div>
        </nav>
        <div className="container ">
        <Outlet/>
        </div>
        
        </>
    )
}