interface Rect {
    readonly id: string //  только для чтения
    color?: string // необязательный параметр
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 5,
        height: 10
    },
}
rect2.color = 'red';

const rect3 = {} as Rect
const rect4 = <Rect>{}


//=====================


interface RectWithArea extends Rect {
    getArea: () => number // должны вернуть намбер
}

const rect5: RectWithArea = {
    id: '1230',
    size: {
        width: 10,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//====================

interface Iclock {  
    time: Date
    setTime(date: Date) : void
}

class Clock implements Iclock {
    time: Date = new Date() //по умолчанию
    setTime(date: Date): void {
        this.time = date
    }
}

//==============================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
