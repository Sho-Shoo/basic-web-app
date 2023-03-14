import { maxHeaderSize } from "http";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query == "What is your name?") {
    return ("nb");
  }

  if (query.toLowerCase().includes("plus")) {
    var str_arr = query.split("plus");
    var num1 = parseInt(str_arr[0].replace(/\D/g, '')); 
    var num2 = parseInt(str_arr[1].replace(/\D/g, '')); 

    return (num1 + num2).toString();
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    var str_arr = query.split(": ");
    var nums_str = str_arr[1];  
    var nums_str_arr = nums_str.split(", "); 
    var nums = nums_str_arr.map(function(str) {
      // using map() to convert array of strings to numbers
      return parseInt(str); 
    });

    return Math.max(...nums).toString(); 
  }

  return "";
}
