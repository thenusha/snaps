import "./DetailsPageCard.scss"

export default function DetailsPageCard({ photos }) {
    return(
        <div className="card">
            <img className="card__img" src={photos.photo} alt="" />
            <div className="card__container">
                {photos.tags.map((tag, index) => (
                    <button className="card__tags" key={index}>{tag}</button>
                    ))}
                    <div className="card__info">
                        <div className="card__info--wrapper">
                            <div className="card__info--img">
                                <img className="card__info--like" src="../../src/assets/images/Like_Outline.svg" alt="" />
                                {photos.likes} Likes</div>
                            <div className="card__info--date">{new Date(photos.timestamp).toLocaleDateString()}</div>
                        </div>
                        <div className="card__info--photographer">Photo by {photos.photographer}</div>
                    </div>
            </div>
        </div>
        );
}