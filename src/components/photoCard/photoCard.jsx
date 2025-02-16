// const card = () => {
//     return (
//         <section className="photocard">

//         </section>
//     )
// }
import photos from "../../data/photos.json";

export default function PhotoCard({}) {
    console.log(photos);
    return (
        <div>
            {photos.map((photo) => (
                <img src={photo.photo} />
            ))}
        </div>
    );
}


//.map through photos array 