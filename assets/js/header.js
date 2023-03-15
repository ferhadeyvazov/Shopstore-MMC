const header = document.querySelector(".header");

header.innerHTML = `
        <div class="container header__container">
            <div class="header--info">
                <a href="#">Korporativ satış</a>
                <a href="#">Haqqımızda</a>
                <a href="#">Mağazalarımız</a>
                <a href="#">Texniki dəstək</a>
                <a href="#">Çatdırılma və ödəniş</a>
            </div>
            
            <div class="header--user--sign">
                <a href="tel:+994(*6777)">
                    <i class="fa-solid fa-phone"></i>*6777
                </a>
                <select class="header--language">
                    <option value="az">
                        AZ
                    </option>
                    <option value="en">
                        EN
                    </option>
                    <option value="rus">
                        РУС
                    </option>
                </select>
                <a href="#">
                    <i class="fa-regular fa-user"></i>
                    <span>Qeydiyyat | Giriş</span>
                </a>
            </div>

        </div>


`;