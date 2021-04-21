import "../App.css"

const AdviceCard = ({advice, fetch}) => {
    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button
                    className="button focus:outline-none"
                    onClick={fetch}
                >
                    <span>GIVE ME AN ADVICE!</span>
                </button>
                <span>
                    Advice may take 2 - 3 consecutive click sometimes to load.
                </span>
            </div>
        </div>
    );
};

export default AdviceCard;
