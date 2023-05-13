const keys_a = ["e","i","a","o","u"];
const keys_b = ["enter","imes","ai","ober","ufat"];
var input_text =  document.getElementsByClassName("textbox__textarea")[0];
var output_text =  document.getElementsByClassName("textbox__textarea")[1];
var btn1=  document.getElementsByClassName("btn_tag")[0];
var btn2 =  document.getElementsByClassName("btn_tag")[1];
var mainBtn =  document.getElementById("main_btn");
var copyBtn =  document.getElementById("copy_btn"); 
var modes =document.getElementById("mode__switch");


function reemplac() {
	let mode = modes.checked;
    let texto = input_text.value;

	if (mode === false) {
		for (let i = 0; i <= keys_a.length; i++) {
			texto = texto.replaceAll(keys_a[i], keys_b[i]);
		} 
		
		 output_text.innerHTML = texto;
		
	} else 
	{
		for (let i = 0; i <= keys_a.length; i++) {
			texto = texto.replaceAll(keys_b[i], keys_a[i]);
		}   
		output_text.innerHTML = texto;
		
	}
}





function checkMode(){
    if (modes.checked == false){
		btn1.innerHTML= "Encriptar";   
		btn2.innerHTML=  "encriptado";}
    else {
	    btn1.innerHTML= "Desencriptar";   
		btn2.innerHTML=  "desencriptado";} 
	}

function copy(){
    
    output_text.focus();
    output_text.select();
    output_text.setSelectionRange(0, 99999);
    document.execCommand('copy');}
     
modes.addEventListener("change",checkMode);
mainBtn.addEventListener("click" , reemplac);
copyBtn.addEventListener("click", copy) ;

