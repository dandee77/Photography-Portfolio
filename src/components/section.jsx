import { Component } from "react";


class Section extends Component {
    
    static defaultProps = {
        bgClass: "",
    };

    render() {
        const { id, bgClass, children } = this.props
        return (
            <section
                id={id}
                className={`w-full h-screen relative flex justify-center items-center uppercase tracking-[2px] text-primary ${bgClass}`}>
                {children}
            </section>
        )
    }
}

export default Section;