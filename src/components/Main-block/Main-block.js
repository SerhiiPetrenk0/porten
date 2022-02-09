import React, {Component} from "react";
import './Main-block.css'

class MainBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="MainBlock container-fluid">
                <div className="MainLogo">
                     <div>PORTEN</div>
                     <div>LVIV</div>
                </div>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                </div>
            </div>
        );
    }
}

export default MainBlock;