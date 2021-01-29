# react-163-music
这是一个基于react+react-router-dom+redux全家桶的入门Demo！

### 线上访问地址

http://www.ingrace.cn/examples/11/#/


### 手机扫码访问

![Markdown](http://www.ingrace.cn/static/images/ewm_react.png)

### 部分截图

![Markdown](http://www.ingrace.cn/static/images/music_163_preview.png)

### 项目地址：（`git clone`）

```shell
git clone https://github.com/Awheat/react-163-music.git
```

### 安装

```
npm install
```

### 运行

```

一.进入server目录,启动node服务(本地模拟数据接口):

node app.js

二.项目根目录启动项目:

yarn start Or npm run start

```
浏览器输入:(http://localhost:3000)即可看到效果

### 发布

```
yarn build Or npm run build
```

### 技术栈

在此DEMO中使用了一下知识点
* react
* react-router-dom
* redux
* react-redux
* webpack2
* es6
* fetch

### 总结与收获

* 关于redux状态管理,个人理解一个reducer就是一个状态并且管理一个状态, 其实在此实例中完全可以不使用redux技术,但是为了学习所以加了一点点
* 执行dispatch改变状态好像有点不及时,所以我用了一个延时setTimeout调用好像就可以达到效果了
* 打包发布时需要配置homepage地址, 不然包扔到线上各种路径错误
* 关于路由本地环境可以用BrowserRouter,如果线上环境没有配置(比如Nginx重定向的话), 需要使用HashRouter来进行路由访问
* css3 animation-play-state 暂停动画在ios上存在兼容问题, 已通过其他方法解决
* html5的audio元素在ios中无法自动播放,必须手动交互才可以播放，已通过其他方式解决
  (备注：这个问题又回滚回去了,因为使用了wxjssdk的解决方法带来了新的严重的坑, 所以目前在ios上默认是不自动播放的)
* 接口请求的封装,以及回调的统一处理


### 感谢

感谢您的来访 ，如果对于您有帮助 ，就使劲的给个Star吧 ！ ^_^

