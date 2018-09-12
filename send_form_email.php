<html lang="en">
<head>
   <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125112334-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125112334-3');
</script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Welcome to Rocket.Chip Web Solutions. Dublin-based web design and development company who specialise in creating websites for small and medium businesses">
    <meta name="keywords" content="Web design, web development, Dublin-based, affordable, Small business, responsive design, custom design">
    <title>Contact Us - Thank you</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,900" rel="stylesheet">
</head>
<body>
<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@rocketchipwebsolutions.ie";
    $email_subject = "Message from RocketChip Website";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['number']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['number']; // not required
    $message = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
 
 
  if(strlen($message) < 2) {
    $error_message .= 'The message you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "name: ".clean_string($name)."\n";
    $email_message .= "email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($number)."\n";
    $email_message .= "message: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 



<!-- javascript redirect or PhP redirect-->

<?php
 
}
?>
    <div class="ct-container">
        <div class="home-header contact-header">
            <a href="index.html" class="home-header-logo"> <img src="img/color_logo_transparent.png" alt="Logo" class="home-header-logo__img"></a>
             
             <ul class="home-header-main-nav ">
                    <li class="home-header-main-nav__item home"><a href="index.html" class="home-header-main-nav__link">Home</a></li>
                     <li class="home-header-main-nav__item do"><a href="index.html#whatWeDo" class="home-header-main-nav__link">What we do</a></li>
                     <li class="home-header-main-nav__item proj"><a href="#" class="home-header-main-nav__link">Projects</a></li>
                     <li class="home-header-main-nav__item about"><a href="index.html#aboutUs" class="home-header-main-nav__link">About us</a></li>
                     <li class="home-header-main-nav__item cont"><a href="contact.html" class="home-header-main-nav__link">Contact</a></li>
                     <li class="home-header-main-nav__item tog"><i class="fas fa-bars home-header-main-nav__icon"></i></li>

             </ul>
         </div>
        <div class="ct-banner">
                <h2 class="ct-banner-header"><span class="ct-banner-span">Contact</span> Rocket.Chip Web Solutions </h2>
                <p class="ct-banner-info"> Start a conversation with us today</p>
        </div>
        <div class="ct-contact-overlay1"></div>
        <div class="ct-contact-overlay2"></div>
        <div class="ct-contact">
                <h2 class="ct-contact-php-header">Thank you for contacting us</h2>
                <p class="ct-contact-php-para">A member of our team will be in touch with you shortly</p>
        </div>



        <footer class="footer-container">
            <div class="footer">
                <img src="img/color_logo_transparent.png" alt="Logo" class="logo-footer">
                    
                                    <ul class="footer-nav">
                                        <li class="footer-nav__item"><a href="#" class="footer-nav__link">What we do</a></li>
                                        <li class="footer-nav__item"><a href="#" class="footer-nav__link">Projects</a></li>
                                        <li class="footer-nav__item"><a href="#" class="footer-nav__link">About us</a></li>
                                        <li class="footer-nav__item"><a href="#" class="footer-nav__link">Contact</a></li>
                                    </ul>
                                    <div class="footer-social">
                                        <li class="footer-social__item"><a href="#" class="footer-social__link"><i class="fab fa-facebook footer-social__img"></i></a></li>
                                        <li class="footer-social__item"><a href="#" class="footer-social__link"><i class="fab fa-twitter footer-social__img"></i></a></li>
                                    </div>
                                    <div class="footer-company">
                                        &copy; 2018. Made with <span class="footer-company__span">&hearts;</span> by Rocket.Chip Web Solutions
                                    </div>
                                
            </div>
                                
        </footer>
    </div>
    


        <script src="main.js"></script>
</body>
</html>
