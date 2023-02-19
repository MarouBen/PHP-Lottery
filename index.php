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
    <div id="cont">
        <h1 style="font-size:50px;margin-bottom:0px;">Lottery</h1>
        <h5 style="display: block; margin-bottom:34px;margin-top:5px;">Choose 7 numbers</h5>
        <?php for($i=1;$i<=49;$i++){ ?>
            <div class="num"><?=$i?></div>
        <?php } ?>
        <button><span>Confirm</span></button>
    </div>
</body>
</html>