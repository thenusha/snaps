
import photos from "../../data/photos.json";
import { useState } from "react";
import FilterList from "../FilterList/FilterList";
import "./photoCard.scss";

export default function PhotoCard({ selectTag }) {

    const photoFiltered = selectTag ? photos.filter((photo) => photo.tags.includes(selectTag)) : photos;

    return (
        <div className="photos">
            {photoFiltered.map((photo) => (
                <div key={photo.id} className="photos__card">
                    <img className="photos__card--img" src={photo.photo} />
                    <div className="photos__card--photographer">
                        {photo.photographer}
                    </div>
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


