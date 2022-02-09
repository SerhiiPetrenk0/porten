import React, { Component } from "react";
import './OldSeason.css'

import { TitleFromSection } from "../other/other";

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="OldSeason-container">
                <div className="OldSeason-img"></div>
                <div className="OldSeason-content">
                    <TitleFromSection title = {'коллекция 2018'} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                    <div className="btn btn-outline-light"> посмотреть коллекцию </div>
                </div>
            </div>
        );
    }
}

export default OldSeason;