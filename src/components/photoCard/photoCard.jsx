import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import FilterList from "../FilterList/FilterList";
import "./photoCard.scss";

export default function PhotoCard({ photos, selectTag }) {

    const photoFiltered = selectTag ? photos.filter((photo) => photo.tags.includes(selectTag)) : photos;

    return (
        <div className="photos">
            {photoFiltered.map((photo) => (
                <div key={photo.id} className="photos__card">
                    <Link to={`photo/${photo.id}`}> <img className="photos__card--img" src={photo.photo} /> </Link>
                    <div className="photos__card--container">
                        <div className="photos__card--photographer">
                            {photo.photographer}
                        </div>
                        {photo.tags.map((tag) => (
                            <button className="photos__card--tags">{tag}</button>
                        ))}   
                    </div>
                </div>
            ))}
        </div>
    );
}


