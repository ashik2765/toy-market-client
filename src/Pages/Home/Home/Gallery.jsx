import IMG1 from '../../../assets/doll-1.jpg'
import IMG2 from '../../../assets/doll-2.jpg'
import IMG3 from '../../../assets/doll-3.jpg'
import IMG4 from '../../../assets/doll-5.jpg'
import IMG5 from '../../../assets/doll-6.jpg'
import IMG6 from '../../../assets/doll-7.jpg'
import IMG7 from '../../../assets/doll-8.webp'
import IMG8 from '../../../assets/doll-9.jpg'
import IMG9 from '../../../assets/doll-10.webp'

const Gallery = () => {
    const images = [
        IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG7,
        IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG7, IMG7, IMG7,
        IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG7,
        IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG7, IMG7, IMG7,
        IMG7, IMG8,
        // Add more image URLs as needed
    ];
    return (
        <di>
            <h2 className="text-center text-3xl font-bold py-5 my-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-lg shadow-lg">
                At a glance
            </h2>
            <div className="flex flex-wrap justify-center">

                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-40 h-40 object-cover m-2"
                    />
                ))}
            </div>
        </di>
    );
};

export default Gallery;