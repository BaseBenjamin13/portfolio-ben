import React from 'react';

const ProjectData = [
    {
        title: 'BlackJack',
        des: 'BlackJack is a card game. The goal of blackjack is to get 21 but if you over 21 you lose, you can win by getting closer to 21 then the dealer.',
        bulls: [
            'Utilized Javascript for the logic behind the game and dom manipulation to have live feedback, made in 2 weeks.',
            'Created Black Jack with a desktop first approach and styled using Styled-Components and CSS3 with flexbox layouts.'
        ],
        img: 'https://i.imgur.com/WADvHYc.jpg',
        link: 'https://basebenjamin13.github.io/Blackjack/',
        show: false
    },
    {
        title: 'Star Wars Social',
        des: 'Star Wars Social - Where all star wars fans come to unite. All star wars fans big and small can come to Star Wars Social to talk about, like, review and make favorites of all movies, shows, games, and make a watch/play list for later.',
        bulls: [
            'in API Development, made RESTful JSON API fetch calls to an Express, MongoDB, Node backend handling all create, read, update, delete (CRUD), and tested all backend routes during development using Postman.',
            'Used Mongoose, and design patterns to define 4 JSON schemas for MongoDB collections.',
            'Utilized CSS for style and grid template for layout. Bootstrap for navbar.',
            'Used passport, express-session, and web architecture skills to temporarily keep users logged in until logout.'
        ],
        img: 'https://i.imgur.com/NdPWO86.jpg',
        link: 'https://starwars-social.herokuapp.com/movies',
        show: false
    },
    {
        title: 'Jelly Jam',
        des: "Group project: App that allows you to find music for free, using Spotify's music API ",
        bulls: [
            "Leveraged React, Express, MongoDB, Node.js, and Spotify's API.",
            "I Made the client-side and server-side of login/register pages, create playlists/library, carousels, with Spotify's API.",
        ],
        img: 'https://i.imgur.com/JWCl2rL.jpg',
        link: 'https://jellyjam.netlify.app',
        show: false
    }
]

export default ProjectData
