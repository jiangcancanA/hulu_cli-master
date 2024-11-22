// 日期/时间格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}
//当前周到下一周
export function getWeekDates(time, pattern = '{y}-{m}-{d} {h}:{i}:{s}') {
  if (!time) {
    return null;
  }

  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }

  const day = date.getDay() || 7; // 获取当前星期几，周日为0需要改为7
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - day + 1); // 本周的开始日期（周一）

  const currentWeek = [];
  const nextWeek = [];

  for (let i = 0; i < 7; i++) {
    let d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    currentWeek.push(this.$parseTime(d, pattern));
  }

  for (let i = 7; i < 14; i++) {
    let d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    nextWeek.push(this.$parseTime(d, pattern));
  }

  return { currentWeek, nextWeek };
}
// 手机号
export function validatePhoneNumber(phoneNumber) {
  // 简单的手机号码验证正则（根据实际需求调整）
  const phoneRegex = /^[1][3-9][0-9]{9}$/;
  return phoneRegex.test(phoneNumber);
}
// globalEnums.js
// utils/globalEnums.js
export function AgentType(type) {
    const types = {
        "NonAgent": "非代理",
        "FirstAgent": "一级代理",
        "SecondAgent": "二级代理",
        "ThirdAgent": "三级代理",
        "Customer": "终端客户"
    };
    return types[type] || "未知类型";
}

