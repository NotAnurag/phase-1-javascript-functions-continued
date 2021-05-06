// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(stuff='go to the office') {
    return `This Monday, I will ${stuff}.`;
}

function wrapAdjective(sign='*') {
    return function(parameter='special') {
        return `You are ${sign}${parameter}${sign}!`;
    }
}