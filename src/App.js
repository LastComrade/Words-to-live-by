import React from "react";
import axios from "axios";
// import Footer from "./Components/Footer";
import AdviceCard from "./Components/AdviceCard";

// Statefull class component to store advice from slip advice API
class App extends React.Component {
    // Initializing state with empty string as value to the advice key
    state = {
        advice: "",
    };

    // Everytime the new instance of a component is created or inserted into the DOM
    // fetchAdvice() function will be invoked to fetch the advice and store it into the state
    componentDidMount() {
        this.fetchAdvice();
    }

    // Legendary fetchAdvice funtion to fetch the data if successfull, otherwise console logging the error
    fetchAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((res) => {
                const { advice } = res.data.slip;
                this.setState({ advice });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Rendering card and footer component
    render() {
        const { advice } = this.state;
        return (
            <>
                {/* Advice component will get two props advice string and fetchAdvice function */}
                <AdviceCard advice={advice} fetch={this.fetchAdvice} />
            </>
        );
    }
}

export default App;
