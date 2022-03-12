import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCroissant, GiTeapot } from "react-icons/gi";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={"/cuisine/Indian"}>
                <GiTeapot />
                <h4>Indian</h4>
            </SLink>
            <SLink to={"/cuisine/French"}>
                <GiCroissant />
                <h4>French</h4>
            </SLink>
        </List>
    );
}

// Style :
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 7.5px;
    border-radius: 50%;
    margin-right: 2.5rem;
    background: linear-gradient(35deg, #494949, #333);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
    }

    h4 {
        color: #fff;
        font-size: 0.8rem;
        font-weight: 500;
    }
    svg {
        color: #fff;
        font-size: 1.5rem;
    }
`;

export default Category;
