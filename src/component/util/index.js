const shuffleValue = arr => arr.split('').map(v => [Math.random(), v]).sort((a,b) => a[0] - b[0]).map(v => v[1]).join('');
const getId = () => shuffleValue(~~(Math.random() * 1000000000) + 'abcdef')
export {
  shuffleValue,
  getId
}