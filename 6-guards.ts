function strip(x: string | number) { //операции в зависимости от типов
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header: 'response header'
    result: 'response result'
}

class MyError {
    header: 'error header'
    message: 'error result'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

//=============================================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    //......
}
setAlertType('success')
setAlertType('danger')
// setAlertType('default' //ошибка, так как такой тип не предусмотрен

//-------------------------------------------------------------------------

type f1 = 'e' | 'b' | 'c'
type f2 = 'd' | 'b' | 'c'

type Differens<ArgumentType_1, ArgumentType_2> = ArgumentType_1 extends ArgumentType_2 ? never : ArgumentType_1
type f3 = Differens<f1, f2>

const testF3: f3 = 'e';

