let arr = []
let res = {
  status: 200,
  message: '成功!',
  data: [
    {
      id: 1,
      name: '张三'
    },
    {
      id: 2,
      name: '李四'
    }
  ]
}

let data = {
  id: 1,
  name: '张三'
}

// let { data } = res
// 浅拷贝->把引用地址赋值给arr
// arr = data

// 深拷贝
let newObj = { ...data }

data.name = 'tom'


// 数组api: arr.push({}) arr.pop() .map() .foreach() .filter()
// arr.map(item=>{
//   item.age = 20
// })
// let newArr = arr.filter(item=>{
//   return item.age > 18
// })

// 遍历对象属性名属性值 
for(let key in data){
  console.log(key, data[key])
}

// let num = 10; num.tofixed(1)
