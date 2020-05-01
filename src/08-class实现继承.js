//这是父类  [ 可以直接把父类,理解成原型对象 prototype ]
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}



//这是子类 美国人
//在 class 中 可以使用 extends 关键字,实现 子类继承父类
//语法   class 子类 extends class 父类
class American extends Person{

}

const a1=new American('Jack',20);
console.log(a1);


//这是子类 中国人
class Chinese extends Person{

}

const c1=new Chinese('张三',21);