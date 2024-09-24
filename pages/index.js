import { useEffect, useState } from "react";

function Home() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return <h1>{isClient ? `Já fazem ${getRandomIntInclusive(1000, 9999)} dias que reclamam do Javascript no Backend 😆` : ""}</h1>
}

export default Home;