<?php
  function import_main () {
    $ref = array_pop(array_keys($_GET))  . '.html';
    $article = file_exists($ref) ? $ref : 'index.html';
    $content = file_get_contents($article);
    echo $content;
  }

  function placeholder_today () {
    return date_format(date_create(), 'd/m/Y');
  }
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>logify</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
    <style>
      * {
        font-family: 'JetBrains Mono', monospace !important;
      }
      body {
        background: linear-gradient(to right, white 0%, white 50%, white 50%, white 100%);
      }
    </style>
  </head>
  <body>

    <main class="container">
      <div class="row align-items-start flex-nowrap" style="height:inherit!important;">

      <section class="col-4 position-sticky top-0 vh-100 ms-2 me-2 pt-5">
        <h1 class="display-4 text-lowercase text-center">8itenta&5</h1>

<nav class="nav flex-column w-50 m-auto">
    <a class="nav-link" href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"><i class="bi bi-clock-history me-2"></i>Registrar</a>
</nav>

      </section>

      <article class="ps-5 col-8 flex-shrink flex-grow position-relative pt-5 pb-5 border-start border-light-subtle" style="background-color:white;min-height:100vh!important;">
<?php
  import_main();
?>
      </article>

      </div>
    </main>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-body">

<form>
    <fieldset>
        <legend class="mb-3">Atividade</legend>
        <div class="mb-3">
          <label for="field-date" class="form-label">Data</label>
          <input type="text" class="form-control" id="field-date" readonly value="<?php echo placeholder_today(); ?>">
        </div>
        <div class="mb-3">
          <label for="field-minute" class="form-label">Minutos</label>
          <input type="text" class="form-control" id="field-minute" placeholder="30">
        </div>
        <div class="mb-3">
          <label for="field-hashtags" class="form-label">Hashtags</label>
          <textarea class="form-control" id="field-hashtags" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-end me-2  pt-3 mt-3">
          <button type="button" class="btn btn-outline-dark me-2" data-bs-dismiss="offcanvas" aria-label="Close">Cancelar</button>
          <button type="button" class="btn btn-dark">Registrar</button>
        </div>
    </fieldset>
</form>

  </div>
</div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"></script>

    <script src="u.js"></script>
    <script src="domain.js"></script>
    <script src="model.js"></script>
    <script src="view.js"></script>
    <script src="service.js"></script>
    <script src="controller.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function (e) {
            EventsController.init();
            RegisterController.init();
        });
    </script>

  </body>
</html>
