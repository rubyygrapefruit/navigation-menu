export const homepageUrl = "https://www.rubymlee.com/"

export const copy = {
    title: 'Hershey and Kiki',
    subtitle: 'null',
}

export const images = {
    'myLogo': { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714271640/logo_mhxgik.png', alt: "my-logo" },
    'heroImg': { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714271650/IMG_5087_htqtat.jpg', alt: "hero-img-of-dogs" }
}

export const menuData = [
    {
        name: 'Projects',
        id: 1,
        url: homepageUrl,
        submenus: [
            {
                name: 'Buzzed',
                id: 11,
                url: 'https://www.rubymlee.com/buzzed',
                subSubmenu: {
                    img: { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714272845/buzzed_front_page_2_vv7bxu.png', alt: "buzzed-image" },
                    info: 'Order drinks off of your phones at local bars & pubs',
                }
            },
            {
                name: 'Shop Cart',
                id: 12,
                url: 'https://www.rubymlee.com/shopcart',
                subSubmenu: {
                    img: { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714272874/Front_photo_ct0bel.png', alt: "shop-cart-image" },
                    info: 'Shop for groceries conveniently anywhere and anytime',
                }

            },
            {
                name: 'Flight App',
                id: 13,
                url: 'https://www.rubymlee.com/whens-my-flight',
                subSubmenu: {
                    img: { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714273028/Front_cover_Airplane_vki2ai.png', alt: "flight-image" },
                    info: 'An app to handle and coordinate all your flight info',
                }
            },
            {
                name: 'Music Jam',
                id: 14,
                url: 'https://www.rubymlee.com/spotifys-new-feature',
                subSubmenu: {
                    img: { src: 'https://res.cloudinary.com/dmqzfty0c/image/upload/v1714432894/front_page_wj3txa.png', alt: "new-feature-jam-image" },
                    info: 'Create a jam session with friends!'
                }
            },
        ]
    },
    {
        name: 'Artwork',
        id: 2,
        url: 'https://www.rubymlee.com/hobbies-artwork',
        submenus: [
            {
                name: 'Drawings',
                id: 21,
                url: 'https://www.rubymlee.com/hobbies-artwork',
            },
        ]
    },
    {
        name: 'About',
        id: 3,
        url: 'https://www.rubymlee.com/about',
        submenus: [
            {
                name: 'LinkedIn',
                id: 41,
                url: 'https://www.linkedin.com/in/rubymlee/',
            },
            {
                name: 'Github',
                id: 42,
                url: 'https://github.com/rubyygrapefruit',
            },
            {
                name: 'Email me',
                id: 43,
                url: 'mailto:rubymleee@gmail.com',
            }
        ]
    },
]





