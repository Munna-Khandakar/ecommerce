'use client';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
};

const slideImages = [
    {url: 'https://static.oxinis.com/healthmug/image/asset/3749-lu.webp'},
    {url: 'https://static.oxinis.com/healthmug/image/asset/3745-ex.webp'},
    {url: 'https://static.oxinis.com/healthmug/image/asset/3750-kk.webp'},
    {url: 'https://static.oxinis.com/healthmug/image/asset/3744-hb.webp'},
];

export const Promo = () => {

    return (
        <section className="container">
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div
                                className="h-[100px] md:h-[300px]"
                                style={{...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    );
};