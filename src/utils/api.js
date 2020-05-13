import axios from "axios";

async function getGists() {
    return await axios.get(`https://api.github.com/users/svngoku/gists`, {
        headers: { Authorization: "f910739549334dd00e407db640c407076b4c6c98" }
    }).then(res => {
        const gist = res.data;
        console.log(gist)
        return gist;
    })
}


export default getGists;