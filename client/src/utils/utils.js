const truncate = (string) => {
    return string.slice(0, 8) + "..." + string.slice(string.length -3, string.length);
}

export default truncate;