// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(pizazz = "*"){
    return function(person = "special"){
        return `You are ${pizazz}${person}${pizazz}!`;
    }
}