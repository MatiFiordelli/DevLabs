export const entriesVariant = {
    initial: {
        opacity: 0,
        transform: `translateX(${window.innerWidth}px)`,
    },
    animate: {
        opacity: 1,
        transform: `translateX(0px)`,
        transition: {
            duration: 1,
            type: "spring",
        },
    },
};