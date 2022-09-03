var flag = false //全局变量在页面初始化的时候运行一次
function show_menu(){ //获取menu1对象本身存到对象menu1里面
	var title1=document.getElementById("title");
	if(flag){
		title1.style.display="none";
		flag=false;
	}else{
		title1.style.display="block";
		flag=true;
	}
}

function show_menu1(){
	var title1=document.getElementById("title");
		title1.style.display="none";
		flag=false;
}