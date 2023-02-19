
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
<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $selectedNumbers = array_filter($_POST["selectedNumbers"]);
    }
?>
    <div id="container">
        <h1 style="font-size:50px;">Drawing</h1>
        <h3 style="margin-top: 70px;">Numbers played:</h3>
        <?php foreach($selectedNumbers as $num){ ?>
            <div class="num"><?=$num?></div>
        <?php } ?>
        <h3 style="margin-top: 70px;">Draw result:</h3>
        <?php foreach($selectedNumbers as $num){ ?>
            <div class="num"><?=$num?></div>
        <?php } ?>
        <h1 style="margin-top: 50px;">Nice try, you got x correct number</h1>
        <a href="index.php"><button><span>Try again</span></button></a>
    </div>
</body>
</html>