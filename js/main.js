$(document).ready(() => {

    // Slider
    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        auto: true,
        pause: 3000
    });

    // Post
    let posts = [
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        },
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        },
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        },
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        },
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        },
        {
            title: 'Título del Artículo',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquid sequi asperiores commodi eos aliquam quidem, reprehenderit iste ea laudantium voluptatum placeat temporibus, praesentium unde velit distinctio et, perspiciatis est explicabo beatae soluta porro. Tempora veniam nesciunt, facere incidunt voluptas explicabo culpa doloribus saepe dolor delectus voluptates ipsam necessitatibus. Animi recusandae assumenda esse culpa sit deleniti ratione veritatis laudantium quod odio illo est unde fugit veniam sed porro, amet, ipsa reprehenderit totam, dolor eius. Itaque.'
        }
    ]

    posts.forEach((element) => {
        let post = `
        <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>${element.content}</p>
            <a href="#" class="read-more">Leer más</a>
        </article>
        `
        $('#posts').append(post)
    })

    // Select Theme
    let theme = $('#theme')

    // let green = theme.attr("href", "css/themes/theme-green.css");
    // let blue = theme.attr("href", "css/themes/theme-blue.css");
    // let red = theme.attr("href", "css/themes/theme-red.css");

    $('#theme-green').click(function () {
        theme.attr('href', 'css/themes/theme-green.css')

        // localStorage.setItem("green", green)

        // localStorage.removeItem("red")
        // localStorage.removeItem("blue")
    })
    $('#theme-red').click(function () {
        theme.attr('href', 'css/themes/theme-red.css')

        // localStorage.setItem("red", red)

        // localStorage.removeItem("green")
        // localStorage.removeItem("blue")
    })
    $('#theme-blue').click(function () {
        theme.attr('href', 'css/themes/theme-blue.css')

        // localStorage.setItem("blue", blue)

        // localStorage.removeItem("green")
        // localStorage.removeItem("red")
    })

    // if (localStorage.getItem("blue") != null) {
    //     theme.attr("href", "css/themes/theme-blue.css");
    // } else if (localStorage.getItem("red") != null) {
    //     theme.attr("href", "css/themes/theme-red.css")
    // } else {
    //     theme.attr("href", "css/themes/theme-green.css");
    // }

    $('.to-up').click(function(event){
        event.preventDefault()

        $('html, body').animate({
            scrollTop: 500
        }, 750)

        return false
    })

})