 function ftoc(far) {
  return Math.round(((far - 32) * 0.5556) *10 )/ 10;

};

function ctof(cel) {
  return Math.round((cel * 1.8 + 32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
