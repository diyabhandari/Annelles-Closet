//a mock was given here but weve changed it to match an actual call 
export const fetchCount = (amount = 1) => {
  return new Promise(async (resolve) => {
    const response = await fetch('https://localhost:8080')
    const result = await response.json()
    resolve({data})
  }  
  );
}
