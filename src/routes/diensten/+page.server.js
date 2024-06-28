import { readGeneral,
    readHendrik
 } from "$lib/server/database";

export const load = async () => {
  const data = await readGeneral();
  const dataH = await readHendrik();

  const serializableData = data.map((item) => ({
    id: item._id.toString(),
    text: item.text,
    name: item.name
}));

const serializableDataH = dataH.map((item) => ({
    id: item._id.toString(),
    Fname: item.name.fName,
    Lname: item.name.lName,
    Number: item.number,
    Email: item.email,
    City: item.address.city,
    Street: item.address.street,
    HNumber: item.address.hNumber,
    PostalCode: item.address.postalCode,
    Facebook: item.socials.facebook,
    Instagram: item.socials.instagram
}));
    return { post: { data: serializableData, dataH: serializableDataH} }
}