function check(pass,repass)
	{
		var pass=document.getElementById(pass);
		var repass=document.getElementById(repass);
		if(pass!=repass)
			alert("Passwords are different");
	}