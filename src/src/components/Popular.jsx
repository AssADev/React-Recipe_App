import { useEffect, useState } from "react";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await response.json();
        setPopular(data.recipes);
    };

    return (
        <div>
            {popular.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <p>{recipe.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Popular;
