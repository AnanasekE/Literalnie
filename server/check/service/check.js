const check = (req) => {
    const word = req.body.word;
    const password = 'TEMAT';

    const success = word === password ? true : false;
    
    return { success };
}

module.exports = {
	check: check
};