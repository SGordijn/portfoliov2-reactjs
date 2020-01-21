<?php
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $from = 'stephangordijn@gmail.com';
  $subject = $_POST['subject'];

  // $from = 'From: Portfolio Contact';
  // $to = 'stephangordijn@gmail.com';
  $spam = $_POST['spam'];
  //
  $body = "From: $fname $lname\n E-Mail: $email\n Message:\n $message";
  $to = "stephangordijn@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$subject,$body,$headers);
  //
  // if(isset($_POST['submit'])) {
  //   if($fname != '' && $lname != '' && $email != '' && $subject != '' && $message != '') {
  //       if($spam == '4') {
  //           if (mail ($to, $subject, $body, $from)) {
	//         echo "<p>Your message has been sent!</p>";
	//     }
  //     else {
	//         echo "<p>Something went wrong, go back and try again!</p>";
  //       }
	//    }
  //     elseif(isset($_POST['submit']) && $spam != '4') {
  //   	    echo "<p>You answered the anti-spam question incorrectly!</p>";
  //   	}
  //   }
  //   else {
  //     echo "<p>You need to fill in all required fields!!</p>";
  //   }
  // }

  function IsInjected($str)
  {
      $injections = array('(\n+)',
             '(\r+)',
             '(\t+)',
             '(%0A+)',
             '(%0D+)',
             '(%08+)',
             '(%09+)'
             );

      $inject = join('|', $injections);
      $inject = "/$inject/i";

      if(preg_match($inject,$str))
      {
        return true;
      }
      else
      {
        return false;
      }
  }

  if(IsInjected($email))
  {
      echo "Bad email value!";
      exit;
  }
?>
