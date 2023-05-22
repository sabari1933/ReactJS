import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/"> <a class="nav-link" href="#">Hello <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task2"> <a class="nav-link" href="#">Congrats Card<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task3"> <a class="nav-link" href="#">OverLeague <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task4"> <a class="nav-link" href="#">Social Buttons <span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task5"> <a class="nav-link" href="#">Notification<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task6"> <a class="nav-link" href="#">Login Design<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task7"> <a class="nav-link" href="#">Technologies<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task8"> <a class="nav-link" href="#">Hooks<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task9"> <a class="nav-link" href="#">Fruits<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/task10"> <a class="nav-link" href="#">Feedback<span class="sr-only">(current)</span></a></Link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div class="dropdown-menu">
                                <Link to="/json1"> <a class="dropdown-item" href="#">Local Json</a></Link>
                                <Link to="/json2"> <a class="dropdown-item" href="#">Fack Json</a></Link>
                                <Link to="/json3"> <a class="dropdown-item" href="#">Database Json</a></Link>
                                <Link to="/user"> <a class="dropdown-item" href="#">UserList</a></Link>
                                <Link to="/userinsert"> <a class="dropdown-item" href="#">UserInsert</a></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Menu;