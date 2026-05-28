"use server";

export async function submitContact(_prev: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Por favor completá todos los campos." };
  }

  // TODO: connect to an email service (Resend, Nodemailer, etc.)
  console.log("Contact form submission:", { name, email, message });

  return { success: true, error: null };
}
