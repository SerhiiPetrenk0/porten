import React, {Component} from "react";
import './OurBrand.css'
import brandLogo from "../../img/Rectangle_12.png";
import { TitleFromSection } from "../other/other";
class OurBrands extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        
        return (
            <div className="OurBrands-container">
                <div className="container OurBrands-position">
                    <TitleFromSection title={'наши бренды'} />
                    <div className="urBrands-List">
                        <img src={brandLogo} alt="oo" />
                        <img src={brandLogo} alt="oo" />
                        <img src={brandLogo} alt="oo" />
                        <img src={brandLogo} alt="oo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default OurBrands;