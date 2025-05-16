const container = $("#container");
const images = $(".images");

const Suivant = $("#Suivant");
const image1 = $("#image1");
const image2 = $("#image2");
const image3 = $("#image3");
positions(images);
let tour1 = true;
let tour2 = true;
let tour3 = true;
Suivant.on("click", () => {
    if (
        !image2.hasClass("back1") &&
        !image3.hasClass("suivant1") &&
        !image1.hasClass("switchr") &&
        tour1
    ) {
        removeC();
        image1.addClass("switchr");
        image2.addClass("back1");
        image3.addClass("suivant1");
        tour1 = false;
        tour2 = true;
    } else if (
        !image2.hasClass("switchr") &&
        !image3.hasClass("back1") &&
        !image1.hasClass("suivant1") &&
        tour2
    ) {
        removeC();
        image2.addClass("switchr");
        image3.addClass("back1");
        image1.addClass("suivant1");
        tour2 = false;
        tour3 = true;
    } else if (
        !image2.hasClass("suivant1") &&
        !image3.hasClass("switchr") &&
        !image1.hasClass("back1") &&
        tour3
    ) {
        removeC();
        image3.addClass("switchr");
        image1.addClass("back1");
        image2.addClass("suivant1");
        tour1 = true;
        tour3 = false;
    }
});



function positions(images) {
    for (let index = 0; index < images.length; index++) {
        const image = images[index];
        const t = $(image).css("transform");
        switch (t) {
            case "matrix(1, 0, 0, 1, -400, 0)":
                $(image).removeClass("after1");
                $(image).removeClass("infront");
                $(image).addClass("before1");
                break;
            case "matrix(1, 0, 0, 1, 400, 0)":
                $(image).removeClass("before1");
                $(image).removeClass("infront");
                $(image).addClass("after1");
                break;
            case "matrix(1, 0, 0, 1, 0, 0)":
                $(image).removeClass("after1");
                $(image).removeClass("before1");
                $(image).addClass("infront");
                break;
        }
    }
}

function removeC() {
    image2.removeClass("forward1 previous1 suivant1 switchr switchl back1 ");
    image3.removeClass("forward1 previous1 suivant1 switchr switchl back1 ");
    image1.removeClass("forward1 previous1 suivant1 switchr switchl back1 ");
}
