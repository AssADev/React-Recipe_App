import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await response.json();
        setSearchedRecipes(data.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {searchedRecipes.length === 0 && (
                <Error>
                    <h2>No results found</h2>
                </Error>
            )}
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

// Style :
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border: 2px solid #f00;
    border-radius: 2rem;

    h2 {
        color: #f00;
    }
`;

export default Searched;
