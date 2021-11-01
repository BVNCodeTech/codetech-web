![CodeTech Logo](https://github.com/sortedcord/codetech/blob/master/docs/assets/img/CODETECH.svg)

# Site Documentation

## HTML Structure

The html template uses Bootstrap v4.0.0 with HTML5 tags.It's got a responisve layout with 4 column Support column. All of the information in content area is nested within a class etc..

```html

 <!-- Start Preload -->
    <div class="preloader">
    </div>
    <div class="block-1"></div>
    <div class="block-2"></div>
    <div class="logo-load">
        <img src="assets/img/abbrvlogo.svg" alt="">
    </div>
    <div class="logo-load spinning"></div>
    <div class="over-all"></div>
    <!-- End Preload -->

    <!-- Start Header -->
    <header>
    </header>
    <!-- End Header -->


    <!-- Start Content -->
    <div id="spiral">

        <!-- Header -->
        <div class="scrolls">
            <img draggable="false" src="assets/img/sroll.svg" alt="scroll">
        </div>
        <div class="main-head">
        </div>

        <!-- About -->
        <section class="about">
        </section>


        <!-- Gallery THing -->
        <section class="folio-content">
        </section>


        <!-- Footer -->
        <div class="footer">
        </div>

    </div>
    <!-- End Content -->
```

## CSS Files and Structure

Mainly 3 main CSS files are used:
- `main.css`
- `responsive.css`
- `plugin.css`