// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    const nArr = drivers.slice();
    nArr.push(name); 
    return nArr;
}

function prependDriver(name){
    const nArr = drivers.slice();
    nArr.unshift(name); 
    return nArr;
}

function removeLastDriver(name){
    const nArr = drivers.slice();
    nArr.pop(); 
    return nArr;
}

function removeFirstDriver(name){
    const nArr = drivers.slice();
    nArr.shift(); 
    return nArr;
}

