import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Recipe() {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instruction");
    let params = useParams();

    const fetchDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setDetails(data);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    return (
        <DetailWrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className={activeTab === "instruction" ? "active" : ""} onClick={() => setActiveTab("instruction")}>
                    Instructions
                </Button>
                <Button className={activeTab === "ingredient" ? "active" : ""} onClick={() => setActiveTab("ingredient")}>
                    Ingredients
                </Button>
                {activeTab === "instruction" && (
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}
                {activeTab === "ingredient" && (
                    <ul>
                        {details.extendedIngredients.map((item) => {
                            return <li key={item.id}>{item.original}</li>;
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

// Style :
const DetailWrapper = styled(motion.div)`
    display: flex;
    margin-top: 5rem;
    margin-bottom: 5rem;

    .active {
        background: linear-gradient(35deg, #494949, #333);
        color: #fff;
    }

    h2 {
        margin-bottom: 2rem;
        font-weight: 500;
    }

    ul {
        margin-top: 2rem;

        li {
            font-size: 1.1rem;
            line-height: 2.5rem;
        }
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #333;
    background: #fff;
    border: 2px solid #333;
    margin-right: 2rem;
    font-weight: 500;
    cursor: pointer;
`;

const Info = styled.div`
    margin-left: 10rem;

    p {
        margin-top: 2rem;
    }
`;

export default Recipe;
