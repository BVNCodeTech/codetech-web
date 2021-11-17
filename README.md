<br>
<h3 align="center"><img src="https://github.com/sortedcord/codetech/blob/master/docs/assets/img/web.png" align="center"></h1>
<br>

# Site Documentation

## HTML Structure

The html template uses Bootstrap v4.0.0 with HTML5 tags.It's got a responisve layout with 4 column Support column. All of the information in content area is nested within a class etc..

```html
<!-- Start Preload -->
<div class="preloader"></div>
<div class="block-1"></div>
<div class="block-2"></div>
<div class="logo-load">
  <img src="assets/img/abbrvlogo.svg" alt="" />
</div>
<div class="logo-load spinning"></div>
<div class="over-all"></div>
<!-- End Preload -->

<!-- Start Header -->
<header></header>
<!-- End Header -->

<!-- Start Content -->
<div id="spiral">
  <!-- Header -->
  <div class="scrolls">
    <img draggable="false" src="assets/img/sroll.svg" alt="scroll" />
  </div>
  <div class="main-head"></div>

  <!-- About -->
  <section class="about"></section>

  <!-- Gallery THing -->
  <section class="folio-content"></section>

  <!-- Footer -->
  <div class="footer"></div>
</div>
<!-- End Content -->
```

## CSS Files and Structure

Mainly 3 main CSS files are used:

- [`main.css`](docs/assets/css/main.css) Contains the main style with respective sections. There are page-specific sections that only apply to particular layouts as well as global section which apply styles to all pages.
- [`responsive.css`](docs/assets/css/responsive.css) - Media queries for smaller viewports
- [`plugin.css`](docs/assets/css/plugin.css) - Bootstrap Base Library

## Sources and Credits

<i>Fonts Used int the template are google fonts, you can find theme on Google Fonts API</i>

#### Fonts Used are :

- Poppins

#### Sliders Used Are :

- [Swiper js](https://idangero.us/swiper/)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html)

#### Animation Used Are :

- [TweenMax GSAP](https://greensock.com/tweenmax)

#### Also thanks to-

- [Lorem Picsum](https://picsum.photos/) for providing placeholder images.
- Numerous codepens as well as portfolio site review videos on youtube :P The list includes them but are not limited to:
  - [Custom Cursor](https://codepen.io/hannes-v/pen/JjyvmjJ)
  - [Traversy Media's Smooth Scrolling Landing Page Tutorial](https://www.youtube.com/watch?v=y9nlfqT4s9s)
  - [Parallax Effects](https://www.youtube.com/watch?v=JttTcnidSdQ)
  - [Mouse-Driven Carousel](https://codepen.io/tjezidzic/pen/BMBVbE)
  - [CSS Slideshow](https://codepen.io/bcarvalho/pen/WXmwBq)

And Thanks to these contributors who maintain the website

| ![](https://github.com/sortedcord.png?size=50)  |  ![](https://github.com/Pancham1603.png?size=50)  |
| :---------------------------------------------: | :-----------------------------------------------: |
| [sortedcord](https://www.github.com/sortedcord) | [Pancham1603](https://www.github.com/pancham1603) |
