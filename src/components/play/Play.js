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
            source: "",
            isRun: true,
            circleClassName: "brand"
        };
    }

    /*
    * 自动播放
    * */
    _play(audio) {
        audio.play();
        this._lyric(audio);
        this.setState({circleClassName: "brand spin"});
    }

    _stop(audio) {
        audio.pause();
        /* 兼容css3动画暂停代码 */
        const circle = this.refs.circle;
        const anim = this.refs.anim;
        let iTransform = getComputedStyle(anim).transform;
        let cTransform = getComputedStyle(circle).transform;
        circle.style.transform = cTransform === 'none'
            ? iTransform
            : iTransform.concat(' ', cTransform);
        this.setState({circleClassName: "brand"});
    }

    /*
    *
    * 控制函数
    *
    * */
    _control() {
        this.props.onChangPlayStatus(!this.props.isPlay);
        const audio = this.refs.music;
        if (this.props.isPlay) {
            this.props.onChangPlayStatus(false);
            this._stop(audio);
        } else {
            this.props.onChangPlayStatus(true);
            this._play(audio);
        }
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

    _loadData() {
        /* 根据Id请求数据 */
        const songId = this.props.match.params.songId;
        const ind = songId % 2 === 0 ? 0 : songId % 3 === 0 ? 1 : 2;
        this.api.getPlayInfo(songId).then((res) => {
            const data = res.data;
            const lyric = this._formatLyric(data[ind].info.lyric);
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
    * 生命周期一
    *
    * */
    componentWillMount() {
        /*
        *
        * 如果是ios设备默认第一次不是播放状态，android没事
        *
        * */
        this.isIos() ? this.props.onChangPlayStatus(false) : this.props.onChangPlayStatus(true);

        /*
        *
        *  请求数据
        *
        *
        * */
        this._loadData();
    }

    /*
    *
    * 设备识别: ios上音频或视频默认是不让自动播放的,wxjssdk解决是可以解决但是有坑
    *
    * */
    isIos() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }

    /*
    *
    * 生命周期二
    *
    * */
    componentDidMount() {
        const audio = this.refs.music;
        audio.addEventListener("loadeddata", () => {
            if (this.props.isPlay) this._play(audio);
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
                        <div className="disc" ref="control" style={{cursor: 'pointer'}}
                             onClick={this._control.bind(this)}>
                            <div className={this.props.isPlay ? 'btn_stop' : 'btn_play'}>
                                <audio src={this.state.source} ref="music" autoPlay="autoplay"></audio>
                            </div>
                            <div className="circle" ref="circle">
                                <div className={this.state.circleClassName} ref="anim">
                                    <img src={this.state.picture} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lyric">
                        <div className="song_title">{this.state.title}</div>
                        <div className="lyric_main">
                            <div className="lyric_cont" id="lyricCont" ref="lyricCont">
                                {
                                    this.state.lyric.map((item, i) => {
                                        return <p key={i}
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

    componentWillUnmount() {

    }
}