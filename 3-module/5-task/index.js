function getMinMax(str) {
  const numbers = str
  .split(' ') 
  .filter(num => !Number.isNaN(parseFloat(num)) )  
  .map(item=> parseFloat(item))         
  return{
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}
