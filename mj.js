// 以下是本框架的全部代码，使用方法请看 README.md

// 函数名 m 来源于 Mithril, 也可以理解为 make 的简称，用来创建一个元素。
function m(name) {
  if (jQuery.type(name) == 'string') {
    return $(document.createElement(name));
  }
  return name.view();
}

// 函数名 cc 意思是 create a component, 用来创建一个简单的组件。
// 由于纯数字 id 不符合 html 规范，因此以 r 开头（意思是 random）。
function cc(name, id, elements) {
  if (!id) id = 'r' + Math.round(Math.random() * 100000000);
  const vnode = m(name).attr('id', id);
  if (elements) vnode.append(elements);
  return {id: '#'+id, raw_id: id, view: () => vnode};
}