/* 歌Item */

import React, {Component} from "react";
import {Link} from 'react-router-dom';

/*import PropTypes from "prop-types";*/
class SongItem extends Component {

    /*static propTypes = {
        iShowNo: PropTypes.string
    };

    static defaultProps = {
        iShowNo: "false"
    };


    componentWillMount() {
        console.log(this.props.iShowNo);
    }*/


    render() {
        const item = this.props.item || {};
        return (
            <Link to={"/play/" + item.id}>
                <div className="song_item">
                    <div>{item.title}</div>
                    <p><i className="sq"></i>{item.info}</p>
                    <div className="icon_play"></div>
                </div>
            </Link>
        )
    }
}

export default SongItem;