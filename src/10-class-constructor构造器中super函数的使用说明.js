//这是父类  [ 可以直接把父类,理解成原型对象 prototype ]
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log("您好");
    }
}



//这是子类 美国人
//在 class 中 可以使用 extends 关键字,实现 子类继承父类
//语法   class 子类 extends class 父类
class American extends Person{
    constructor(name,age) {
        //问题1: 为什么一定要在constructor中调用super?
            //答案: 因为一个子类,通过 extends 关键字继承了父类,,那么在子类的 constructor 构造函数中
            //必须先调用一下 super().---这是人家语法规范
        //问题2: super 是什么东西?
            //答案: super 是一个函数,而且 它是 父类的构造器; 子类中的 super ,其实就是父类 constructor 构造器的引用;
        //问题3: 为什么,调用了 super() 之后,a1 实例的 name 和 age 都变成了 undefined 了
            // 此时 super(name,age)  等同于  父类的 (constructor(name,age){})(name,age)
        //顺序是: 实例的参数-->子类构造器的参数-->子类构造器的super的参数-->父类构造器的参数
        super(name,age);

    }

}

const a1=new American('Jack',20);
console.log(a1);
a1.sayHello();


//这是子类 中国人
class Chinese extends Person{
    constructor(name,age){
        super(name,age)
    }
}

const c1=new Chinese('张三',21);
c1.sayHello();