import { Component } from "react";


class Title extends Component {
  static defaultProps = {
    href: "#",              
  };

  render() {
    const { href, children } = this.props;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute            /* position: absolute;                   */
          z-20                /* z-index: 2;                           */
          top-6 left-6        /* 1.5rem from top & left                */
          no-underline        /* text-decoration: none;                */
          text-[0.8rem]       /* font-size: 0.8rem;                    */
          pb-[5px]            /* padding-bottom: 5px;                  */
          text-primary        /* color: var(--primaryColor);           */
          border-b border-current
        "
      >
        {children}
      </a>
    );
  }
}

export default Title;