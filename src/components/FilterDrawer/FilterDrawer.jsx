import "./FilterDrawer.scss";

export default function FilterDrawer({ handleClick }) {
    return (
        <button className="filter" onClick={handleClick} >Filters 
        <img className="filter__img" src="../../src/assets/images/Filter.svg" alt="" />
        </button>
    );
  }