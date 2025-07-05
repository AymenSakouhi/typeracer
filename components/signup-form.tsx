"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { SignupFormType, signupSchema } from "@/utils/validations"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUp } from "@/lib/auth-client"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  })

  const onSubmit = async (data: SignupFormType) => {
    try {
      await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/signin",
      })
    } catch (error) {
      console.log(`Facing an error: ${error}`)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign up with adding your infos</CardTitle>
          <CardDescription>Enter your email below to join us</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      {errors.name && <p>{errors.name?.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      {errors.email && <p>{errors.email?.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        id="password"
                        type="password"
                        required
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      {errors.password && <p>{errors.password?.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      {errors.confirmPassword && (
                        <p>{errors.confirmPassword?.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    // signupSchema
                  }}
                >
                  Sign Up with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account already?
              <Link
                href="/signin"
                className="underline underline-offset-4 ml-2"
              >
                Login in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
