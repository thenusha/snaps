import { useState } from "react";
//import filters from "../../data/tags.json";
import "./FilterList.scss";

export default function FilterList ( { filters, selectTag, setselectTag } ) {
    const toggleSelect = (tag) => {
        const newTag = selectTag === tag ? null : tag;
        setselectTag(newTag);
      };

    

    return (
        <div className="filters">
            <h2 className="filters__title">Filters</h2>
            {filters.map((tag, index) => (
                <button key={index} className= {`filters__button ${selectTag === tag ? "filters__button--selected" : ""}`}
                onClick={ () => 
                    toggleSelect(tag)}
                 >
                    {tag}
                </button>
            ))}
        </div>
    );
}
