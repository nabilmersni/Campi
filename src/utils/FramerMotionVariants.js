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
    x: '-87%',
    width: ["2rem", "3.5rem"],
    height: ["2rem", "3.5rem"],
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

export const CollapsedNavBarParentVariants = {
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
    exit: {
        x: -30,
        opacity: 0,
    },
};

export const CollapsedNavBarChildVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {},
    },
};