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

  if (query.toLowerCase().includes("cube")) {
    var str_arr = query.split(",");
    var len=str_arr.length;
    var i;
    for (i=0;i<len;i++){
      var num=parseInt(str_arr[i].replace(/\D/g, ''))
      if (Math.sqrt(num)%1==0&&Math.cbrt(num)%1==0)
      return num.toString();
    }
    return "";
  }


  return "";
}
