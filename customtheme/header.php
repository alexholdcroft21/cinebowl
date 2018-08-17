
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Blog Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
  <link href="<?php echo get_bloginfo('template_directory'); ?>/style.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>


  <body>

    <div class="blog-masthead">
    	<div class="container">
    		<nav class="blog-nav">
            <a href="http://localhost/wordpress/home/"><img src="http://www.cinebowl.co.uk/images/template/logo.gif" alt="logo"></a>
             <li><a href="http://localhost/wordpress/home/">Home</a></li>
             <li><a href="http://localhost/wordpress/cinema/">Cinema</a></li>
             <li><a href="http://localhost/wordpress/bowling/">Bowling</a></li>
             <li><a href="http://localhost/wordpress/ice-skating/">Ice Skating</a></li>
             <li><a href="http://localhost/wordpress/find-us/">Find Us</a></li>
             <li><a href="http://localhost/wordpress/food-drink/">Food & Drink</a></li>
             <li><a href="http://localhost/wordpress/contact-us/">Contact Us</a></li>
             <a href="javascript:void(0);" class="icon" onclick="menuToggle()">
               <i class="fa fa-bars"></i>
             </a>
        </nav>
    	</div>
    </div>

    <script>
    function menuToggle() {
      document.getElementsByTagName("LI")[0].style.display = "none";
    }
    </script>

    <div class="container">
