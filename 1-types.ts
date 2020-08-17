const isFetching: boolean = true;
const loading:boolean = false;

const int: number = 10;
const float: number = 4.5;
const num: number = 3e10;

const message: string = 'Hello typeString';

const numberArray: number[] = [1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13] // записи эквивалентны

const words: string[] = ['Hello', 'TypeScript'];

//typle
const contact: [string, number] = ['Vladimir', 12345];

//Any изменяемый тип
let variable: any = 42
//...
variable = "String";
variable = [];

//unknown
let unk: unknown = 10;
 unk = '10';


//========



function sayMyName (name: string): void { //void -- функция ничего не возвращает
    console.log(name)
}
sayMyName('HAIZENBERG')

//never         возрващает ошибку либо постоянно что то делает
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true){}
}

//Type

type Login = string;
const loginAdmin: Login = 'Admin'
const loginUser: Login = 'User'

type Id = string | number;
const id1: Id = 123;
const id2: Id = '123';

type SomeType = string | null | undefined;

//-------------------------------------------

const SomeTypeForActions: string = 'SomeString'

type Actions {
  type: ty
}

