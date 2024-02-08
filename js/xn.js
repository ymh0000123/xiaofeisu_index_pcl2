// 获取当前日期
var currentDate = new Date();
// 检查是否为中国时间二月（中国标准时间）
if (currentDate.getMonth() === 1) {
  // JavaScript中月份从0开始计数，所以二月对应的数字是1
  // 添加引入 China Lantern 的脚本标签
  var scriptTag = document.createElement("script");
  scriptTag.src =
    "https://raw.kkgithub.com/fz6m/china-lantern/master/dist/china-lantern.min.js";
  document.head.appendChild(scriptTag);
}
