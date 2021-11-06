function fixed(float, to) {
  const number = parseFloat(float);
  const fixedNumber = number.toFixed(to);
  return String(fixedNumber);
}

export default fixed;
