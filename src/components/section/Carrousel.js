
import { images, section4Title } from '../../profile'
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {

    const pictures = [
        'https://res.cloudinary.com/be-chef/image/upload/v1672792194/qgyaajcpvwuxca7qdla9.jpg',
        'https://res.cloudinary.com/be-chef/image/upload/v1672792186/ft3cbqwcx61x3ismxjpr.jpg',
        'https://res.cloudinary.com/be-chef/image/upload/v1670860710/nkd7rfw3li2ltk9ui3kn.jpg',
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
                        className="d-block w-100 row photo img-pro"
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
                        className="d-block w-100 row photo img-pro"
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
                        className="d-block w-100 row photo img-pro"
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
                        className="d-block w-100 row photo img-pro"
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