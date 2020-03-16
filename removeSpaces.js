//REMOVE SPACES

const removeSpaces = str => {
  return str.replace(/ /g, '');


}

console.log(removeSpaces("alphabet soup is green   "))

module.exports = {
  removeSpaces
}
