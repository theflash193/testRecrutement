const apiCall = () => { 
    fetch("http://henri-potier.xebia.fr/books")
        .then((res) => console.log(res));
    return 42;
}

module.exports = {apiCall};
