<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $selectedNumbers = array_filter($_POST["selectedNumbers"]);
    $results = array();
    for ($i = 0; $i <= 6; $i++ ){
        $results[] = rand(1,49);
    }
    $pts = 0;
    $matched = array_intersect($selectedNumbers, $results);
    foreach ($selectedNumbers as $num) {
        $pts += in_array($num, $matched) ? 1 : 0;
    }}
?>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js" defer></script>
    <title>Lottery</title>
    
</head>
<body>
    <div id="container">
        <h1 style="font-size:50px;">Drawing</h1>

        <h3 style="margin-top: 70px;">Numbers played:</h3>
        <?php foreach($selectedNumbers as $num){ ?>
            <div class="num"><?=$num?></div>
        <?php } ?>

        <h3 style="margin-top: 70px;">Draw result:</h3>
        <?php foreach($results as $result){ ?>
            <div class="result result-animation" onclick="animateNumber(<?=$result?>)" >-</div>
        <?php } ?>
        
        <div id="final"><h1 style="margin-top: 50px;"><span style="color:#8c6db6;">Nice try</span>, you got <span style="color:#8c6db6;"><?=$pts?></span> correct numbers!</h1></div>
    
        <a href="index.php"><button><span>Try again</span></button></a>
    </div>
</body>
</html>