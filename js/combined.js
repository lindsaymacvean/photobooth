	
	navigator.webkitGetUserMedia({video:true}, gotStream, noStream);
	
	var video = document.getElementById('video');
	var canvas = document.getElementById('photo');
	var filmroll = document.getElementById('filmroll');
	var receivedImage;
	
	//for when the stream is grabbed
	function gotStream(stream){
		video.src = window.webkitURL.createObjectURL(stream);
		video.onerror = function(){
			stream.stop();
			noStream();
		} 
        $("#errorMessage").hide();
        
	}
	
	// for when the stream fails
	function noStream(){
		document.getElementById('errorMessage').textContent="No Camera Available.";
	}

    //add click listeners
    $("#video").click(function(){
        snapshot();
    });
    
    $("#photo").click(function(){
        $('#videoDiv').toggle(); 
        $('#app').toggle();
    });
    
	//for when the snapshot is taken
	function snapshot() {
		var c = canvas.getContext('2d');
		canvas.width= video.clientWidth;
		canvas.height= video.clientHeight;
		canvas.style.width = video.clientWidth;
		canvas.style.height = video.clientHeight;
		c.drawImage(video,0,0,canvas.width,canvas.height);
		$('#videoDiv').toggle();
		$('#app').toggle();
	}
	
	//for when the video feed is clicked the image is saved
	function saveImg(){
		img = document.createElement("img");
		img.src = canvas.toDataURL("image/png");
		var form = document.getElementById("form2");
		sendToServer(img.src);
		img.style.padding = 5;
		img.width= canvas.width /2 ;
		img.height= canvas.height/2 ;
		filmroll.appendChild(img);
		}
	
    
    //User JQuery's $.ajax or $.post
	function sendToServer(params){	
		var ajax;
		ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {
				receivedImage = ajax.responseText;
			}
			
		}
		ajax.open("POST", "save.php", true);
		ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		ajax.send('save='.params);
	}
    
    
  