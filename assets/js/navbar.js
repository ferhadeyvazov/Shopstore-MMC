const nav = document.getElementById("nav");

nav.innerHTML = `
        <div class="container nav__container">
            <div class="nav--burger--logo">
                <label class="nav--burger">
                    <input type="checkbox" aria-label="Katalog">
                    <div class="checkmark">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <a href="/"><img src="./assets/img/Logo/logo_shopstore.svg" alt="LOGO" class="logo"></a>

                <button aria-label="kataloq" class="product--catalog">
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <p class="text">
                        Məhsul kataloqu <i class="fa-solid fa-chevron-down"></i>
                    </p>
                </button>
            </div>

            <div class="section__catalog" id="section__catalog">
                <div class="catalog__title">
                    <h3>Məhsulların kataloqu</h3>
                    <button onclick="cancelCatalog()" class="catalog">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="catalog">
                    <ul class="catalog__list">
                        <!-- <li class="catalog__list--link">
                                <div>
                                    <i class="fa-solid fa-file-invoice"></i>
                                    <p>Smartfonlar</p>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </li>
                            <li class="catalog__list--link">
                                <div>
                                    <i class="fa-solid fa-file-invoice"></i>
                                    <p>Aksesuarlar</p>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </li>
                            <li class="catalog__list--link">
                                <div>
                                    <i class="fa-solid fa-file-invoice"></i>
                                    <p>Aksesuarlar</p>
                                </div>
                                <i class="kecid fa-solid fa-angle-right"></i>
                            </li> -->
                    </ul>
                </div>
            </div>

            <div class="section__catalog-alt" id="section__catalog-alt">
                <div class="catalog__title">
                    <div class="catalog-alt--title">
                        <button onclick="cancelCatalogAlt()" class="cancel__catalog-alt">
                            <i class="fa-solid fa-arrow-left-long"></i>
                        </button>
                        <h3>Smartfonlar</h3>
                    </div>
                    <button onclick="cancelCatalog()" class="catalog">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="catalog">
                    <ul class="catalog__list altCatalog__list">
                        <!-- <li class="catalog__list--link">
                            <div>
                                <i class="fa-solid fa-file-invoice"></i>
                                <p>Smartfonlar</p>
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                        </li>
                        <li class="catalog__list--link">
                            <div>
                                <i class="fa-solid fa-file-invoice"></i>
                                <p>Aksesuarlar</p>
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                        </li> -->

                    </ul>
                </div>
            </div>


            <div class="search__section" id="search__section">
                <div class="container">
                    <div class="search__back">
                        <i class="fa-solid fa-x" id="faBack"></i>
                    </div>
                    <div class="search__container">
                        <input placeholder="Search the internet..." type="text" name="text" class="input">
                        <a href="#" class="search--input" aria-label="Read more about Seminole tax hike">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                </div>
            </div>

            <form class="form">
                <input type="search" name="" id="searchBtn" placeholder="Iphone 12 pro max silicone case baseus">
                <button aria-label="search__btn" class="search__btn" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            <div class="nav--tools">
                <ul>
                    <li>
                        <i class="fa-solid fa-magnifying-glass" id="faSearch"></i>
                    </li>
                    <li>
                        <span>Müqayisə</span>
                        <i class="fa-solid fa-scale-balanced"></i>

                    </li>
                    <li id="secilmisler">
                        <span>Seçilmişlər</span>
                        <i class="fa-regular fa-heart"></i>
                        <!-- <p id="heart_say"></p> -->
                    </li>
                    <li>
                        <span>Səbət</span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
        </div>

`;