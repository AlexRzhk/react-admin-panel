export function classNames(obj = {}, styles) {
  let res = " ";
  for (let key in obj) {
    if (obj[key]) {
      if (styles) {
        res += styles[key] + " ";
      } else {
        res += key + " ";
      }
    }
  }
  return res;
}

export function split(className) {
  let classes = [];
  if (className.includes(" ")) {
    classes = className.split(" ");
  } else {
    classes.push(className);
  }
  classes = classes.reduce((a, v) => ({ ...a, [v]: v }), {});
  return classes;
}
