const mailLove = document.querySelector(".mail-love");
const containerFirst = document.querySelector(".container-first");
const quotes = document.querySelectorAll("main > p");
const footer = document.querySelector("footer");
const love = document.querySelector(".love");

console.log(love);
mailLove.addEventListener("click", () => {
    containerFirst.style.opacity = "0";
    containerFirst.style.zIndex = "0";
    containerFirst.style.animation = "lenyap 1s ease";
    for (let i = 0; i < quotes.length; i++) {
        console.log(quotes[i]);
        quotes[i].style.display = "block";
    }
    footer.style.display = "flex";
    AOS.init();
});

love.addEventListener("click", () => {
    Swal.fire({
        title: "Kirim keinginan kamu ke Apeepp",
        input: "text",
        width: 600,
        padding: "1.5em",
        color: "#716add",
        // background: "#fff url(/images/trees.png)",
        backdrop: `
            url("img/gif5.gif")
            rgba(0,0,123,0.4)
            center top
            no-repeat
        `,
        confirmButtonText: "Kirim",
        showCancelButton: true,
        timerProgressBar: true,
        allowOutsideClick: () => !Swal.isLoading(),
        showLoaderOnConfirm: true,
        preConfirm: (wish) => {
            if (!wish) {
                Swal.showValidationMessage(`Isi keinginannya dong sayanggg !!`);
                return true;
            }
            const url = `https://wa.me/628975836972?text=Halo%20Apeep%20Sayanggg,%20makasih%20ya%20udah%20bikin%20ini%20di%20hari%20anniversary%20kita,%20di%20hari%20spesial%20ini%20aku%20mau,%20${wish}`;
            window.open(url);
        },
    });
});
