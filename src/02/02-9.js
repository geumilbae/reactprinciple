function parse(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) => {
       const [key, value] = chunk.split('=');
       result[key] = value;
    });
    return result;
}

function parseNotWithLet(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    return chunks
        .map((chunk) => {
            const [key, value] = chunk.split('=');
            return {key: key, value: value};
        })
        .reduce((result, item) => {
            result[item.key] = item.value;
            return result;
        });
}

function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
