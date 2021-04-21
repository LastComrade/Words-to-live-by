import React from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import AdviceCard from "./Components/AdviceCard";


class App extends React.Component {
    state = {
        advice: "",
    };

    componentDidMount() {
        this.fetchAdvice();
    }

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

    render() {
        const { advice } = this.state;
        return (
            <>
                <AdviceCard advice={advice} fetch={this.fetchAdvice} />
                <Footer />
            </>
        );
    }
}

export default App;
