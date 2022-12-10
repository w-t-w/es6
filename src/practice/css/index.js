/**
 * 布局
 * 1. 水平居中
 *    父元素: text-align: center;
 *    子元素: display: inline-block;
 *
 *    父元素: display: table;
 *           margin: 0 auto;
 *
 *    父元素: display: flex;
 *           justify-content: center;
 *
 *    父元素: position: relative;
 *    子元素: position: absolute;
 *           left: 50%;
 *           transform: translate(-50%);
 *
 * 2. 垂直居中
 *    父元素: display: flex;
 *           align-items: center;
 *
 *    父元素: display: table-cell;
 *           height: 100px;
 *           vertical-align: middle;
 *
 *    父元素: position: relative;
 *    子元素: position: absolute;
 *           top: 50%;
 *           transform: translateY(-50%);
 *
 *
 * 3. 水平垂直居中
 *    父元素: display: flex;
 *           align-items: center;
 *           justify-content: center;
 *
 *    父元素: display: relative;
 *    子元素: display: position;
 *           left: 50%;
 *           top: 50%;
 *           transform: translate(-50%, -50%);
 */
/**
 * BFC
 * 1. 产生 BFC 情况的分类
 *    float: 除了 none 以外的所有属性值
 *    position: absolute 和 fixed 的属性值
 *    overflow: auto、hidden 和 scroll 的属性值
 *    display: inline-block、table-cell 和 table-captain 的属性值
 * 2. BFC 的特性
 *    1) BFC 会建立一个独立的容器,容器内的元素不受外元素的影响
 *    2) BFC 的高度会联同浮动元素的高度
 *    3) BFC 的区域不会与浮动元素的区域发生覆盖
 */
/**
 * flex
 * flex-grow: 用于设置元素的扩展比例
 * flex-shrink: 用于设置元素的收缩比例
 * flex-basis: 用于设置元素的初始值
 */
/**
 * 重绘与回流
 * 区别
 * 回流是由于 DOM 结构发生改变而导致的,重绘则是 web 页面上存在一些样式变化时就会发生重绘,不一定是由于 DOM 结构发生变化而导致的
 * 回流一定会导致重绘,而重绘不一定会导致回流
 */
/**
 * CSS 三角形
 * .box {
 *     width: 0;
 *     height: 0;
 *     border: 50px solid grey;
 *     border-top-color: transparent;
 *     border-left-color: transparent;
 *     border-right-color: transparent;
 * }
 */
/**
 * CSS 梯形
 * .box {
 *     width: 10px;
 *     height: 10px;
 *     border: 50px solid grey;
 *     border-top-color: transparent;
 *     border-left-color: transparent;
 *     border-right-color: transparent;
 * }
 */
/**
 * position
 * absolute: 绝对定位,基于除了 static 以外的定位属性值的父元素来定位的
 * relative: 相对定位,相对于当前元素的位置来定位的
 * fixed: 绝对定位,基于整个浏览器 web 页面来定位的
 * static: 无定位,默认值
 * inherit: 会继承父元素的定位属性值
 * sticky: 绝对定位,基本上是基于整个浏览器 web 页面来定位的,是 relative 与 fixed 的混合定位
 */