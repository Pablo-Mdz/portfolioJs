
import { images, section4Title } from '../../profile'
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/carrousel.bootstrap.css'

function ImageSlider() {

    const pictures = [
        'https://replicate.delivery/mgxm/8b4d747d-feca-477d-8069-ee4d5f89ad8e/a_high_detail_shot_of_a_cat_wearing_a_suit_realism_8k_-n_9_.png',
        'https://res.cloudinary.com/be-chef/image/upload/v1672792186/ft3cbqwcx61x3ismxjpr.jpg',
        'https://r2.stablediffusionweb.com/images/stable-diffusion-demo-2.webp',
        'https://res.cloudinary.com/be-chef/image/upload/v1672792259/htq31rmcczqwo0lyvoqf.jpg',
    ];

    return (
        <>
            <div className="pp-head-line mx-auto text-center">
                <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
            </div>

            <Carousel fade>
                <Carousel.Item>
                    {/* <div className={`img-pro ${id}`}></div> */}
                    <img
                        className="d-block w-100 row photo "
                        src={pictures[0]}
                        alt="First slide"
                    />
                    {/* <h3>{name}</h3> */}
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 row photo "
                        src={pictures[1]}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 row photo "
                        src={pictures[2]}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 row photo "
                        src={pictures[3]}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>4 slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default ImageSlider;