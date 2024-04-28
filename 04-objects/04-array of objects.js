// // Objects inside arrays

// let blockList = [
//     { userName: "darklord", reason: "Abusive Lang used" },
//     { userName: "lazyhawk", reason: "Over Powered" },
//     { userName: "shahidali08", reason: "Pornography Content" },
// ];

// console.log(blockList[0])  // { userName: 'darklord', reason: 'Abusive Lang used' }

// // traversing array of objects
// for (let i = 0; i < blockList.length; i++) {
//     console.log("Username : ", blockList[i].userName)
//     console.log("Reasons : ", blockList[i].reason)
// }

let blockList = [
  { userName: "one", reason: "reason1" },
  { userName: "two", reason: "reason2" },
  { userName: "three", reason: "reason3" },
];

let result = blockList.map((el) => el.userName + " " + el.reason);
console.log(result);
