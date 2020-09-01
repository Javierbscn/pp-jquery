$(document).ready(() => {
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
})