import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image  from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md dark:bg-gray-900">
        <div className="flex justify-center">
          <Image
            alt="Logo"
            className="h-16 w-32"
            height="64"
            width="128"
            src="/logo.png"
            style={{
              aspectRatio: "64/128",
              objectFit: "fill",
            }}
          />
        </div>
        <h1 className="text-3xl font-bold text-center">Ingresar</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" required type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  )
}

