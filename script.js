const btn3b = document.getElementById('btn3b');
const pfr = document.getElementById('pfr');
const btnVs3b = document.getElementById('btnVs3b');
const buttons3b = document.getElementById('buttons3b');
const prf1 = document.getElementById('pfr1');
const buttons3b1 = document.getElementById('buttons3b1');
const buttons3b2 = document.getElementById('buttons3b2');
const buttons3b3 = document.getElementById('buttons3b3');
const buttonsVs3b = document.getElementById('buttonsVs3b');
const imageContainer = document.getElementById('imageContainer');
const SBvsBU = document.getElementById('SBvsBU');
const BBvsBU = document.getElementById('BBvsBU');

let isButtonsVsMpVisible = false;
let isButtonsVsCoVisible = false;
let isButtonsVsBuVisible = false;
let isButtonsVsSbVisible = false;
let isButtonsVsBbVisible = false;

btnVs3b.addEventListener('click', () => {
  defBB1.style.display = 'none';
  prf1.style.display = 'none';
  buttons3b.style.display = 'none';
  buttons3b1.style.display = 'none';
  buttons3b2.style.display = 'none';
  prf1.style.display = 'none';
  defvsMp3b.style.display = 'none'; 
  defCo3b.style.display = 'none'; 
  defBu3b.style.display = 'none'; 
  defSb3b.style.display = 'none'; 
  defBb3b.style.display = 'none'; 
  imageContainer.innerHTML = '';
  buttonsVs3b.style.display = buttonsVs3b.style.display === 'none' ? 'flex' : 'none';
  SBvsBU.style.display = 'none';
  BBvsBU.style.display = 'none';
});

btn3b.addEventListener('click', () => {
  defBB1.style.display = 'none';
  buttons3b.style.display = buttons3b.style.display === 'none' ? 'flex' : 'none';
  buttons3b1.style.display = buttons3b1.style.display === 'none' ? 'flex' : 'none';
  buttons3b2.style.display = buttons3b2.style.display === 'none' ? 'flex' : 'none';
  buttons3b3.style.display = buttons3b3.style.display === 'none' ? 'flex' : 'none';
  defCo3b.style.display = 'none'; 
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none'; 
  defBb3b.style.display = 'none';
  prf1.style.display = 'none';
  buttonsVs3b.style.display = 'none';
  defvsMp3b.style.display = 'none'; 
  imageContainer.innerHTML = '';
});

pfr.addEventListener('click', () => {
  defBB1.style.display = 'none';
  buttons3b.style.display = 'none';
  buttons3b1.style.display = 'none';
  buttons3b2.style.display = 'none';
  buttons3b3.style.display = 'none';
  defvsMp3b.style.display = 'none';
  defCo3b.style.display = 'none';
  defBu3b.style.display = 'none';
  prf1.style.display = prf1.style.display === 'none' ? 'flex' : 'none';
  buttonsVs3b.style.display = 'none';
  defvsMp3b.style.display = 'none'; 
  imageContainer.innerHTML = '';
  defBb3b.style.display = 'none';
});
defBB.addEventListener('click', () => {
  defBb3b.style.display = 'none';
  prf1.style.display = 'none';
  defBB1.style.display = 'none';
  buttons3b.style.display = 'none';
  buttons3b1.style.display = 'none';
  buttons3b2.style.display = 'none';
  buttons3b3.style.display = 'none';
  defvsMp3b.style.display = 'none';
  defCo3b.style.display = 'none';
  defBu3b.style.display = 'none';
  defBB1.style.display = defBB1.style.display === 'none' ? 'flex' : 'none';
  buttonsVs3b.style.display = 'none';
  defvsMp3b.style.display = 'none'; 
  imageContainer.innerHTML = '';
  
});
const defBB1UTG = document.getElementById('defBB1UTG');
const defBB1MP = document.getElementById('defBB1MP');
const defBB1CO = document.getElementById('defBB1CO');
const defBB1BU = document.getElementById('defBB1BU');
const defBB1SB = document.getElementById('defBB1SB');

const pfrUTG = document.getElementById('pfrUTG');
const pfrMP = document.getElementById('pfrMP');
const pfrCO = document.getElementById('pfrCO');
const pfrBU = document.getElementById('pfrBU');
const pfrSB = document.getElementById('pfrSB');

const MPvsUTG = document.getElementById('MPvsUTG');
const COvsUTG = document.getElementById('COvsUTG');
const BUvsUTG = document.getElementById('BUvsUTG');
const SBvsUTG = document.getElementById('SBvsUTG');
const BBvsUTG = document.getElementById('BBvsUTG');

