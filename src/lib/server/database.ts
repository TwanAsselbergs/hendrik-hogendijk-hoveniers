import { MongoClient, ObjectId } from "mongodb";
import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";

const connection = await MongoClient.connect(env.DBURI);

/**
 * @param {string} name
 * @param {string} email
 * @param {string} content
 */
async function createReview(name: string, email: string, content: string) {
    if (name === "" || email === "" || content === "") 
        return fail(422, { msg: "Please fill in all fields" });
        
    let db = connection.db(env.DBNAME);
    let review = {name, email, content};
    
    let res = await db.collection("reviews").insertOne(review);

    console.log(res);
}

/**
 * @param {string} reviewId
 */
async function deleteReview(reviewId: string) {
    if (reviewId === "") return fail(422, { msg: "Please fill in all fields" });

    let db = connection.db(env.DBNAME);
    let review = {_id: new ObjectId(reviewId)};
    
    if (!await db.collection("review").findOne(review))
        return fail(422, {msg: `Could not find review with id: ${reviewId}`});

    await db.collection("reviews").deleteOne(review);
}

export {createReview, deleteReview};
export default {createReview, deleteReview};