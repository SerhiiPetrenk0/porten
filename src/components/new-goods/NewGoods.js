import React, {Component} from "react";
import { TitleFromSection } from "../other/other";
import { WatchList } from "../other/other";
import './NewGoods.css'

class NewGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="NewGoods-container" >
                <TitleFromSection title = {'новые поступления'} />
                <div className="NewGoods-list">
                <WatchList count = { 8 } />
                </div>
            </div>
        );
    }
}

export default NewGoods;