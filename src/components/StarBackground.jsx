import { useEffect, useState } from "react"

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [Meteors, setMeteors] = useState([]);

    
    const generateStars = () => {
        // Limit the number of stars for performance
        const numOfStars = Math.min(500, Math.floor((window.innerWidth * window.innerHeight) / 1500));
        const newStars = [];
        for (let index = 0; index < numOfStars; index++) {
            newStars.push({
                id: index,
                size: Math.random() * 3 + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

      const generateMeteors = () => {
        // Limit the number of stars for performance
        const numOfMeteors = Math.min(500, Math.floor((window.innerWidth * window.innerHeight) / 1500));
        const newMeteors = [];
        for (let index = 0; index < numOfMeteors; index++) {
            newMeteors.push({
                id: index,
                size: Math.random() * 3 + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                delay: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setMeteors(newMeteors);
    };

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize=()=>{
            generateStars();
        };

        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener('resize', handleResize);

        // Optionally, regenerate on resize:
        // const handleResize = () => generateStars();
        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        position: "absolute",
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "px",
                        top: star.y + "px",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {Meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        position: "absolute",
                        width: meteor.size*10 + "px",
                        height: meteor.size + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
}