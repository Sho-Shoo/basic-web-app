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
    const str_arr = query.split("plus");
    const num1 = parseInt(str_arr[0].replace(/\D/g, '')); 
    const num2 = parseInt(str_arr[1].replace(/\D/g, '')); 

    return (num1 + num2).toString();
  }

  return "";
}
