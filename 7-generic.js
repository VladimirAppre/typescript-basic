var arrayOfNumbers = [1, 1, 2, 3, 5, 8];
var arrayOfStrings = ['hello', 'Vladimir'];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
function getPropValue(obj, key) {
    return obj[key];
}
var user = {
    name: 'Vladimir',
    nickName: 'Vladimir.Appre'
};
console.log(getPropValue(user, 'name'));
