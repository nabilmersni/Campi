export const colapsedShapeVars = {
    show: {
        rotate: [0, 180, 360],
        borderRadius: ['45%', '50%', '45%'],
        x: [0, 1, 0, -1, 0],
        y: [0, 1, 0, -1, 0],
        transition: {
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
        },
    },
};

export const showNavLogoVars = {
    x: '-80%',
    width: ["2rem", "4rem"],
    height: ["2rem", "4rem"],
    top: "10vh",
    left: "50vw",
    fill: "#E5E0FF",
    transition: {
        duration: 1,
        type: "spring",
        staggerChildren: 0.5,
    },
};

export const hideNavLogoVars = {
    x: 0,
    y: 0,
    width: "2rem",
    height: "2rem",
    top: 0,
    left: 0,
    fill: "#fff",
    transition: {
        duration: 1,
        type: "spring",
        staggerChildren: 0.1,
    },
};