### 此实例基于react+react-router-dom+redux技术, 构建的web端网易云音乐入门实例！


此时在写这个react的入门实例已经是在2017年的尾巴上了, 还有不到几天的时间就来到了2018年, 不得不感慨时间过的是真快！
最近趁着项目的间歇阶段, 打算好好的学习学习react, 到此总算有点小成果了, 今年年初的时候在做项目的技术储备时写了一个关于
vue的小入门实例, 下半年不知不觉的随着新的工作环境技术栈一下就切到Angular4了, 这么看下来就剩下react没有好好的去了解过了,
其实在react刚出来不久的时候就已经关注了一段时间, 简单的写过一些小demo不过还是懵懵懂懂的, 所以就此搁置到现在, 不过今天在基于
已经使用过的Vue和Angular等MVVM框架并在真实的项目中实践的基础上, 再次来看react的时候就不会像当初那么蒙圈了, 此时有种柳暗花明的感觉！请允许我
得瑟一下^_^! 在刚刚过去的一个礼拜里一直在看redux这个东西, 看了不少资料虽然他的执行原理明白了, 但是还是不踏实, 在项目当中不知道如何
去构建自己的状态, 于是乎就有这一个小的demo实例, 可能在我的学习习惯中, 更加习惯于用一个小的实例来解开一个新的技术的神秘面纱。目前这个小
的实例中主要的功能有了, 不过还不是很完善, 后面如果有时间会继续来完善此实例, 作为一个入门基础的demo还是可以的, 基本react涉及到的知识点都有了,
现在发布出来, 希望可以帮助到一些想我一样一直在徘徊边缘的人, 可以快快的走进react的大门。

#线上访问地址

http://wuwc.i728.top/examples/11/#/


### 手机扫码访问

![Markdown](http://wuwc.i728.top/static/images/ewm_react.png)

### 部分截图

![Markdown](http://wuwc.i728.top/static/images/music_163_preview.png)

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

