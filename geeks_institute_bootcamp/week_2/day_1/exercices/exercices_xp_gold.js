//Execrice 1
//the result is 
//  ____/''''\____
const landscape = () => {
    let result = "";
  
    const flat = (x) => {
      for (let count = 0; count < x; count++) {
        result += "_";
      }
    };
  
    const mountain = (x) => {
      result += "/";
      for (let counter = 0; counter < x; counter++) {
        result += "'";
      }
      result += "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };

  //exercice 2
  //13

  //Exercice 3
  //31

  //exercice 4
//17

//exercice 5
//16