# 关系型数据库

sql语句

mysql sqlserver access excel

# 非关系型数据库

nosql语句

[安装和配置文档](https://github.com/Wscats/node-tutorial/issues/20)

1. 安装mongodb.msi文件，选择custom来去更改安装的路径

2. 找到mongodb安装 路径，然后把bin文件的路径粘贴到 （高级系统设置->环境变量->设置path(如果本身有路径的话用分号隔开)

3. 在cmd里面用`mongod`命令检查是否安装成功


增加
```
db.集合名字.insert({xxx:xxx})
```

删
```
db.集合名字.remove({xxx:xxx})
```

查
```
db.集合名字.find({xxx:xxx})
```

更新
```
db.age.update({
//条件
  'title': 'wscats'
}, {
  $set: {
    'title': 'corrine',
    'age': 12
  }
}, {
//更改多条的情况
  multi: true
})
```
