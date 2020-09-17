// generates random string of numbers for id of Post
const randomTime = () => {
    let time = '';

    for(let i = 0; i < 1; i++) {
        time += Math.round(Math.random() * 11)
    }

    return time
};

export default randomTime;