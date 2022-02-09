import React, {Component} from "react";

import './NewSeason.css'

import { TitleFromSection } from "../other/other";
import { WatchList } from "../other/other";

class NewSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="NewSeason-main">
                <div className="NewSeason">
                    
                        <TitleFromSection className="NewSeason-title" title = {'СЕЗОН 2020/21'} />
                        <div className="ListContainer" >
                             <WatchList count = { 3 } />
                        </div>
                </div>
                <div className="new-collection">
                    <TitleFromSection title = {'Нова Колекція'} />
                    <div className="btn btn-outline-light">Каталог</div>
                </div>
            </div>
        );
    }
}

export default NewSeason;