const COvsMP = document.getElementById('COvsMP');
const BUvsMP = document.getElementById('BUvsMP');
const SBvsMP = document.getElementById('SBvsMP');
const BBvsMP = document.getElementById('BBvsMP');

const BUvsCO = document.getElementById('BUvsCO');
const SBvsCO = document.getElementById('SBvsCO');
const BBvsCO = document.getElementById('BBvsCO');

const btnVsMp3b = document.getElementById('btnVsMp3b');
const btnVsCo3b = document.getElementById('btnVsCo3b');
const btnVsBu3b = document.getElementById('btnVsBu3b');
const btnVsSb3b = document.getElementById('btnVsSb3b');
const btnVsBb3b = document.getElementById('btnVsBb3b');
const defvsMp3b = document.getElementById('defvsMp3b');
const defCo3b = document.getElementById('defCo3b');
const defBu3b = document.getElementById('defBu3b');
const defSb3b = document.getElementById('defSb3b');
const defBb3b = document.getElementById('defBb3b');

let currentImage = null;

MPvsUTG.addEventListener('click', () => toggleImage('1'));
COvsUTG.addEventListener('click', () => toggleImage('2'));
BUvsUTG.addEventListener('click', () => toggleImage('3'));
SBvsUTG.addEventListener('click', () => toggleImage('4'));
BBvsUTG.addEventListener('click', () => toggleImage('5'));
COvsMP.addEventListener('click', () => toggleImage('6'));
BUvsMP.addEventListener('click', () => toggleImage('7'));
SBvsMP.addEventListener('click', () => toggleImage('8'));
BBvsMP.addEventListener('click', () => toggleImage('9'));
BUvsCO.addEventListener('click', () => toggleImage('10'));
SBvsCO.addEventListener('click', () => toggleImage('11'));
BBvsCO.addEventListener('click', () => toggleImage('12'));
SBvsBU.addEventListener('click', () => toggleImage('13'));
BBvsBU.addEventListener('click', () => toggleImage('14'));
pfrUTG.addEventListener('click', () => toggleImage('17'));
pfrMP.addEventListener('click', () => toggleImage('18'));
pfrCO.addEventListener('click', () => toggleImage('19'));
pfrBU.addEventListener('click', () => toggleImage('20'));
pfrSB.addEventListener('click', () => toggleImage('21'));

const callButton = document.getElementById('callvsMp3b');
const fourBButton = document.getElementById('4bvsMp3b');

callButton.addEventListener('click', () => toggleImage('22'));
fourBButton.addEventListener('click', () => toggleImage('23'));

const coUTGcall = document.getElementById('defCoUTGcall');
const coUTG4b = document.getElementById('defCoUTG4b')
const coMPcall = document.getElementById('defCoMPCall')
const coMP4b = document.getElementById('defCoMP4b')
const buUTGcall = document.getElementById('defBuUTGcall')
const buUTG4b = document.getElementById('defBuUTG4b')
const buMPcall = document.getElementById('defBuMPcall')
const buMP4b =  document.getElementById('defBuMP4b')
const buCOcall = document.getElementById('defBuCOcall')
const buCO4b = document.getElementById('defBuCO4b')




const sbUTGcall = document.getElementById('defSbUTGcall')
const sbUTG4b = document.getElementById('defSbUTG4b')
const sbMPcall = document.getElementById('defSbMPcall')
const sbMP4b= document.getElementById('defSbMP4b')
const sbCOcall= document.getElementById('defSbCOcall')
const sbCO4b= document.getElementById('defSbCO4b')
const sbBUcall= document.getElementById('defSbBUcall')
const sbBU4b= document.getElementById('defSbBU4b')
const bbUTGcall= document.getElementById('defBbUTGcall')
const bbUTG4b= document.getElementById('defBbUTG4b')
const bbMPcall= document.getElementById('defBbMPcall')
const bbMP4b= document.getElementById('defBbMP4b')
const bbCOcall= document.getElementById('defBbCOcall')
const bbCO4b = document.getElementById('defBbCO4b')
const bbBUcall = document.getElementById('defBbBUcall')
const bbBU4b = document.getElementById('defBbBU4b')
const bbSBcall = document.getElementById('defBbSBcall')
const bbSB4b = document.getElementById('defBbSB4b')


