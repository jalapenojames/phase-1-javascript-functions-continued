// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun(activity='bath my dog')

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*') {
    const innerFunction = function(adjective='special') {
        return `You are ${string}${adjective}${string}!`
    }
    return innerFunction
}