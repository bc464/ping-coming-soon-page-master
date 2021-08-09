const btn = document.querySelector('#btn');
let inputEmail = document.querySelector("input");
const hiddenPara = document.querySelector("#hiddenPara");
const hiddenPara2 = document.querySelector("#hiddenPara2");
let complete =  "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

btn.addEventListener('click', function ()  {
	if(inputEmail.value.trim()== ""){
		inputEmail.style.border = "1px solid hsl(354, 100%, 88%)";
		hiddenPara.style.display = "block";
		inputEmail.style.opacity = "1";
	}
	else if (inputEmail.innerHTML = complete){
		inputEmail.style.border = "1px solid hsl(354, 100%, 88%)";
		hiddenPara2.style.display = "block";
		inputEmail.style.opacity = "1";
	}
});
