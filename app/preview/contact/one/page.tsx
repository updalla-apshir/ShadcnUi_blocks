import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-title text-center text-4xl font-bold lg:text-6xl">Contact Sales</h1>
        <p className="text-body mt-4 text-center">
          We'll help you find the right plan and pricing for your business.
        </p>

        <Card className="bg-ui tls-shadow-md p-8 rounded-card mx-auto mt-12 max-w-lg shadow-gray-950/[0.03] sm:p-16">
          <CardHeader>
            <CardTitle className="text-title text-xl font-semibold">Let's get you to the right place</CardTitle>
            <p className="mt-4 text-sm">
              Reach out to our sales team! We’re eager to learn more about how you plan to use our
              application.
            </p>
          </CardHeader>

          <CardContent>
            <div className="mt-12 space-y-6">
              <div className="field">
                <Label htmlFor="name" className="text-title text-sm">
                  Full name
                </Label>
                <Input
                  type="text"
                  required
                  name="name"
                  id="name"
                  className="input sz-md variant-mixed"
                />
              </div>

              <div className="field">
                <Label htmlFor="email" className="text-title text-sm">
                  Work Email
                </Label>
                <Input
                  type="email"
                  required
                  name="email"
                  id="email"
                  className="input sz-md variant-mixed"
                />
              </div>

              <div className="field">
                <Label htmlFor="country" className="text-title text-sm">
                  Country/Region
                </Label>
                <div className="relative">
                  <svg
                    className="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.75rem"
                    height="0.75rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                  <Select>
                    <SelectTrigger className="input variant-mixed sz-md appearance-none">
                      <SelectValue placeholder="Select Country/Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">DR Congo</SelectItem>
                      <SelectItem value="2">United States</SelectItem>
                      <SelectItem value="3">France</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="field">
                <Label htmlFor="website" className="text-title text-sm">
                  Company Website
                </Label>
                <Input
                  type="url"
                  name="website"
                  id="website"
                  className="input sz-md variant-mixed"
                />
                <span className="text-caption inline-block text-sm">Must start with 'https'</span>
              </div>

              <div className="field">
                <Label htmlFor="job" className="text-title text-sm">
                  Job function
                </Label>
                <div className="relative">
                  <svg
                    className="text-body pointer-events-none absolute inset-y-0 right-2.5 my-auto opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.75rem"
                    height="0.75rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                  <Select>
                    <SelectTrigger className="input variant-mixed sz-md appearance-none">
                      <SelectValue placeholder="Select Job Function" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Finance</SelectItem>
                      <SelectItem value="2">Education</SelectItem>
                      <SelectItem value="3">Legal</SelectItem>
                      <SelectItem value="4">More</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="field">
                <Label htmlFor="msg" className="text-title text-sm">
                  Message
                </Label>
                <Textarea
                  className="textarea variant-mixed sz-md rounded-card"
                  id="msg"
                  rows={3}
                />
              </div>

              <Button className="btn variant-primary sz-sm ml-auto w-fit">Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
