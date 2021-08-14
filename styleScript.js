let colorSpans = document.querySelectorAll(".colors span");
let fontColorBtn = colorSpans[0];
let backgroundColorBtn = colorSpans[1];

let alignmentSpans = document.querySelectorAll(".alignment span");

let leftAlignBtn = alignmentSpans[0];
let centerAlignBtn = alignmentSpans[1];
let rightAlignBtn = alignmentSpans[2];

let fontSize=document.querySelector("#cell-font-size");

let fontFamily=document.querySelector("#cell-font-family");

let buiSpans=document.querySelectorAll(".bui span");
let boldSpan=buiSpans[0];
let italicSpan=buiSpans[1];
let underlineSpan=buiSpans[2];

boldSpan.addEventListener("click", function(e){
    oldCell.style.fontWeight = "bold";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontWeight = "bold"; 
});

italicSpan.addEventListener("click", function(e){
  oldCell.style.fontStyle = "italic";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].italics = "italic"; 
});

underlineSpan.addEventListener("click", function(e){
  oldCell.style.textDecoration = "underline";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].underline = "underline"; 
});

fontSize.addEventListener("click", function(e){
  if(fontSize.value==10)
  {
    oldCell.style.fontSize = "10px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 10;
  }
  if(fontSize.value==12)
  {
    oldCell.style.fontSize = "12px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 12;
  }
  if(fontSize.value==14)
  {
    oldCell.style.fontSize = "14px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 14;
  }
  if(fontSize.value==16)
  {
    oldCell.style.fontSize = "16px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 16;
  }
  if(fontSize.value==18)
  {
    oldCell.style.fontSize = "18px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 18;
  }
  if(fontSize.value==20)
  {
    oldCell.style.fontSize = "20px";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontSize = 20;
  }
});

fontFamily.addEventListener("click", function(e){
  if(fontFamily.value=="arial")
  {
    oldCell.style.fontFamily = "arial";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontFamily = "arial";
  }
  if(fontFamily.value=="calibri")
  {
    oldCell.style.fontFamily = "Calibri";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontFamily = "Calibri";
  }
  if(fontFamily.value=="courier new")
  {
    oldCell.style.fontFamily = "monospace";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontFamily = "monospace";
  }
  if(fontFamily.value=="fantasy")
  {
    oldCell.style.fontFamily = "fantasy";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontFamily = "fantasy";
  }
  if(fontFamily.value=="times new roman")
  {
    oldCell.style.fontFamily = "Times New Roman";
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontFamily = "Times New Roman";
  }
});


leftAlignBtn.addEventListener("click",function(){
    oldCell.style.textAlign = "left"
    let address = oldCell.getAttribute("data-address");
    dataObj[address].textAlign = "left";
})

rightAlignBtn.addEventListener("click",function(){
    oldCell.style.textAlign = "right"
    let address = oldCell.getAttribute("data-address");
    dataObj[address].textAlign = "right";
})


centerAlignBtn.addEventListener("click",function(){
    oldCell.style.textAlign = "center"
    let address = oldCell.getAttribute("data-address");
    dataObj[address].textAlign = "center";
})



fontColorBtn.addEventListener("click", function () {
  let colorPicker = document.createElement("input");
  colorPicker.type = "color";

  colorPicker.addEventListener("change", function (e) {
    oldCell.style.color = e.currentTarget.value;
    let address = oldCell.getAttribute("data-address");
    dataObj[address].fontColor = e.currentTarget.value;
  });

  colorPicker.click();
});

backgroundColorBtn.addEventListener("click", function () {
  let colorPicker = document.createElement("input");
  colorPicker.type = "color";

  colorPicker.addEventListener("change", function (e) {
    oldCell.style.backgroundColor = e.currentTarget.value;
    let address = oldCell.getAttribute("data-address");
    dataObj[address].backgroundColor = e.currentTarget.value;

    console.log(dataObj[address]);
  });

  colorPicker.click();
});