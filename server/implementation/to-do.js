const { listItem } = require('../model/to-do')

const list = []

function getListItem(){
    return list
}

function addListItem(id, note, isComplete){
    const prevListLength = list.length
    const item = listItem(id, note, isComplete)
    if(list.length > prevListLength){
        return 200
    }

    return 500
}

module.exports = { addListItem, getListItem }