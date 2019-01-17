function cook() {
  console.log("开始做饭！");
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('做饭完毕！');
      resolve('鸡蛋炒饭！');
    }, 1000);
  });
  return p;
}

function eat(data) {
  console.log("开始吃饭！"+data);
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('吃饭完毕！');
      resolve('一双碗筷！');
    }, 5000);
  });
  return p;
}

function wash(data){
  console.log('开始洗碗：' + data);
  var p = new Promise(function(resolve, reject){        //做一些异步操作
      setTimeout(function(){
          console.log('洗碗完毕!');
          resolve('干净的碗筷');
      }, 2000);
  });
  return p;
}
//method 1
cook()
.then(function(data){
  return eat(data)
})
.then(function(data){
  return wash(data)
})
.then(function(data){
  console.log(data);
})

//method2
cook()
.then(eat)
.then(wash)
.then(function(data){
  console.log(data);
})
