import React, {Component} from 'react';

export default class PlayListComponent extends Component {
    render() {
        return (
            <div className="cmp_play_list">
                <div className="header">
                    <div className="hdr_main">
                        <div className="picture">
                            <span className="tag">精品歌单</span>
                            <span className="num">108.7万</span>
                            <img src={require("../../assets/images/photo.jpg")} alt=""/>
                        </div>
                        <div className="info">
                            <p className="desc">当古典音乐遇上另类演绎，妙趣横生</p>
                            <div className="photo">
                                <img src={require("../../assets/images/photo.jpg")} alt=""/>
                                <span>团战专用小火把团战专用小火把团战专用小火把</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="texts">
                    <div className="tags">标签：<i>古典</i><i>另类/独立</i><i>经典</i></div>
                    <div className="introduction">
                        <p>简介：爵士味的肖邦，金属版的贝多芬，拉美风情的巴赫，玩电吉他的维瓦尔第……是不是觉得画风突变？当看似相距甚远的两种音乐风格交融在一起，曾经熟悉的古典名曲也变得妙趣横生起来，令人耳目一新。</p>
                        <p>以下是改编后风格以及作品名称，经典版本序号在前，改编版本序号在后。推荐食用方法：先听奇数序号的正统演绎，再听下面偶数序号的另类演绎，对照着听，会有一种奇妙的新鲜感：</p>
                    </div>
                    <div className="catalog">
                        <h3>爵士：</h3>
                        <p>1、2 贝多芬-第八钢琴奏鸣曲第三乐章</p>
                        <p>3、4 莫扎特-土耳其进行曲</p>
                        <p>5、6 肖邦-降E大调夜曲</p>
                        <p>7、8 肖邦-e小调夜曲</p>
                        <p>9、10 门德尔松/李斯特-乘着歌声的翅膀</p>
                        <p>11、12 舒曼-梦幻曲</p>
                        <p>13、14 肖邦-降E大调华丽大圆舞曲</p>
                        <p>15、16 肖邦-升c小调圆舞曲</p>
                        <p>17、18 肖邦-降A大调离别圆舞曲</p>
                        <p>19、20 贝多芬-致爱丽丝</p>
                        <p>21、22 李斯特-钟</p>
                        <p>23、24 肖邦-降D大调前奏曲“雨滴”</p>
                        <p>25、26 帕格尼尼-第二十四首随想曲</p>
                        <p>27、28 克莱斯勒-爱的喜悦</p>
                        <p>29、30 巴赫-G弦上的咏叹调</p>
                        <p>31、32 舒伯特-鳟鱼五重奏 第四乐章</p>
                        <p>33、34 舒伯特-圣母颂</p>
                        <p>35、36 勃拉姆斯-摇篮曲</p>
                        <p>37、38 巴赫-第一无伴奏大提琴组曲 前奏曲</p>
                        <p>39、40 莫扎特-第四十交响曲第一乐章</p>
                        <p>41、42 勃拉姆斯-第五号匈牙利舞曲</p>
                        <p>43、44 维托里奥·蒙蒂-查尔达什舞曲</p>
                    </div>
                </div>
            </div>
        )
    }
}