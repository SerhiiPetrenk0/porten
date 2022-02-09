import React, {Component} from "react";
import { BsSearch, BsFillBasketFill } from "react-icons/bs";
import TopLine from '../Top-line/TopLine'

import './Header.css'
//https://react-bootstrap.github.io/components/offcanvas/

class Header extends Component {

    render() {
        return (<>
        <TopLine />
            <div className="Header">
                <div className="container-lg">
                    <div className="d-flex justify-content-between align-items-center inner">
                        <div className="text-white logo">
                            porten
                        </div>
                        <nav className="text-white d-flex flex-row nav-item">
                            <a href="#" className=" text-uppercase">Понравилось</a>
                            <a href="#" className=" text-uppercase">Личний кабинет</a>
                            <a href="#" className=" text-uppercase">Настройки</a>
                            <div>
                                <BsFillBasketFill className="m-4 nav-icon" />
                                <BsSearch className="m-4 nav-icon" />
                            </div>
                        </nav>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;