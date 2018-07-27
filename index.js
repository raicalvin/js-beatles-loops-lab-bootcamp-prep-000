// add solution here

function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    arr.push(arrMusicians[i] + ' plays ' + arrInstruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
  }
  return facts;
}