const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let n = "0";
  let space = "**********";
  let obj = MORSE_TABLE;
  let objValues = Object.values(obj);
  let objKeys = Object.keys(obj);

  for (let i = 0; i < objKeys.length; i++) {
    for (let k = 0; k < objKeys[i].length; k++) {
      while (objKeys[i].includes(".") || objKeys[i].includes("-")) {
        objKeys[i] = objKeys[i].replace(".", "10");
        objKeys[i] = objKeys[i].replace("-", "11");
      }
      while (objKeys[i].length != 10) {
        objKeys[i] = n * (10 - objKeys[i].length) + objKeys[i];
      }
    }
  }

  let newObj = {};
  for (let j = 0; j < objKeys.length; j++) {
    newObj[objKeys[j]] = objValues[j];
  }
  newObj["**********"] = " ";

  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.substring(i, i + 10));
  }

  // while (expr.includes(space)) {
  //   expr = expr.replace(space, " ");
  // }
  // if (expr.includes(space)) expr = expr.split(" ");
  // let decodeString = "";

  for (let n = 0; n < arr.length; n++) {
    for (let m = 0; m < Object.keys(newObj).length; m++) {
      if (arr[n].includes(Object.keys(newObj)[m])) {
        arr[n] = arr[n].replace(
          Object.keys(newObj)[m],
          Object.values(newObj)[m]
        );
      }
    }
  }
  return arr.join("");
  //       for (let i = 0; i < expr[n].length; i += 10) {
  //         expr[n] = expr.substring(i, i + 10);
  //       }
  //       console.log(expr);
  //     } else if (expr[n].includes(Object.keys(newObj)[m])) {
  //       expr[n] = expr[n].replace(
  //         Object.keys(newObj)[m],
  //         Object.values(newObj)[m]
  //       );
  //       if (expr[n].includes(Object.keys(newObj)[m])) {
  //         expr[n] = expr[n].replace(
  //           Object.keys(newObj)[m],
  //           Object.values(newObj)[m]
  //         );
  //       }
  //     }
  //   }
  //   if (n != expr.length - 1) {
  //     decodeString += expr[n] + " ";
  //   } else {
  //     decodeString += expr[n];
  //   }
  // }
  // return decodeString;
}

module.exports = {
  decode,
};
