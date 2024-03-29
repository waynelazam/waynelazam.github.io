class customHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!-- ======= Mobile nav toggle button ======= -->
  <i id="mobile-hamburger" class="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/profile-img.webp" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="/">Wayne Marr B. Lazam</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="mailto:wayne.lazam@gmail.com" class="google"><i class="bx bxl-google"></i></a>
          <a href="https://www.linkedin.com/in/waynelazam/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" id="navbarlink1" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <!-- <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li> -->
          <li><a href="#resume" id="navbarlink2" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Curriculum Vitae</span></a></li>
          <li><a href="#portfolio" id="navbarlink3" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <!-- <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li> -->
          <li><a href="#contact" id="navbarlink4" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->
        `
    }
}

customElements.define('custom-header', customHeader)