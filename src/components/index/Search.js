import React, {Component} from "react";

/* Tab-Main: 搜索 */
class SearchComponent extends Component {
    render() {
        return (
            <div className="cmp_search">
                <div className="search_box">
                    <div className="search_main">
                        <input type="text" placeholder="搜索歌曲、歌手、专辑"/>
                    </div>
                </div>

                <div className="hot_search">
                    <h3 className="title">热门搜索</h3>
                    <div className="songs">
                        <ul>
                            <li>十年</li>
                            <li>一粒麦子</li>
                            <li>青花</li>
                            <li>陪我走过春夏秋冬</li>
                            <li>那一天</li>
                            <li>曾经的你</li>
                        </ul>
                    </div>
                </div>

                <div className="history">
                    <div className="item">十年 <i className="close"></i></div>
                    <div className="item">曾经的你 <i className="close"></i></div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;