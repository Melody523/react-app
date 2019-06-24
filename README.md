# 商城移动页面开发
访问连接https://melody523.github.io/react-app/build/#

**项目介绍**：技术栈使用 react + antd-mobile+ axios + react-router-dom + redux + react-redux + redux-thunk + styled-components，主要涉及首页、频道页、详情页、评论页、搜索页等；

## 技术点总结
1. React中使用HashRouter会与使用锚点滚动的a标签中的href产生冲突。
解决：对a标签绑定点击事件，传入对应跳转的id，利用document.getElementById方法查询到锚点，再利用h5中的方法scrollIntoView跳转到对应的id标签；

2. 实现评论图片点击放大并可滑动预览的问题。
解决：利用div设置遮罩层，和antd的Carousel组件实现图片放大预览；对评论中的小图绑定点击事件，点击显示遮罩层和图片放大可左右滑动预览；对遮罩层绑定点击事件，点击遮罩层关闭预览。

3. 实现不同的视图中进行切换，并自定义tabs不仅限于字符串的title.
解决：antd-mobile中Tabs组件可以对不同视图进行切换，需引入Badge组件，Badge组件主要是用于设置图标右上角的红点，但可在Badge内写span等标签自定义tabs的title；在tabs和内容之间若需要添加公用内容，可利用 renderTab进行重新封装，在<Tabs.DefaultTabBar {...props} />下添加公用内容；
