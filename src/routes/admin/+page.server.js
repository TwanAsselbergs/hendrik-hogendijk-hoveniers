import { createReview, deleteReview,readGeneral,readReview,readHendrik } from "$lib/server/database"

export const load = async () => {
    const data = await readGeneral();
    const dataH = await readHendrik();
    const serializableData = data.map(item => (item.text));
   const serializableDataH = dataH.map(item => ({...item, _id: item._id.toString()}));
   
    return { props: { data: serializableData, dataH:serializableDataH } };
};



// async function logResultH() {
//     const resultH = await readHendrik();
//     console.log(resultH);
// }

// logResultH();


