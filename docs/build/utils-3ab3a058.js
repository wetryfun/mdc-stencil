const classNames = (className) => {
    return typeof className === 'string'
        ? {
            [className]: true
        }
        : className;
};
const unique = () => Math.random()
    .toString(36)
    .substr(2, 9);

export { classNames as c, unique as u };
