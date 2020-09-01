$(document).ready(() => {
    // Fake login
    $('#login form').submit(function () {
        let username = $('#name').val()

        localStorage.setItem('username', username)
    })

    let username = localStorage.getItem('username')
    let nameUser = $('.about h4')

    if (username !== null && username !== undefined) {
        nameUser.html('Bienvenido, ' + username)
        nameUser.append('<a href="#" id="logout">Cerrar sección</a><br><hr>')

        $('#login').hide()

        $('#logout').click(function () {
            localStorage.removeItem('username')
            location.reload()
        })
    }
})