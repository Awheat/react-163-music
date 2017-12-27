import React, {Component} from 'react';
import Api from '../../utils/api';

export default class PlayComponent extends Component {
    /*
    * 构造函数
    *
    * */
    constructor() {
        super();
        this.api = new Api();
        this.state = {
            endTime: "",
            curTime: "",
            flag: 0,
            title: "",
            bg: "",
            picture: "",
            lyric: [],
            source: ""
        }
    }

    /*
    *
    * 播放函数
    * */
    _play() {
        const audio = this.refs.music;
        if (this.props.isPlay) {
            audio.play();
            this._lyric(audio);
        } else {
            audio.pause();
        }
    }

    /*
    *
    * 控制函数
    *
    * */
    _control() {
        this.props.onChangPlayStatus(!this.props.isPlay);
        setTimeout(() => {
            this._play();
        }, 0);
    }

    /*
    *
    * 实时显示歌词函数
    *
    * */
    _lyric(audio) {
        let lyric = this.refs.lyricCont;
        let times = [];

        /* 设置结束时间 */
        this.setState({
            endTime: this._formatTime(audio.duration)
        });

        /* 取出歌曲的所有时间 */
        for (let item of this.state.lyric) {
            times.push(item.time.substr(0, 5));
        }

        /* 当前时间小于结束时间执行播放逻辑,则停止并设置state */
        if (this.state.curTime <= this.state.endTime) {
            setInterval(() => {
                const curTime = this._formatTime(audio.currentTime);
                const index = times.indexOf(curTime);
                /* 设置当前时间以及当前下标 */
                if (index !== -1) {
                    this.setState({
                        curTime: curTime,
                        flag: index
                    });
                }
                /* 开始滚动 */
                if (index > 2) {
                    lyric.style.WebkitTransform = "translate3d(0," + (-(index - 1) * 30) + "px,0)";
                }

            }, 500);
        } else {
            audio.pause();
            this.setState({
                endTime: "",
                curTime: ""
            });
            this.props.onChangPlayStatus(false);
        }
    }

    /*
    *
    * 格式化歌词函数
    *
    * */
    _formatLyric(str) {
        let lyric = str.split("\n");
        let temp = [];
        let res = [];

        for (let i = 1; i < lyric.length; i++) {
            temp.push(lyric[i].split("]"))
        }

        for (let item of temp) {
            if (item[0] && item[1]) {
                res.push({
                    time: item[0].replace(/\[/g, ""),
                    text: item[1].trim()
                })
            }
        }
        return res;
    }

    /*
    *
    *  格式化时间
    *
    * */
    _formatTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return minutes + ":" + seconds;
    }

    /*
    *
    * 生命周期一
    *
    * */
    componentWillMount() {
        /* 根据Id请求数据 */
        const songId = this.props.match.params.songId;
        const ind = songId % 2 === 0 ? 0 : songId % 3 === 0 ? 1 : 2;
        this.api.getPlayInfo(songId).then((res) => {
            const data = res.data;
            const lyric = this._formatLyric(data[ind].info.lyric);
            console.log(data[ind].info.lyric);
            console.log(lyric);
            this.setState({
                title: data[ind].info.title,
                bg: data[ind].bg,
                picture: data[ind].picture,
                source: data[ind].source,
                lyric: lyric
            })
        });
    }

    /*
    *
    * 生命周期二
    *
    * */
    componentDidMount() {
        const audio = this.refs.music;
        audio.addEventListener("loadeddata", () => {
            this._play();
        }, false);
    }

    /*
    * 渲染
    * */
    render() {
        return (
            <div className="cmp_play">
                <div className="play_bg">
                    <img src={this.state.bg} alt=""/>
                    <div className="arrow ani"></div>
                    <div className="btns">
                        <span className="open">打开</span>
                        <span className="download">下载</span>
                    </div>
                </div>
                <div className="play_main">
                    <div className="logo"></div>
                    <div className="control">
                        <div className={this.props.isPlay ? 'handler play' : 'handler'}></div>
                        <div className="disc" onClick={this._control.bind(this)}>
                            <div className="btn_play" style={{display: this.props.isPlay ? 'block' : 'none'}}>
                                <audio src={this.state.source} ref="music"></audio>
                            </div>
                            <div className={this.props.isPlay ? 'photo spin' : 'photo spin stop'} ref="anim">
                                <img src={this.state.picture} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lyric">
                        <div className="song_title">{this.state.title}</div>
                        <div className="lyric_main">
                            <div className="lyric_cont" id="lyricCont" ref="lyricCont">
                                {
                                    this.state.lyric.map((item, i) => {
                                        return <p data-time={item.time} key={i}
                                                  className={i === this.state.flag ? 'active' : ''}>{item.text}</p>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}