function search(search)
{
	var $searchitem= document.getElementById(search);
	if($searchitem=='men')
		window.open("http://10.1.4.79/test/men.html");
	if($searchitem=='women')
		window.open("http://10.1.4.79/test/women.html");
	if($serachitem="books"||"book")
		window.open("http://10.1.4.79/test/books.html");
	else
		document.write("searched item not found");
}