import "../App.css"
import Footer from './Footer'

const AdviceCard = ({advice, fetch}) => {
    return (
        <div className="app flex-col">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button
                    className="button focus:outline-none"
                    onClick={fetch}
                >
                    <span>GIVE ME AN ADVICE!</span>
                </button>
                <span>
                    Advice may take <strong>2 - 3</strong> consecutive click sometimes to load.
                </span>
            </div>
            <Footer />
        </div>
    );
};

export default AdviceCard;
