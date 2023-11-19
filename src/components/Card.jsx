const Card = ({ image, selected, onClick }) => {


    return (
        <div className="card">
            <div className={selected && 'selected'}>
                {/* Card front */}
                <img alt="" src={image} className="card-face" />

                {/* Card back */}
                <img
                    alt=""
                    className="card-back"
                    src={'/assets/fireship.png'}
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default Card;