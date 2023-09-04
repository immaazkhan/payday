var next_click=document.querySelectorAll(".next_button");
var main_form=document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber=0;
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone-input');

    phoneInput.addEventListener('input', function() {
        // Remove any non-numeric characters
        phoneInput.value = phoneInput.value.replace(/\D/g, '');

        // Limit the input to exactly 10 digits
        if (phoneInput.value.length > 10) {
            phoneInput.value = phoneInput.value.slice(0, 10);
        }
    });
});
next_click.forEach(function(next_click_form){
    next_click_form.addEventListener('click',function(){
        if(!validateform()){
            return false
        }
       formnumber++;
       updateform();
       progress_forward();
       contentchange();
    });
}); 

var back_click=document.querySelectorAll(".back_button");
back_click.forEach(function(back_click_form){
    back_click_form.addEventListener('click',function(){
       formnumber--;
       updateform();
       progress_backward();
       contentchange();
    });
});

var username=document.querySelector("#user_name");
var shownname=document.querySelector(".shown_name");
 

var submit_click=document.querySelectorAll(".submit_button");
submit_click.forEach(function(submit_click_form){
    submit_click_form.addEventListener('click',function(){
       shownname.innerHTML= username.value;
       formnumber++;
       updateform(); 
    });
});

var heart=document.querySelector(".fa-heart");
heart.addEventListener('click',function(){
   heart.classList.toggle('heart');
});


var share=document.querySelector(".fa-share-alt");
share.addEventListener('click',function(){
   share.classList.toggle('share');
});

 

function updateform(){
    main_form.forEach(function(mainform_number){
        mainform_number.classList.remove('active');
    })
    main_form[formnumber].classList.add('active');
} 
 
function progress_forward(){
    // step_list.forEach(list => {
        
    //     list.classList.remove('active');
         
    // }); 
    
     
    num.innerHTML = formnumber+1;
    step_list[formnumber].classList.add('active');
}  

function progress_backward(){
    var form_num = formnumber+1;
    step_list[form_num].classList.remove('active');
    num.innerHTML = form_num;
} 
 
var step_num_content=document.querySelectorAll(".step-number-content");

 function contentchange(){
     step_num_content.forEach(function(content){
        content.classList.remove('active'); 
        content.classList.add('d-none');
     }); 
     step_num_content[formnumber].classList.add('active');
 } 
 
 
 function validateform() {
    let isValid = true;
    const validateInputs = document.querySelectorAll(".main.active input");

    validateInputs.forEach(function (validateInput) {
        validateInput.classList.remove('warning');

        if (validateInput.hasAttribute('required')) {
            if (validateInput === document.getElementById('phone-input')) {
                // For the phone number input, check for exactly 10 digits
                if (validateInput.value.length !== 10) {
                    isValid = false;
                    validateInput.classList.add('warning');
                }
            } else {
                // For other required inputs, check if they are empty
                if (validateInput.value.length === 0) {
                    isValid = false;
                    validateInput.classList.add('warning');
                }
            }
        }
    });

    return isValid;
}

