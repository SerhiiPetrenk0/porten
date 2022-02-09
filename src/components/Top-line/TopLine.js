import React, {Component} from "react";
import { BsTelephone } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

import './TopLine.css'




class TopLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<div className="top-line d-flex align-items-center">
            <div className="container-md">
                <div className="d-flex justify-content-between">
                <div className="d-flex flex-row ">
                    <BsTelephone className="m-2" />
                    <div className="px-3 top-info m-1">8 (812) 123-45-67</div>
                    <div className="px-3 top-info m-1">Работаем 7 дней в неделю</div>
                    <div className="px-3 top-info m-1">9:00 — 18:00</div>
                </div>
                
                <div className="d-flex">
                    <BiLogIn className="m-2" />
                    <div className="top-line-loger px-1 m-1">
                        <a href ='#'>Войти </a>
                        /
                        <a href ='#'> Регистрация</a>
                    </div>
                </div>
                </div>

            </div>
            </div>
        );
    }
}

export default TopLine;