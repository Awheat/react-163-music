/* Tab-Main: 热歌榜 */
import React, {Component} from "react";
import SongItem from '../common/SongItem';

class HotSheetComponent extends Component {
    render() {
        const hotSongs = this.props.hotSongs;
        return (
            <div className="cmp_hot_songs">
                <div className="hot_brand">
                    <div className="big_icon"></div>
                    <p className="update_date">更新日期: 12月21日</p>
                </div>
                <div className="hot_songs">
                    {
                        hotSongs.map((item, i) => {
                            return (
                                <div className="item" key={i}>
                                    <span className="song_no">{i = i < 10 ? "0" + i : i}</span>
                                    <SongItem item={item}/>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="go_all_songs">查看完整歌单 &gt;</div>
            </div>
        )
    }
}

export default HotSheetComponent;