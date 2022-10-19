var fontSize = 16;
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
editor.setAutoScrollEditorIntoView(true);
editor.setFontSize(fontSize);

if(localStorage.HTMLcode!=null){
	editor.setValue(localStorage.HTMLcode);
	if(localStorage.HTMLcode[0]==' '){
		window.frames[0].document.body.innerHTML=''+
		'<div style="position: absolute; top:  50%; left: 50%; transform: translate(-50%,-50%);">'+
		localStorage.HTMLcode+
		'</div>';						
	}else{
		window.frames[0].document.body.innerHTML=localStorage.HTMLcode;
	}
}

editor.setOptions({
	wrap: true
});

function setFontSize(plus){
	if(plus){
		fontSize=fontSize+4;
		editor.setFontSize(fontSize);
	}else{
		if((fontSize-4)>0){
			fontSize=fontSize-4;
			editor.setFontSize(fontSize);
		}
	}
}
			
document.getElementById('btnRun').onclick = function(){
	var text = editor.getValue();
	localStorage.setItem('HTMLcode', text);
	try{
		if(text==''){
			alert('EMPTY CODE');
		}else{
			if(text[0]==' '){
				window.frames[0].document.body.innerHTML=''+
				'<div style="position: absolute; top:  50%; left: 50%; transform: translate(-50%,-50%);">'+
				text+
				'</div>';						
			}else{
				window.frames[0].document.body.innerHTML=text;
			}
		}
	}catch(e){
		alert('ERROR -> '+e);
	}
}
			
if(window.screen.width < window.screen.height){
	document.getElementById('editor').style.width = '100%';
	document.getElementById('editor').style.height = 'calc(50% - 24px)';
	document.getElementById('viewer').style.width = 'calc(100% - 4px)';
	document.getElementById('viewer').style.height = 'calc(50% - 28px)';document.getElementById('viewer').style.top = 'calc(50% + 24px)';
	editor.resize();
}