class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }
    info (name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel // readonly можем менять только внутри конструктора
//     }
// }

class Car { //эквивалентно тому что выше
    readonly numberOfWheels: number = 4
    constructor(readonly theModel: string) {}
}

//=====================================================

class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() { // private только там где были определены
        console.log('go')
    }
}

class Cat extends Animal {
    public  setVoice(voice: string): void {
        this.voice = voice
        console.log(this.voice)
    }
}
const cat = new Cat()
cat.setVoice('meau')

//==========================================================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends  Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return "this info";
    }
}