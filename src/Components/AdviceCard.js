import "../App.css"
import Footer from './Footer'

// Functional component
const AdviceCard = ({advice, fetch}) => { // Take two destructured props i.e advice (string) and fetch (function)
    return (
        <div className="app flex-col">
            <div className="card">
                <h1 className="heading">{advice}</h1> {/* Advice is string is rendered on the initial load of this website because of componentDidMount() method and advice string is inserted into the DOM*/}
                <button
                    className="button focus:outline-none"
                    onClick={fetch} // fetchAdvice in app.js is invoked everytime button is clicked
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
