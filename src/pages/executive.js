import React from "react"
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: '../images/team/arnold.jpg',
        thumbnail: '../images/team/arnold.jpg',
        description: 'Tusingwire Arnold(Director)',
    },
    {
        original: '../images/team/jill.jpg',
        thumbnail: '../images/team/jill.jpg',
        description: 'Kankunda Jill Elizabeth(Director)',
    },  
    {
        original: '../images/team/benja.jpg',
        thumbnail: '../images/team/benja.jpg',
        description: 'Chelimo Benjamin(Structual Engineer)',
    },
    {
        original: '../images/team/isabel.jpg',
        thumbnail: '../images/team/isabel.jpg',
        description: 'Ankunda Isabel(Finance Manager)',
    },
    {
        original: '../images/team/phil.jpg',
        thumbnail: '../images/team/phil.jpg',
        description: 'Niwemugabi Philbert(Site Engineer)',
    },
];

const Executive = () => {
    return (
        <section>

            <ImageGallery items={images} />
        </section>
    )
}

export default Executive