coUTGcall.addEventListener('click', () => toggleImage('24'));
coUTG4b.addEventListener('click', () => toggleImage('25'));
coMPcall.addEventListener('click', () => toggleImage('26'));
coMP4b.addEventListener('click', () => toggleImage('27'));
buUTGcall.addEventListener('click', () => toggleImage('28'));
buUTG4b.addEventListener('click', () => toggleImage('29'));
buMPcall.addEventListener('click', () => toggleImage('30'));
buMP4b.addEventListener('click', () => toggleImage('31'));
buCOcall.addEventListener('click', () => toggleImage('32'));
buCO4b.addEventListener('click', () => toggleImage('33'));
 sbUTGcall.addEventListener('click', () => toggleImage('34'));
 sbUTG4b.addEventListener('click', () => toggleImage('35')); 
 sbMPcall.addEventListener('click', () => toggleImage('36')); 
 sbMP4b.addEventListener('click', () => toggleImage('37'));
 sbCOcall.addEventListener('click', () => toggleImage('38'));
 sbCO4b.addEventListener('click', () => toggleImage('39'));
 sbBUcall.addEventListener('click', () => toggleImage('40'));
 sbBU4b.addEventListener('click', () => toggleImage('41'));
 bbUTGcall.addEventListener('click', () => toggleImage('42'));
 bbUTG4b.addEventListener('click', () => toggleImage('43'));
 bbMPcall.addEventListener('click', () => toggleImage('44'));
 bbMP4b.addEventListener('click', () => toggleImage('45'));
 bbCOcall.addEventListener('click', () => toggleImage('46'));
 bbCO4b.addEventListener('click', () => toggleImage('47')); 
 bbBUcall.addEventListener('click', () => toggleImage('48')); 
 bbBU4b.addEventListener('click', () => toggleImage('49')); 
 bbSBcall.addEventListener('click', () => toggleImage('50'));
 bbSB4b.addEventListener('click', () => toggleImage('51')); 
 defBB1UTG.addEventListener('click', () => toggleImage('52')); 
 defBB1MP.addEventListener('click', () => toggleImage('53')); 
 defBB1CO.addEventListener('click', () => toggleImage('54')); 
 defBB1SB.addEventListener('click', () => toggleImage('55')); 
 defBB1BU.addEventListener('click', () => toggleImage('56')); 



const images = document.getElementsByTagName('img');

btnVsMp3b.addEventListener('click', function() {
  defCo3b.style.display = 'none'; 
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none'; 
  defBb3b.style.display = 'none';
  imageContainer.innerHTML = '';

  for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
  }

  if (isButtonsVsMpVisible) {
      defvsMp3b.style.display = 'none';
  } else {
      defvsMp3b.style.display = 'flex';
  }
  isButtonsVsMpVisible = !isButtonsVsMpVisible;

});

btnVsCo3b.addEventListener('click', function() {

  defvsMp3b.style.display = 'none';
  defCo3b.style.display = 'none'; 
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none'; 
  defBb3b.style.display = 'none';
  imageContainer.innerHTML = '';
  
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  if (isButtonsVsCoVisible) {
    defCo3b.style.display = 'none';
  } else {
    defCo3b.style.display = 'flex';
  }
  isButtonsVsCoVisible = !isButtonsVsCoVisible;
  
});
btnVsBu3b.addEventListener('click', function() {
  defCo3b.style.display = 'none'; 
  defSb3b.style.display = 'none'; 
  defvsMp3b.style.display = 'none';
  defCo3b.style.display = 'none';
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none';
  defBb3b.style.display = 'none';
  imageContainer.innerHTML = '';
  
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  if (isButtonsVsBuVisible) {
    defBu3b.style.display = 'none';
  } else {
    defBu3b.style.display = 'flex';
  }
  isButtonsVsBuVisible = !isButtonsVsBuVisible;
  
});
btnVsSb3b.addEventListener('click', function() {
  defCo3b.style.display = 'none'; 
  defvsMp3b.style.display = 'none';
  defBu3b.style.display = 'none';
  defCo3b.style.display = 'none';
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none';
  defBb3b.style.display = 'none';
  imageContainer.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  if (isButtonsVsSbVisible) {
    defSb3b.style.display = 'none';
  } else {
    defSb3b.style.display = 'flex';
  }
  isButtonsVsSbVisible = !isButtonsVsSbVisible;
});
btnVsBb3b.addEventListener('click', function() {
  defCo3b.style.display = 'none'; 
  defvsMp3b.style.display = 'none';
  defBu3b.style.display = 'none';
  defSb3b.style.display = 'none'; 
  imageContainer.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  if (isButtonsVsBbVisible) {
    defBb3b.style.display = 'none';
  } else {
    defBb3b.style.display = 'flex';
  }
  isButtonsVsBbVisible = !isButtonsVsBbVisible;
});

function toggleImage(imageName) {
  if (currentImage && currentImage.src.endsWith(`${imageName}.png`)) {
    imageContainer.innerHTML = '';
    currentImage = null;
  } else {
    const img = document.createElement('img');
    img.src = `images/${imageName}.png`;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    currentImage = img;
  }
}

buttonsVs3b.style.display = 'none';


