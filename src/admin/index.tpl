<!doctype html>
<html lang="en" ng-app="myApp">

<head>
  <meta charset="utf-8">
  <title>Angular CMS</title>
</head>

<body>

  <header>
    <nav-bar loggedUser="loggedUser"></nav-bar>
  </header>
  <div class="container">
    <message-flash></message-flash>
    <ng-view></ng-view>
  </div>
  <footer class="footer">Copyright 2014 Angular CMS</footer>
</body>

</html>
