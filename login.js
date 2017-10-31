var users = {
  'admin': '123',
  'user1': '321',
  'user2': '213'
};


// 输出第一个问题
process.stdout.write('请输入用户名：\n');


var username = '';

// 接收用户输入
process.stdin.on('data', (input) => {

  // console.log(i++);每次输入都回到这里的回调函数。
  // 要在此处知道到底input是啥？流对象，注意去除回车键空格

  input = input.toString().trim();

  if (!username) {
    if (Object.keys(users).indexOf(input) === -1) {
      process.stdout.write('用户名不存在' + '\n');
      process.stdout.write('请输入用户名：\n');
      username = '';
    } else {
      process.stdout.write('请输入密码：\n');
      username = input;
    }
  } else {
    // 传入的是密码，此处拿不到上次的输入，所以拿不到用户名
    if (input === users[username]) {
      console.log('登陆成功');
    }else{
      process.stdout.write('请输入密码：\n');
    }
  }
});
