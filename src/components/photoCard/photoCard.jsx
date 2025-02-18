// const card = () => {
//     return (
//         <section className="photocard">

//         </section>
//     )
// }
import photos from "../../data/photos.json";
import { useState } from "react";
import FilterList from "../FilterList/FilterList";
import "./photoCard.scss";

export default function PhotoCard({ selectTag }) {
    //console.log(photos);
    // const [filterClicked, setFilterClicked] = useState(true);
    // let photosToShow = [...photos];

    // if (!filterClicked) {
    //     photosToShow = photosToShow.filter((photo) => photo.tags.includes("New York"));
    //     console.log(photosToShow);
    // }

    const photoFiltered = selectTag ? photos.filter((photo) => photo.tags.includes(selectTag)) : photos;

    return (
        <div className="photos">
            {photoFiltered.map((photo) => (
                <div key={photo.id} className="photos__card">
                    <img className="photos__card--img" src={photo.photo} />
                    <div className="photos__card--container">
                        {photo.tags.map((tag) => (
                            <button className="photos__card--tags">{tag}</button>
                        ))}   
                    </div>
                </div>
            ))}
        </div>
    );
}


//.map through photos array 
{/* <div>
            {photos.map((photo) => (
                <img src={photo.photo} />
            ))}
        </div> */}

{/* {photo.tags.forEach(item => {
                            var button = document.createElement("button");
                            button.id = item;
                            var text = document.createTextNode(item);
                            button.appendChild(text);
                            container.appendChild(button);
                            }
                            )} */}