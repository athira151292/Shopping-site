var $image=new Array("./assets/images/nike.jpg", "./assets/images/eos.jpg", "./assets/images/watch.jpg", "./assets/images/fone.jpg");
var $timeout={};
function changeImage($a)
{
	var $b=document.getElementById($a);
	if(!$b.count||$b.count==$image.length)
		$b.count=0;
	$b.src=$image[$b.count];
	$b.count=$b.count+1;
	$timeout=setTimeout('changeImage("'+$a+'")',2000);
}
function stopIt()
{
	clearTimeout($timeout);
}