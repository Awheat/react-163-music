/**
 * api by wuwc on 2017-12-25.
 */
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

export default class Api {

    /* 环境以及api前缀 */
    apiPrefix = "";

    /* headers */
    headers = {
        'Content-Type': 'application/json',
        'Token': 'wuwangcheng',
        'CompanyId': '123456789'
    };

    /* api */
    urls = {
        getSongs: '/getSongs',
        getSongSheets: '/getSongSheets',
        getPlayInfo: '/getPlayInfo'
    };

    constructor() {
        //设置base地址
        this.apiPrefix = process.env.NODE_ENV !== 'production' ? '/api' : 'http://www.i728.top/pages/11/api';

        //拼接url
        for (let key in this.urls) {
            this.urls[key] = process.env.NODE_ENV !== 'production' ? this.apiPrefix + this.urls[key] : this.apiPrefix + this.urls[key] + '.json';
        }

    }

    /* 参数合并 */
    args(parameter) {
        const DEFAULT = {
            "a": "1",
            "b": "2",
            "c": "3"
        };
        return JSON.stringify({...DEFAULT, ...parameter});
    }


    /* 统一处理 */
    _g(promise) {
        return promise.then((res) => {
            switch (res.state) {
                case "200":
                    return res;
                case "500":
                    console.log("500处理");
                    break;
                case "1000":
                    console.log("1000处理");
                    break;
                default:
                    console.log(res.msg);
                    break;
            }
        });
    }

    /* 错误处理函数 */
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    /* 请求函数 */
    ajax(url, type = "GET", args = {}) {
        const body = this.args(args);
        const params = {method: type, headers: this.headers};
        if (type !== "GET") params.body = body;
        return fetch(url, params).then((res) => this._g(res.json())).catch(this.handleError);
    }


    /* 所有接口 */
    getSongs = () => this.ajax(this.urls.getSongs);
    getSongSheets = () => this.ajax(this.urls.getSongSheets);
    getPlayInfo = (songId) => this.ajax(this.urls.getPlayInfo, "POST", {"songId": songId});

}