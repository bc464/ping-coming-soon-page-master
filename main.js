const btn = document.querySelector('#btn');
const inputEmail = document.querySelector("input");
const hiddenPara = document.querySelector("#hiddenPara");

btn.addEventListener('click', function ()  {
	if(inputEmail.textContent = "abc"){
		inputEmail.style.border = "1px solid hsl(354, 100%, 88%)";
		hiddenPara.style.display = "block";
		inputEmail.style.opacity = "1";
	}
});
