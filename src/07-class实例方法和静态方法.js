//class 是ES6 中面向对象编程的对象

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.info = 'aaa';

//这是Person的实例方法
Person.prototype.say = function () {
    console.log("这是 Person 的实例方法");
};

//这是Person的静态方法---->静态的方法都挂载给了构造器,并不在prototype上
Person.show=function () {
    console.log("这是Person的静态方法");
};

const p1 = new Person('大师傅', 19);
console.log(p1);
p1.say();//实例方法

// -----------------华丽的分割线-----------------
console.log("----------------");


//创建一个动物类

//注意1:  在 class 这个 {} 花括号这个区间内, 只能写构造器,静态方法,静态属性,实例方法(实例属性写在构造器里面)
//注意2:  class 关键字内部,还是用原来的配方(构造函数)来实现的,所以说,把我们 class 关键字 称作为语法糖;
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
    static info = 'eee';//(今后用的不多)

    //这里定义的是实例方法,和在prototype定义是一个意思
    jiao() {
        console.log("这是动物的实例方法");
    }

    //class中的静态方法
    static eat(){
        console.log("这是动物的静态方法");//(今后用的不多)
    }
}

const a1 = new Animal('大黄', 3);
console.log(a1);
a1.jiao();//z这是实例方法,今后会经常用到实例方法



