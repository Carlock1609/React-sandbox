// generates random string of numbers for id of Post
const randomId = () => {
    let ID = '';

    for(let i = 0; i < 6; i++) {
        ID += Math.round(Math.random() * 11)
    }

    return ID
};

export default randomId;