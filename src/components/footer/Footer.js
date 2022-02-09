import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<>
            <div className="footer" >
                <div className="container footer-position">
                    <div className="footer-row">
                        <div className="footer-title">о магазине</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                    </div>
                    <div className="footer-row">
                        <div className="footer-title">категории</div>
                        <div className="footer-category">
                            <span>часы</span>
                            <span>браслеты</span>
                            <span>ремни</span>
                            <span>ювелирные изделия</span>
                            <span>запонки</span>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-title">россилка</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                            <div className="footer-email-container">
                            <input className="footer-email" type='email' placeholder="Ваша почта" />
                            <div className="footer-email-send">ПОДПИСАТЬСЯ</div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="buttonLine">
                <div className="container buttonLine-style">
                    <div>© 2020 Все права защищены</div>
                    <div>Сделано Figma.info</div>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;