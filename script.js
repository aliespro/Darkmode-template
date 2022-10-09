var checkbox = document.getElementById("input");

function check() {
    if (checkbox.checked == false) {
        document.body.style.background = "#fdfdfd ";
        document.getElementById("phone").style.background = "#fbfbfb ";
        document.getElementById("lable-checkbox").style.background = "#e3e3e5 ";
        document.getElementById("button-choose").style.background = "#fcfcfc ";
        document.getElementById("button-choose").style.boxShadow = "2px 2px 10px #e2e2e2 ";
        document.getElementById("light").style.color = "#14141a ";
        document.getElementById("dark").style.color = "#848487 ";
        document.getElementById("p-h").style.color = "#14141a ";
        document.getElementById("p-p").style.color = "#14141a ";
        document.getElementById("circle").style.background = "linear-gradient(243deg, #fd7616, #fd4949) ";
        document.getElementById("sun").style.left = "0px";
        document.getElementById("phone").style.boxShadow = "6px 6px 12px #7676764f, -6px -6px 12px #7676764f";
        document.getElementById("moon").style.background = " linear-gradient(243deg, #fd7616, #fd4949)";
        document.getElementById("sun").style.background = " linear-gradient(243deg, #fd7616, #fd4949)";
        document.getElementById("header").style.color = "#222 ";
        document.getElementById("header").style.opacity = "30%";

    }
    if (checkbox.checked == true) {
        document.body.style.background = "#201c27";
        document.getElementById("phone").style.background = "#201c27 ";
        document.getElementById("lable-checkbox").style.background = "#1a1721 ";
        document.getElementById("button-choose").style.background = "#2c2835 ";
        document.getElementById("button-choose").style.boxShadow = "6px 6px 6px #1a1721 ";
        document.getElementById("light").style.color = "#63606a ";
        document.getElementById("dark").style.color = "#b2afb6 ";
        document.getElementById("p-h").style.color = "#d6d4d9 ";
        document.getElementById("p-p").style.color = "#d6d4d9 ";
        document.getElementById("header").style.color = "#fff ";
        document.getElementById("sun").style.left = "0px";
        document.getElementById("phone").style.boxShadow = "-2px 6px 12px #2b292975, -2px -6px 12px #2b292975";
        document.getElementById("moon").style.background = "linear-gradient(45deg, rgb(129, 110, 253), rgb(133, 178, 253))";
        document.getElementById("circle").style.background = "linear-gradient(45deg, #816efd, #85b2fd) ";


        animte_moon();
    }
    //  //  //  //  //  //  //  //  //  //  //  Animation for circle
    function anmite() {
        let pos = 40;
        const id = setInterval(fram, 3);

        function fram() {
            if (pos == 100) {
                clearInterval(id);
            } else {
                pos++;
                document.getElementById("circle").style.opacity = pos + "%";
                document.body.style.opacity = pos + "%";


            }
        }
    }
    anmite();

    /////////////////////////////////////////v/ Animation for cheange moon to sun
    function animte_moon() {

        const time = setInterval(fram_moon, 5);
        let size_moon = 20;
        let size_sun = 70;

        function fram_moon() {


            if (checkbox.checked == true) {
                if (size_moon == 78) {
                    clearInterval(size_moon);
                } else {
                    size_moon++;
                    document.getElementById("sun").style.background = "#201c27";
                    document.getElementById("sun").style.width = size_moon + "px";
                    document.getElementById("sun").style.height = size_moon + "px";

                }

            } else if (checkbox.checked == false) {
                if (size_sun == 0) {
                    clearInterval(size_sun);
                } else {

                    size_sun--;
                    document.getElementById("sun").style.background = "#fbfbfb";
                    document.getElementById("sun").style.width = size_sun + "px";
                    document.getElementById("sun").style.height = size_sun + "px";


                }

            }
        }
    }

}

check();