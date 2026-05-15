function incrementValue(id){

  const element =
    document.getElementById(id);

  let value =
    parseInt(element.innerText);

  value++;

  element.innerText = value;

}
