import { z } from "zod"

export const signinSchema = z.object({
  email: z
    .string({
      message: "Required Input",
    })
    .email("Please add a valid email"),
  password: z.string().min(8, "At least 8 characters"),
})

export const signupSchema = z
  .object({
    name: z.string({
      message: "Required Input",
    }),
    email: z
      .string({
        message: "Required Input",
      })
      .email("Please add a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Passwords do not match",
      })
    }
  })

export type SigninSchema = z.infer<typeof signinSchema>
export type SininSchema = z.infer<typeof signupSchema>
