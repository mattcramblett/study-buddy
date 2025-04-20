import { SignInWithGoogleButton } from "@/components/auth/sign-in-with-google-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Login() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card className="w-96 flex">
        <CardHeader>
          <CardTitle className="text-xl">
            Log in
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <SignInWithGoogleButton />
        </CardContent>
      </Card>
    </main>
  );
}
