

        

         let limitChar = (element) => {
            const maxChar = 200;
            
            let ele = document.getElementById(element.id);
            let charLen = ele.value.length;
            
            let p = document.getElementById('charCounter');
            p.innerHTML = maxChar - charLen + ' characters remaining';
            
            if (charLen > maxChar) 
            {
                ele.value = ele.value.substring(0, maxChar);
                p.innerHTML = 0 + ' characters remaining'; 
            }
        }


       function validation(){
        var Firstname=document.getElementById("fname").value;
        var Lastname=document.getElementById("lname").value;
        var Password=document.getElementById("pswd1").value;
        var confirmPass=document.getElementById("pswd2").value;
        var mobile=document.getElementById("mobile").value;
        var email=document.getElementById("email").value;
        var usercheck =/^[A-Za-z.]{3,20}$/ ;
        var passwordcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        var emailcheck=/^[A-Z a-z . -]{3,}@[A-Z a-z]{3,}[.]{1}[A-z a-z .]{2,6}$/
        var mobilecheck=/^[789][0-9]{9}$/;

        var row=1;
        

        if(usercheck.test(Firstname)){
            document.getElementById("Firstname").innerHTML="";
            
        }

       else{
        document.getElementById("Firstname").innerHTML="Firstname is invalid";
        return false;
       }


       if(usercheck.test(Lastname)){
        document.getElementById("Lastname").innerHTML="";
        
       }

       else{
       document.getElementById("Lastname").innerHTML="Lastname is invalid";
       return false;
       }

        if(passwordcheck.test(Password)){
            document.getElementById("Password").innerHTML="";
            
        }
       else {
            document.getElementById("Password").innerHTML="password is weak"; 
            return false;
        } 

   //Confirm password     

        

        if(confirmPass.match(Password)){
            document.getElementById("confirmPassword").innerHTML="";
            
        }
       else {
            document.getElementById("confirmPassword").innerHTML="passwords are not matching"; 
            return false;
        } 
        
  // Mobile no

        if(mobilecheck.test(mobile)){
             document.getElementById("mobileno").innerHTML="";
           
          }
         else{
           document.getElementById("mobileno").innerHTML="Mobile no not valid"; 
           return false;
            }  

            const phoneNumber = phoneInput.getNumber();

      info.style.display = "";
      info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;


  //email      
        
        if(emailcheck.test(email)){
            document.getElementById("emailid").innerHTML="Hurray email id is correct";
            
        }
        else{
            document.getElementById("emailid").innerHTML="sorry email id is not correct"; 
            return false;
  }  


  //Localstorage
 var fname=document.getElementById('fname').value
 var lname=document.getElementById('lname').value
 var email=document.getElementById('email').value
 var pwd=document.getElementById('Pass').value
 var pwd1=document.getElementById('confirmPass').value
 var phone=document.getElementById('mobile').value
 var dob=document.getElementById('dob').value
 var gender=document.getElementById('male').value
 var gender1=document.getElementById('female').value
 var gender2=document.getElementById('others').value
 var state=document.getElementById('countrySelect').value
 var city=document.getElementById('citySelect').value
 var Address=document.getElementById('para').value
 var tl=document.getElementById('tl').value
 var en=document.getElementById('en').value
 var hi=document.getElementById('hi').value
 var photo=document.getElementById('file').value
 //var checked=document.getElementById('checked').value

 var user={
   firstname:fname,
   lastname:lname,
   email:email,
   password:pwd,
   password1:pwd1,
   phone:phone,
   Dateodbirth:dob,
   gender:gender,
   gender:gender1,
   gender:gender2,
   state:state,
   city:city,
   Adress:Address,
   Telugu:tl,
   english:en,
   Hindhi:hi,
   photo:photo,
  // checked:checked


 }

 
var json=JSON.stringify(user)
 localStorage.setItem("firstname",fname)
 localStorage.setItem("lastname",lname)
 localStorage.setItem("email",email)
 localStorage.setItem("password",pwd)
 localStorage.setItem("password",pwd1)
 localStorage.setItem("phone",phone)
 localStorage.setItem("dob",dob)
 localStorage.setItem("gender",gender)
 localStorage.setItem("gender",gender1)
 localStorage.setItem("gender",gender2)
 localStorage.setItem("state",state)
 localStorage.setItem("city",city)
 localStorage.setItem("address",Address)
 localStorage.setItem("Telugu",tl)
 localStorage.setItem("english",en)
 localStorage.setItem("hindhi",hi)
 localStorage.setItem("photo",photo)
 //localStorage.setItem("checked",checked)
 console.log('user added')
  

  return false;
        
    }

    var citiesByState = {
Andhra_Pradesh: ["Vijag","Vijayawada","Tirupati"],
Telangana: ["Warangal","Secunderabad","Karimnagar"]
}



function countWords() {
 
 // Get the input text value
 var text = document
     .getElementById("inputField").value;

 // Initialize the word counter
 var numWords = 0;

 // Loop through the text
 // and count spaces in it
 for (var i = 0; i < text.length; i++) {
     var currentCharacter = text[i];

     // Check if the character is a space
     if (currentCharacter == " ") {
         numWords += 1;
     }
 }

 // Add 1 to make the count equal to the number of words
 // (count of words = count of spaces + 1)
 numWords += 1;

 // Display it as output
 document.getElementById("show")
     .innerHTML = numWords;
}

function displayRadioValue() {
            var ele = document.getElementsByName('gender');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result").innerHTML
                        = "Gender: "+ele[i].value;
            }
        }

function getValue() {
            var checkboxes = document.getElementsByName('language');
            var result = "";
  
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    result += checkboxes[i].value  + " " + " Language, ";
                }
            }
            document.write("<p> You have selected : " + result + "</p>");
        }       

 function fileValidation() {
            var fileInput =
                document.getElementById('file');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.jpg|\.png)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                alert('Invalid file type');
                fileInput.value = '';
                return false;
            }
            else
            {
             
                // Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML =
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                     
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }

        function check() {
 if (document.getElementById('agree').checked == false) {
  swal ("Warning", "Please indicate that you accept the Terms and Conditions and Privacy Policy", "error");
  return false;
 } else {
  return true;
 }
}       

//states
    
    function random_function()
    {
        var a=document.getElementById("input").value;
        if(a==="Andhra_Pradesh")
        {
            var arr=["Vizag","Vijayawada","Tirupati"];
        }
        else if(a==="Telangana")
        {
            var arr=["Warangal","Secunderabad","karimnagar"];
        }
     
        var string="";
     
        for(i=0;i<arr.length;i++)
        {
            string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
        }
        document.getElementById("output").innerHTML=string;
    }

   

 function myFunction() {
    var x = document.getElementById("pswd1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }