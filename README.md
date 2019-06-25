# 商城移动页面开发
访问连接https://melody523.github.io/react-app/build/#

**项目介绍**：技术栈使用 react + antd-mobile+ axios + react-router-dom + redux + react-redux + redux-thunk + styled-components，主要涉及首页、频道页、详情页、评论页、搜索页等；

## 技术点总结
1. React中使用HashRouter会与使用锚点滚动的a标签中的href产生冲突。
解决：对a标签绑定点击事件，传入对应跳转的id，利用document.getElementById方法查询到锚点，再利用h5中的方法scrollIntoView跳转到对应的id标签；
```
<a onClick={() => this.scrollToAnchor(item.href)}>
    <li className="nav_item">
    	<img src={item.imgUrl} alt="" />
    	<p>{item.title}</p>
     </li>
</a>
```

2. 实现评论图片点击放大并可滑动预览的问题。
解决：利用div设置遮罩层，和antd的Carousel组件实现图片放大预览；对评论中的小图绑定点击事件，点击显示遮罩层和图片放大可左右滑动预览；对遮罩层绑定点击事件，点击遮罩层关闭预览。
* 将锚点用传统的name属性，改成id属性。这样我们就可以用document.getElementById方法方便查询到锚点。
* 将原来的红色按钮的href属性去掉，然后添加一个onClick方法。onClick方法传入一个锚点的id，然后用下面的函数来找到锚点并跳转到锚点。

```
scrollToAnchor(anchorName) {
    anchorName = anchorName.slice(1)
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}
```

3. 实现不同的视图中进行切换，并自定义tabs不仅限于字符串的title.
解决：antd-mobile中Tabs组件可以对不同视图进行切换，需引入Badge组件，Badge组件主要是用于设置图标右上角的红点，但可在Badge内写span等标签自定义tabs的title；在tabs和内容之间若需要添加公用内容，可利用 renderTab进行重新封装，在<Tabs.DefaultTabBar {...props} />下添加公用内容；

4. css中单位em和rem的区别
em和rem相对于px更具有灵活性，相对长度单位，更适用于响应式布局。
对于em和rem的区别一句话概括：em相对于父元素，rem相对于根元素。

5. react-router v4中 HashRouter 和 BrowserRouter的使用
hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
在browserHistory 模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，所以用户访问的资源不存在。


