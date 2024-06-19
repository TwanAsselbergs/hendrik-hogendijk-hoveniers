import { createReview, deleteReview,readGeneral,readReview,readHendrik } from "$lib/server/database"

export const load = async () => {
    const data = await readGeneral();
    const serializableData = data.map(item => (item.text));
    return { props: { data: serializableData } };
};
