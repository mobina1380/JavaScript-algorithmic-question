function processArrays(arr1, arr2) {
    const uniqueArr1 = [...new Set(arr1)];
    let indexesArray = [];

    for (let i = 0; i < arr2.length; i++) {
      uniqueArr1.push(arr2[i]);
  
     
      uniqueArr1.sort((a, b) => b - a);
  
    
      let currentIndex = uniqueArr1.indexOf(arr2[i]);
  
     
      indexesArray.push(currentIndex + 1);
  
   
      uniqueArr1.splice(currentIndex, 1);
    }
  
    return indexesArray;
  }
  

  const sortedArray = [100, 90, 90, 80,75,60,30,10]; 
  const targetArray = [120, 50, 65, 77,90];
  
  const result = processArrays(sortedArray, targetArray);
  console.log(result);
  