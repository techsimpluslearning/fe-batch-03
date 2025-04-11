let dict = {};
let str = "?name=arayan&age=23&college=tit&institute=techsimplus";
let ar = str
  .slice(1, str.length)
  .split("&")
  .map((item) => {
    let data = item.split("=");
    dict[data[0]] = data[1];
  });

  console.log(dict);
  
