$(document).ready(() => {
    // Reloj
    setInterval(function () {
        let reloj = moment().format('hh:mm:ss a')
        $('#reloj').html(reloj)
    }, 1000)
})