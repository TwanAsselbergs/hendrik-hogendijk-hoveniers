import { MongoClient } from "mongodb";
import { env } from "$env/dynamic/private";

const connection = await MongoClient.connect(env.DBURI);

/**
 * @param {string} name
 * @param {any} email
 * @param {any} content
 */
async function createReview(name, email, content) {
    if (name === "") throw Error("Please fill in name");
        
    let db = connection.db("brawlers");
    let review = {name, email, content};
    
    let res = await db.collection("reviews").insertOne(review);

    console.log(res);
}

export {createReview};
export default {createReview};