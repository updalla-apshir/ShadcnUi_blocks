import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-md bg-white rounded-xl">
        <CardHeader>
          <CardTitle className="text-center">Formulaire</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input id="name" placeholder="Entrez votre nom" type="text" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Entrez votre email" type="email" />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" placeholder="Entrez votre mot de passe" type="password" />
            </div>
            <Button type="submit" className="w-full">Envoyer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
