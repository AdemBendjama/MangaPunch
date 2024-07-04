"use server";

export async function signup(formData: {
  email: string;
  username: string;
  password: string;
}) {
  console.log(formData);
}

export async function signin(formData: { email: string; password: string }) {
  console.log(formData);
}
