var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  console.log(katzDeliLine);
  console.log(katzDeliLine.length);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

const katzDeliLine = ["name1", 'name2'];

takeANumber(katzDeliLine, "i petrov")