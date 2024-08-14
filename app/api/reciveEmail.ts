"use server";

export default async function getEmailAdress({
  email,
}: {
  email: string | undefined;
}) {
  const data = email;

  console.log(data);

  return { data };
}
