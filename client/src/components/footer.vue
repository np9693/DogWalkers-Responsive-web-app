<template>

    <footer>
      <div class="d-flex flex-column h-100">
    <!-- FOOTER -->
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <a class="brand" href="/">
                      <img src="../assets/2.png" style="width:100px; height:100px;">
                    </a>
                    <p class="small text-muted">&copy; 2021 Copyrights. All rights reserved | Designed and made with ♡ by Group 22</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-dark mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-dark mb-3">Newsletter</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-primary" id="button-addon2" type="button"><i>✔</i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
    </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>

.footer-top {
    padding-top: 90px;
    padding-bottom: 90px;
    background-color: var(--white);
}

.footer-top a {
    color: var(--body);
}

.footer-top a:hover {
    color: #242933;
}

.footer-bottom {
    background-color: #E3DCFD;
}

/* ==========================================
    FOR DEMO PURPOSE
  ========================================== */
body {
  background: #F1F1E9;
}

.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover, a:focus {
  text-decoration: none;
}

.form-control {
  background: white;
  border-color: #545454;
}

.form-control:focus {
  background: white;
}

footer {
  background: #F1F1E9;
}

/* ==========================================
    CUSTOM UTILS CLASSES
  ========================================== */
  body, html {
    height: 100%;
  }

</style>
