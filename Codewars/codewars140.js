function remove (str) {  
    while (str[str.length-1] === "!"){
        str = str.slice(0, -1)
    }return str
}
  console.log(remove("!Hi!!!"))