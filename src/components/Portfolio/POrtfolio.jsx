import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #333;
  color: #fff;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  margin: 0 16px;
  font-size: 1.2rem;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #eee;
  }
`;

const NavToggle = styled.button`
  display: none;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  color: #fff;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #333;
  color: #fff;
  padding: 0 16px;
  flex-direction: column;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavMenuLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavMenuLink = styled.li`
  margin: 16px 0;
  font-size: 1.2rem;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #eee;
  }
`;

const Hero = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg");
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const HeroText = styled.div`
  text-align: center;
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  p {
    font-size: 1.5rem;
    margin: 16px 0;
  }
`;

const About = styled.section`
  padding: 80px 40px;
  h2 {
    font-size: 2.5rem;
    margin: 0 0 16px;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

const Services = styled.section`
  padding: 80px 40px;
  h2 {
    font-size: 2.5rem;
    margin: 0 0 16px;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 16px;
  }
  .service {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img {
      width: 64px;
      height: 64px;
      margin-right: 16px;
    }
    h3 {
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

const Contact = styled.section`
  padding: 80px 40px;
  h2 {
    font-size: 2.5rem;
    margin: 0 0 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.25rem;
      margin-bottom: 8px;
    }
    input,
    textarea {
      font-size: 1.25rem;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      &:focus {
        outline: 0;
        border-color: #333;
      }
    }
    textarea {
      min-height: 120px;
    }
    button {
      font-size: 1.25rem;
      padding: 8px 16px;
      border: 0;
      border-radius: 4px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #444;
      }
    }
  }
`;

const Footer = styled.footer`
  padding: 40px 0;
  background-color: #333;
  color: #fff;
  text-align: center;
  p {
    font-size: 1.25rem;
    margin: 0;
  }
`;

class App extends React.Component {
  state = {
    navOpen: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({ navOpen: !prevState.navOpen }));
  };

  render() {
    return (
      <Container>
        <Navbar>
          <NavBrand>My Portfolio</NavBrand>
          <NavLinks>
            <NavLink>
              <a href="#">Home</a>
            </NavLink>
            <NavLink>
              <a href="#">About</a>
            </NavLink>
            <NavLink>
              <a href="#">Services</a>
            </NavLink>
            <NavLink>
              <a href="#">Contact</a>
            </NavLink>
          </NavLinks>
          <NavToggle onClick={this.toggleNav}>Menu</NavToggle>
          <NavMenu open={this.state.navOpen}>
            <NavMenuLinks>
              <NavMenuLink>
                <a href="#">Home</a>
              </NavMenuLink>
              <NavMenuLink>
                <a href="#">About</a>
              </NavMenuLink>
              <NavMenuLink>
                <a href="#">Services</a>
              </NavMenuLink>
              <NavMenuLink>
                <a href="#">Contact</a>
              </NavMenuLink>
            </NavMenuLinks>
          </NavMenu>
        </Navbar>
        <Hero>
          <HeroText>
            <h1>Welcome to My Portfolio</h1>
            <p>I am a web developer with a passion for building modern and responsive websites.</p>
          </HeroText>
        </Hero>
        <About>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lacinia urna,
            et ullamcorper velit. Proin at justo id dui fringilla venenatis. Sed fermentum est non
            lacus tincidunt, non elementum tellus pretium. Fusce tincidunt, ipsum quis elementum
            placerat, diam mauris faucibus felis, at luctus erat tellus ac nisi.
          </p>
        </About>
        <Services>
          <h2>Services</h2>
          <div className="services-grid">
            <div className="service">
              <img src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=2000" alt="Web Design" />
              <div>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lacinia
                  urna, et ullamcorper velit.
                </p>
              </div>
            </div>
            <div className="service">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq52k2itfQUrMgLZHE3Wa3Qe2F092LHegDetL2ulzx-gg0_zNGSzfQ8pgbafNN6dit-8&usqp=CAU" alt="Web Development" />
              <div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lacinia
                  urna, et ullamcorper velit.
                </p>
              </div>
            </div>
            <div className="service">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu7U_qmAaPgrRrYjpRcyHompaDAyFvdFTRw&usqp=CAU"
                alt="SEO"
              />
              <div>
                <h3>SEO</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lacinia
                  urna, et ullamcorper velit.
                </p>
              </div>
            </div>
            <div className="service">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zM7QrqJCtcLKh4haAL48v9e-CNf9BBLXfA&usqp=CAU" alt="Social Media Marketing" />
              <div>
                <h3>Social Media Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod lacinia
                  urna, et ullamcorper velit.
                </p>
              </div>
            </div>
          </div>
        </Services>
        <Contact>
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <button type="submit">Send</button>
          </form>
        </Contact>
        <Footer>
          <p>Copyright 2021 My Portfolio</p>
        </Footer>
      </Container>
    );
  }
}

export default App;
