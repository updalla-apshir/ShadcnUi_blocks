import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Help us route your inquiry
        </h1>
        
        <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="p-(--card-padding)--card-padding p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Collaborate</h3>
              <a href="mailto:hello@tailus.io" className="text-lg text-blue-600 hover:underline">hello@tailus.io</a>
              <p className="mt-3 text-sm">+243 000 000 000</p>
            </div>
          </div>
          <div className="p-(--card-padding)--card-padding p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Press</h3>
              <a href="mailto:press@tailus.io" className="text-lg text-blue-600 hover:underline">press@tailus.io</a>
              <p className="mt-3 text-sm">+243 000 000 000</p>
            </div>
          </div>
        </div>
        <div className="h-3 invert [--stripes-color:theme(colors.white/0.15)] [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] dark:invert-0"></div>
        <div className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto max-w-lg p-8 sm:p-16">
            <h3 className="text-xl font-semibold">Let's get you to the right place</h3>
            <p className="mt-4 text-sm">
              Reach out to our sales team! We’re eager to learn more about how you plan to use our application.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input type="text" id="name" required />
              </div>
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input type="email" id="email" required />
              </div>
              <div>
                <Label htmlFor="country">Country/Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">DR Congo</SelectItem>
                    <SelectItem value="2">United States</SelectItem>
                    <SelectItem value="3">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="website">Company Website</Label>
                <Input type="url" id="website" />
              </div>
              <div>
                <Label htmlFor="job">Job function</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job function" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Finance</SelectItem>
                    <SelectItem value="2">Education</SelectItem>
                    <SelectItem value="3">Legal</SelectItem>
                    <SelectItem value="4">More</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" rows={3} />
              </div>
              <Button>Submit</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}