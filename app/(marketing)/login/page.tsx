import { LoginForm } from "@/components/login-form";
import Typewriter from "@/components/shared/typewriter";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Typewriter
        speed={60}
        text="Welcome to TypeRacer - Race with your friends real-time"
      />
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
