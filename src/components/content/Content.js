import React, {Component} from "react";

import './Content.css'

import MainBlock from "../Main-block/Main-block";
import NewSeason from "../new-season/NewSeason";
import OldSeason from "../old-season/OldSeason";
import NewGoods from "../new-goods/NewGoods";
import OurBrands from "../our-brands/OurBrands";
import Footer from "../footer/Footer";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (<>
        <MainBlock />
        <NewSeason />
         <OldSeason />
        <NewGoods />
        <OurBrands />
         <Footer />
        </>
        );
    }
}

export default Content;