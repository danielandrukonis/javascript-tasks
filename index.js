/* 1. Sukurkite objektą ‚refridgerator‘. Suteikite jam tokias savybes: coloryra black, fridgeVolumeyra 212, freezerVolumeyra 77, WiFiyra Boolean ‘false’,
makeyra Liebherr, modelyra ICBn-5112, isOnyra nustatyas Boolean ‘false’. Taip pat pridėkite metodą isTurnedOn, kuris į console.log išspausdins ar įjungtas
ar ne tekstu: ‚Refridgerator is on‘ arba ‚Refridgerator is off‘. 
*/

let refridgerator = {
    color : 'black',
    fridgeVolume : 212,
    freezerVolume : 77,
    WiFi : false,
    make : 'Liebherr',
    model : 'ICBn-5112',
    isOn : false,
    isTurnedOn : function() { 
        if (refridgerator.isOn === true) {
            return 'refridgerator is on'
        }
    else {
      return 'refridgerator is off'
    }
  }
}
  
console.log(refridgerator.isTurnedOn());
  
/* 2. Pasinaudodami objektų metodu, išspausdinkite į consolę masyvą su objekto refridgeratorvalues. */

let refridgerator = {
    color : 'black',
    fridgeVolume : 212,
    freezerVolume : 77,
    WiFi : false,
    make : 'Liebherr',
    model : 'ICBn-5112',
    isOn : false,
    isTurnedOn : function() { 
    if ( refridgerator.isOn === true ) 
    { return 'refridgerator is on'  }
    else {
      return 'refridgerator is off'
    }
  },
  
   refridgeValues : function() {
  
     return 'Color: ' + this.color + '\n' + 'Fridge volume: ' + this.fridgeVolume + '\n' + 'Freezer volume: ' + this.freezerVolume + '\n' 
    
  } // nebaigta, bet esme yra padaryta
  
  }
  
  console.log(refridgerator.refridgeValues());
  
  
/* 3.Pasinaudodami objektų metodu, išspausdinkite į consolę masyvą su objekto refridgeratorkeys.  */

let refridgerator = {
  color : 'black',
  fridgeVolume : 212,
  freezerVolume : 77,
  WiFi : false,
  make : 'Liebherr',
  model : 'ICBn-5112',
  isOn : false,
  isTurnedOn : function() { 
  if ( refridgerator.isOn === true ) 
  { return 'refridgerator is on'  }
  else {
    return 'refridgerator is off'
  }
},

 refridgeValues : function() {

   return 'Color: ' + this.color + '\n' + 'Fridge volume: ' + this.fridgeVolume + '\n' + 'Freezer volume: ' + this.freezerVolume + '\n' 
  
}, // nebaigta, bet esme yra padaryta


refridgeratorKeys : function() { 

  return Object.keys(refridgerator)

}

}

console.log(refridgerator.refridgeratorKeys())


/* 4.Pasipraktikuokite objekto destruktūrizavimą ir iš objekto refridgeratorį const priskirkyte objekto make ir model. (Nenaudokite dot notation, t.y object.value).  */

const refridgerator = {
  color : 'black',
  fridgeVolume : 212,
  freezerVolume : 77,
  WiFi : false,
  make : 'Liebherr',
  model : 'ICBn-5112',
  isOn : false,
  isTurnedOn : function() { 
  if ( refridgerator.isOn === true ) 
  { return 'refridgerator is on'  }
  else {
    return 'refridgerator is off'
  }
},

 refridgeValues : function() {

   return 'Color: ' + this.color + '\n' + 'Fridge volume: ' + this.fridgeVolume + '\n' + 'Freezer volume: ' + this.freezerVolume + '\n' 
  
}, // nebaigta, bet esme yra padaryta


refridgeratorKeys : function() { 

  return Object.keys(refridgerator)

},

}

const { make: makeName, model: modelName } = refridgerator;


console.log(modelName)
console.log(makeName)
console.log(makeName + ' ' + modelName)


/* 5.Susikurkite html input fieldą tekstui. Darykite event listener onBlur ir event listener viduje pabandykite nuskaityti
ir į consolę išloginti reikšmę tiek per event.target tiek su this keyword.
Callback funkciją darykite paprastą named funkciją (pvz. function fn(e) {console.log(e.target.value)})Ar gaunama ta pati reikšmė? */

<input type="text" />
  
  const itemInput = document.querySelector("input[type=text]");

  itemInput.addEventListener("blur", fn);
  
  function fn(e) {
    console.log(e.target.value);
    
  }

  const itemInput = document.querySelector("input[type=text]");

itemInput.addEventListener("blur", fn);

function fn(e) {

this.itemInput = itemInput

  console.log(this.itemInput);
  
}


/* 6.Papildomaužduotis. Susikurkite objektą elevator. Objektui nustatykite flooryra 1. Taip pat objektas turėsmetodą moveToDestination.
moveToDestinationmetodas kas sekundę turi pakeisti aukštą padidindamas arba sumažindamas jį vienetu(patikrinti ar inkrementuoti ar dekrementuoti)
ir išloginti consolėję esamą aukštą bei nustatyti property floorį dabartinį su this.floor= naujo aukšto skaičius. Iškvietus moveToDestinationkaip   
parametras turi būti paduodamas aukštas į kurį norima patektiir metodo viduj sukamas loginimas, bei floor nustatymaskol bus pasiektas norimas aukštas.
Metodai patikrinimui pvz.: elevator.moveToDestination(10);elevator.moveToDestination(1);elevator.moveToDestination(7);elevator.moveToDestination(5);
Aukštų keitimo ciklui galite naudoti setInterval. Jei pavyks pasidaryt, pasidalinkit rezultatu. Sėkmės. */

  

 