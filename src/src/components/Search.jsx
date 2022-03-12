import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search a recipe" />
        </FormStyle>
    );
}

// Style :
const FormStyle = styled.form`
    margin: 0 5rem;
    position: relative;

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #333);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default Search;
