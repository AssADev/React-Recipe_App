import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={"/"}>Recipe App</Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

// Style :
const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0;

    svg {
        color: #333;
        font-size: 2rem;
        margin-right: 0.5rem;
    }
`;

export default App;
