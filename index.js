// add solution here

function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    arr.push(arrMusicians[i] + ' plays the ' + arrInstruments[i]);
  }
  return arr;
}