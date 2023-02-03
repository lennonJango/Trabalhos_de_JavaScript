"use strict";

const play = new Map([
  [17, "Goal"],
  [36, "Substituição"],
  [47, "Goal"],
  [61, "Substituição"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substituição"],
  [72, "Substituição"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);


console.log(play.has(64))

 const newEvents = new Set([...play.values()]);
 console.log("---New play---");
   console.log(...newEvents.values())

   newEvents.delete("Yellow card");
    console.log(newEvents)
