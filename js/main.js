$(document).ready(() => {
    // Select Theme
    let theme = $('#theme')
    let green = theme.attr("href", "css/themes/theme-green.css");
    let red = theme.attr("href", "css/themes/theme-red.css");
    let blue = theme.attr("href", "css/themes/theme-blue.css");

    $('#theme-green').click(function () {
        theme.attr('href', 'css/themes/theme-green.css')
        localStorage.setItem("green", green)

        localStorage.removeItem("red")
        localStorage.removeItem("blue")
    })
    $('#theme-red').click(function () {
        theme.attr('href', 'css/themes/theme-red.css')
        localStorage.setItem("red", red)

        localStorage.removeItem("green")
        localStorage.removeItem("blue")
    })
    $('#theme-blue').click(function () {
        theme.attr('href', 'css/themes/theme-blue.css')
        localStorage.setItem("blue", blue)

        localStorage.removeItem("green")
        localStorage.removeItem("red")
    })

    if (localStorage.getItem("blue") != null) {
        theme.attr("href", "css/themes/theme-blue.css");
    } else if (localStorage.getItem("red") != null) {
        theme.attr("href", "css/themes/theme-red.css")
    } else {
        theme.attr("href", "css/themes/theme-green.css");
    }

    // Button Go-Up
    $('.go-up').click(function (event) {
        event.preventDefault()

        $('html, body').animate({
            scrollTop: 250
        }, 750)

        return false
    })

})