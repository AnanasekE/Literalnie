const check = (req) => {
    let h = 0
    const word = req.body.word;
    const password = 'TEMAT';

    const success = word === password ? true : false;
    for (let i = 0; i < 5; i++) {
        if (word[i] === password[i]) {
            h++
            console.log(h)
        }
    }
    
    return { success, h };
}

module.exports = {
	check: check
};