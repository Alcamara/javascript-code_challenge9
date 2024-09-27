const { ListItem } = require('../model/to-do')

let list = []

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

function deleteListItem(id) {
    const prevListLength = list.length
    list = list.filter(item => item.id !== id)
    if (list.length < prevListLength) {
        return 200
    }
    
    return 500
}

function updateListItem(id, note, isComplete) {
  for(const item of list){
    if (item.id === id) {
        item.note = note;
        item.isComplete = isComplete
        return 200
    }
  } 

  return 500
}

module.exports = { addListItem, getListItem, deleteListItem, updateListItem }