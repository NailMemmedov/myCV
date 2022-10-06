/*Canvas baslgc*/
window.addEventListener("DOMContentLoaded",event =>{
    var navbarMobile = function(){
        const nCollapsible = document.body.querySelector("#mainNavbar");
        // demeli burada eger headeri kecende rengini deyismesini isdeyirsense asagidaki yorumlanmis kodlari yazmalisan
        // const myHeaderHeight = document.querySelector("#myHeader").offsetHeight; sonrada myHeight ti sifirin yerine yazirsan ve ordada balacadir isaresini qoyursan ki ondan balaca olanda deyissin
        if(!nCollapsible){
            return;
        }if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile");

        }else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll",navbarMobile);
    const myNavbar = document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        });
    }
});
var btnCanvas = document.querySelectorAll(".btn-close-canvas");
for(let i=0 ; i<btnCanvas.length;i++){
    btnCanvas[i].addEventListener("click" , function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}
/*canvas sonu*/

(function(){
    'use strict'
    var myName = document.querySelector('#name')
    var myEmail = document.querySelector('#email')
    var myPhone = document.querySelector('#phone')
    var myMessage = document.querySelector('#message')
    var myBtn = document.querySelector('#BtnContact')

    if(myMessage.value.length == 0 ){
        myBtn.disabled = true;
    }
    const spacePattern= /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?])@([a-zA-Z]){3,}([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;
    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    function controlName(){
        var myError = document.querySelector('#ErrName');
        if(myName.value.length == 0){
        myName.classList.remove ("is-valid");
        myName.classList.add("is-invalid");
        myError.innerHTML = "Isim Alani bos birakilmaz"
        return false;
    } else if(myName.value.length <3){
            myName.classList.remove ("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = "Isim Alani 3den asagi birakilmaz"
            return false;
        }else if(myName.value.length >30){
                myName.classList.remove ("is-valid");
                myName.classList.add("is-invalid");
                myError.innerHTML = "30 dan cox olmaz ee bro"
                return false;
        }else if(!spacePattern.test(myName.value)){
            myName.classList.remove ("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = "osmansan ee bro"
            return false;
        }else if(!NumericPattern.test(myName.value)){
            myName.classList.remove ("is-valid");
            myName.classList.add("is-invalid");
            myError.innerHTML = "ae reqem olar adda beyem"
            return false;
        }else{
            myName.classList.remove ("is-invalid");
            myName.classList.add("is-valid");
            return true;
        }
    }
    function controlEmail(){
        var myError = document.querySelector('#ErrEmail');
        if(myEmail.value.length == 0){
        myEmail.classList.remove ("is-valid");
        myEmail.classList.add("is-invalid");
        myError.innerHTML = "Isim Alani bos birakilmaz"
        return false;
    } else if(myEmail.value.length <3){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = "Isim Alani 3den asagi birakilmaz"
            return false;
        }else if(myEmail.value.length >30){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
                myError.innerHTML = "30 dan cox olmaz ee bro"
                return false;
        }else if(!spacePattern.test(myEmail.value)){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
            myError.innerHTML = "osmansan ee bro"
            return false;
        }else if(!EmailPattern.test(myEmail.value)){
            myEmail.classList.remove ("is-valid");
            myEmail.classList.add("is-invalid");
            myError.textContent = "email sef yazmisiz"
            return false;
        }else{
            myEmail.classList.remove ("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }
    function controlPhone(){
        var myError = document.querySelector('#ErrPhone');
        if(myPhone.value.length == 0){
        myPhone.classList.remove ("is-valid");
        myPhone.classList.add("is-invalid");
        myError.innerHTML = "Isim Alani bos birakilmaz"
        return false;
    } else if(myPhone.value.length <7){
        myPhone.classList.remove ("is-valid");
        myPhone.classList.add("is-invalid");
            myError.innerHTML = "Isim Alani 7den asagi birakilmaz"
            return false;
        }else if(myPhone.value.length >30){
            myPhone.classList.remove ("is-valid");
            myPhone.classList.add("is-invalid");
                myError.innerHTML = "30 dan cox olmaz ee bro"
                return false;
        }else if(!spacePattern.test(myPhone.value)){
            myPhone.classList.remove ("is-valid");
            myPhone.classList.add("is-invalid");
            myError.innerHTML = "osmansan ee bro"
            return false;
        }else if(!OnlyNumberPattern.test(myPhone.value)){
            myPhone.classList.remove ("is-valid");
            myPhone.classList.add("is-invalid");
            myError.innerHTML = "nomreredede herf olar e herif"
            return false;
        }else{
            myPhone.classList.remove ("is-invalid");
            myPhone.classList.add("is-valid");
            return true;
        }
    }
    function controlMessage(){
        var myError = document.querySelector('#ErrMessage');
        if(myMessage.value.length == 0){
            myMessage.classList.remove ("is-valid");
            myMessage.classList.add("is-invalid");
        myError.innerHTML = "Isim Alani bos birakilmaz"
        return false;
    } else if(myMessage.value.length <10){
        myMessage.classList.remove ("is-valid");
        myMessage.classList.add("is-invalid");
            myError.innerHTML = "Isim Alani 10den asagi birakilmaz"
            return false;
        }else if(!NumericPattern.test(myMessage.value)){
            myMessage.classList.remove ("is-valid");
            myMessage.classList.add("is-invalid");
            myError.innerHTML = "ae reqem olar adda beyem"
            return false;
        }else{
            myMessage.classList.remove ("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }



    myMessage.addEventListener("keyup" , function(){
        document.getElementById("current-character").textContent = myMessage.value.length;
        if(myMessage.value.length >= 10){
            myBtn.disabled = false ;
        }else{
            myBtn.disabled = true ; 
        }
    });
    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener("sumbit",function(e){
        if(!myForms.checkValidity()||
        !controlName()||
        !controlEmail() ||
        !controlMessage() ||
        !controlPhone() ){
            e.preventDefault();
            e.stopPropagation();
        }else{
            // ajax kodlarini bura yaza bilersen
        }
    },false);

})();
