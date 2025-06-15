import { Component } from "react";
import Title from "../components/title.jsx";
import Section from "../components/section.jsx";


class Home extends Component {
    
    render() {
        const bg = "bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1581453904507-626ddb717f14?auto=format&fit=crop&w=2089&q=80')]";

        return (
            <Section id="home" bgClass={bg}>
                <Title href="https://jacinto.design">Dandee Design</Title>
                <div className="absolute bottom-10 text-white text-lg">
                    <a href="#about" className="hover:underline">Scroll down to learn more</a>
                </div>
            </Section>
        )
    }
}

export default Home;