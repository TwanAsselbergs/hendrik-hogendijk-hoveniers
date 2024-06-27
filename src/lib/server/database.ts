import { MongoClient, ObjectId } from 'mongodb';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

const connection = await MongoClient.connect(env.DBURI);
let db = connection.db(env.DBNAME);

/**
 * @param {string} name
 * @param {string} email
 * @param {string} content
 */
async function createReview(name: string, email: string, content: string) {
	if (name === '' || email === '' || content === '')
		return fail(422, { msg: 'Please fill in all fields' });

	let review = { name, email, content };

	let res = await db.collection('reviews').insertOne(review);
	
	console.log(res);
}

/**
 * @param {string} reviewId
 */
async function deleteReview(reviewId: string) {
	if (reviewId === '') return fail(422, { msg: 'Please fill in all fields' });

	let review = { '_id': new ObjectId(reviewId) };

	console.log(await db.collection('reviews').findOne({ _id: new ObjectId(reviewId) }))

	if (await db.collection('reviews').findOneAndDelete(review))
		return 
	
	return fail(422, { msg: `Could not find review with id: ${reviewId}` });
}
  
async function readReviews() {
	let resultR = await db.collection('reviews').find().toArray();
	return resultR;
}

async function readManyReviews(index: number, amount: number) {
	let resultR = await db.collection('reviews').find().skip(index).limit(amount).toArray();
	return resultR;
}

async function readGeneral() {
	let resultG = await db.collection('general').find().toArray();
	return resultG; 
}

async function readHendrik() {
	let resultH = await db.collection('hendrik').find().toArray();
	return resultH; 
}


async function updateGeneral(Gid: string, text: string){
	if (Gid === '') return fail(422, { msg: 'Please fill in all fields' });
const resultUG = await db.collection('general').updateOne(
	{_id: new ObjectId(Gid)},
	{$set: { text: text}}
);
if (resultUG.matchedCount === 0) {
	
	return { status: 422, msg: `Could not find POST with id: ${Gid}` };
} 
return { status: 200, msg: 'Update successful' };

}; 

async function updateHendrik(Gid: string, Fname: string, Lname: string, 
	Number: string, Email: string, 
	City: string, Street: string, HNumber: string, PostalCode: string, 
	Facebook: string, Instagram: string  ){
	if (Gid === '') return fail(422, { msg: 'Please fill in all fields' });
const resultHn = await db.collection('hendrik').updateOne(
	{_id: new ObjectId(Gid)},
	{$set: {
		name: {
			fName: Fname,
			lName: Lname
		},
		number: Number,
		email: Email,
		address: {
			city: City,
			street: Street,
			hNumber: HNumber,
			postalCode: PostalCode
		},
		socials: {
			facebook: Facebook,
			instagram: Instagram
		}
	}}
);
if (resultHn.matchedCount === 0) {
	
	return { status: 422, msg: `Could not find POST with id: ${Gid}` };
} 

return { status: 200, msg: 'Update successful' };
}; 




export { createReview, deleteReview, readReviews, readManyReviews, readGeneral, readHendrik, updateGeneral,updateHendrik };
export default { createReview, deleteReview, readReviews, readManyReviews, readGeneral,readHendrik,updateGeneral,updateHendrik };


