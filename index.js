// add solution here
function theBeatlesPlay (muscians, instruments) {
const length = muscians.length-1;
let band = [];
  for(let i = 0; i <= length; i++) {
  band.push(`${muscians[i]} plays ${instruments[i]}`);
  }
return band;
}

function johnLennonFacts (facts) {
let n = facts.length
let exclamationAddedFacts = [];
  while(n>0) {
  exclamationAddedFacts.push(`${facts[n]}!!!`)
  n--;
  }
  return exclamationAddedFacts;
}
