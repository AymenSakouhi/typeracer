import { SignUpForm } from "@/components/signup-form"
import Typewriter from "@/components/shared/typewriter"

export default function Page() {
  return (
    <div className="flex flex-col gap-8 min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Typewriter text="Welcome to TypeRacer - Race with your friends real-time" />
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  )
}
