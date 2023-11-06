//filter JS
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if (value == 'all'){
        $(".post-box").show("1000");
        }
        else{
        $(".post-box")
            .not("." + value)
            .hide("1000");
        $('.post-box')
            .filter("." + value)
            .show("1000");
        }
    });

    //add active to btn
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
    });

    //header background change on scroll
    let header = document.querySelector("header");

    window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
    });

    
/* fungsi search button */
const searchButton = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")


searchButton.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(searchInput.value)

    const data = await fetchData(searchInput.value)
    renderMain(data.articles)
})

async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
}
