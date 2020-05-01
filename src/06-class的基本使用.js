//class 是ES6 中面向对象编程的对象

function Person(name, age) {
    this.name = name;
    this.age = age;
}


const p1 = new Person('王八', 15);
console.log(p1);

//静态属性: info直接挂载给了构造函数,所以它是静态属性,通过实例访问不到
// Person.info = 'aaaa'
// const p = Person.info
// console.log(p);//undefined

//通过 new 出来的实例访问到的属性,就做实例属性
// console.log(p1.name);
// console.log(p1.age);

//静态属性: 通过构造函数直接访问到的属性,叫做静态属性

// -----------------华丽的分割线-----------------
console.log("----------------");


//创建一个动物类
class Animal {
    //这是类 中的 构造器
    //每一个类中都有一个构造器,如果我们程序员没有手动指定,那么,可以认为,每个类的内部都有一个隐形的,看不见的空的构造器
    //类似于 constructor(){}
    //构造器的作用,就是,每当new 这个类的时候,必然会优先执行构造器中的代码
    constructor(name, age) {
        //构造器中通过this访问的属性,也可以叫实例属性
        this.name = name;
        this.age = age;
    }

    //在class内部 通过 static 修饰的属性,就是静态属性
    static info='eee'
}

const a1 = new Animal('大黄', 3);
console.log(a1);
// console.log(a1.name);//实例属性
// console.log(a1.age);//实例属性
console.log(Animal.info);//info 是 Animal 的静态属性

