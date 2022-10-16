# yaochibao

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### husky
pre-commit-- yarn lint
pre-push-- yarn test & yarn build
commit-msg: type: message

### 单元测试
```
yarn test
```

### api测试

```
yarn test-api
```

### mock server
```
yarn mock-serve
```
打开mock-serve,可以调整数据
### 备注
* 完善测试--文件名显示错误
* 关闭json-server服务
* store 配置modules