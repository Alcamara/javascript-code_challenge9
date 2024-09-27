const { ListItem } = require('../model/to-do')

const list = []

function getListItem(){
    return list
}

function addListItem(id, note, isComplete){
    const prevListLength = list.length
    const item = new ListItem(id, note, isComplete)
    list.push(item)
    if(list.length > prevListLength){
        console.log(list);
        
        return 200
    }

    return 500
}

module.exports = { addListItem, getListItem }