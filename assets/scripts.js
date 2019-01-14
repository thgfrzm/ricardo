(function(){

  init();

  function init(){
    setCustomCSSStyle();
  }

  // provide color to cells with determined values
  function setCustomCSSStyle(){
    var cells = document.getElementsByTagName('td');

    for (var i=2, ilen=cells.length; i<ilen; i=i+4){
      console.log(cells[i].innerHTML);
      if(cells[i].innerHTML.includes("Eduardo")){
        cells[i].style.color = '#B45F06';
        cells[i].style.background = '#FCE5CD';
      } else if(cells[i].innerHTML.includes("Juninho")){
        cells[i].style.color = '#0B5394';
        cells[i].style.background = '#CFE2F3';
      } else if(cells[i].innerHTML.includes("Thiago")){
        cells[i].style.color = '#38761D';
        cells[i].style.background = '#B6D7A8';
      }
    }
  }

}());
