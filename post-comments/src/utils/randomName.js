// generates random name
const randomNames = () => {
    const names = ['Liam','Olivia','Noah','Emma','Oliver','Ava','William','Sophia','Elijah','Isabella','James','Charlotte','Benjamin','Amelia','Lucasia','Mason','Harper','Ethan','Evelyn'];

    let random_name = Math.floor(Math.random() * names.length+1);
    let name = names[random_name];

    return name;
};

export default randomNames