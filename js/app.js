window.addEventListener('load', function() {
  // objects or nodes / type=1
  var textArea = document.getElementById('textArea');
  var btnSubmit = document.getElementById('btnSubmit');
  var showTwit = document.getElementById('showTwit');
  var counter = document.getElementById('counter');
  // var clock = document.getElementById('clock');

  // events
  // add events to the button
  btnSubmit.addEventListener('click', function() {
    if (textArea.value) {
      var newDiv = document.createElement('div');
      newDiv.textContent = textArea.value;
      showTwit.appendChild(newDiv);
      textArea.value = ''; // to clean text area.
    }
  });

  textArea.addEventListener('keydown', longValidate);
  textArea.addEventListener('keyup', longValidate);
  textArea.addEventListener('input', resizeTextarea);


  var MAXLETTER = 140; // info from the exercise.
  var message = '';

  function longValidate() {
    var letterNumber = textArea.value.length;
        // to able or disable button
    if (letterNumber < 0 || letterNumber > MAXLETTER){
      btnSubmit.disabled = true;
      // add button styles
      btnSubmit.classList.remove('btnSubmitDES');
      btnSubmit.classList.add('btnSubmitACT');
      } else if(letterNumber >= 0 || letterNumber < MAXLETTER) {
      btnSubmit.disabled = false;
      //add button styles
      btnSubmit.classList.remove('btnSubmitACT');
      btnSubmit.classList.add('btnSubmitDES');
    } 
        //add counter conditional styles
      if(letterNumber > 120 && letterNumber < 130){
            counter.className='textBlue';
        } else if (letterNumber >130 && letterNumber <=140){
            counter.className='textRed';
        } else if (letterNumber<=120 ){
            counter.className='textOriginal';
        }
        //counter # letter
        counter.value =  MAXLETTER-letterNumber ; 
        // btnSubmit.addEventListener('click', )
  };

  // to resize textArea
  function resizeTextarea() {
      this.style.height = '24px';
      this.style.height = this.scrollHeight + 12 + 'px';
  };

  // //clock
  // time.addEventListener('click', function(){
  //     if(textArea.value){
  //        var parragraf = document.createElement('div');
  //         newDiv.textContent = textArea.value;
  //         time.appendChild(parragraf);
          
  //     }
  // });

  // function clock(){ 
  //     actualTime = new Date() 
  //     hour = actualTime.getHours() 
  //     minute= actualTime.getMinutes() 
  //     second = actualTime.getSeconds() 

  //     horaImprimible = hour + " : " + minute + " : " + second 

  //     document.form_reloj.reloj.value = horaImprimible 

  //     setTimeout("clock()",1000) 
  // } 




}); //end


// //disabled button
// textArea.addEventListener('keyup', disablebButton);
// function disablebButton(){
    
//     if(textArea.value.length === 0){
//         // console.log('desabled button');
//         btnSubmit.disabled = true;
//       } else {  
//         // console.log('abled button');
//         btnSubmit.disabled = false;
//         }
// };
