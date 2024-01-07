const searchInput = document.querySelector("#search-input");

const searchButton = document.querySelector("#search-icon")

searchInput.addEventListener("keydown", function(event) {

    if(event.code === "Enter") {
        search();
    }
});

searchButton.addEventListener("click", function(event) {
    search();
})

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1RXQR_enUS1090US1090&oq=" + input + "&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzU3N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
};