import { z } from "zod";

export const authSchema = z.object({
    email: z.string().email({
        message: "Please enter invalid email address",
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    }).max(50).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      }),
})