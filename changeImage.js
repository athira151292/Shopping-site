var image=new Array("nike.jpg", "eos.jpg", "watch.jpg", "fone.jpg");
	var timeout={};
	function changeImage(a)
	{
		var b=document.getElementById(a);
		if(!b.count||b.count==image.length)
			b.count=0;
		b.src=image[b.count];
		b.count=b.count+1;
		timeout=setTimeout('changeImage("'+a+'")',2000);
	}
	function stopIt()
	{
		clearTimeout(timeout);
	}