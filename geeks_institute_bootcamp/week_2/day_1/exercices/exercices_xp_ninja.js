function mergeWords(string) {
    return function nextWord(next) {
      // If an argument is provided, concatenate and return the function again
      if (next !== undefined) {
        return mergeWords(`${string} ${next}`);
      }
      // If no argument is provided, return the final accumulated string
      return string;
    };
  }

const mergeWords = (string) => (nextString) => 
    nextString === undefined ? string : mergeWords(`${string} ${nextString}`);