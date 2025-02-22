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
        <h1 className="text-title mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Help us route your inquiry
        </h1>
        <div data-shade="950" className="relative grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="flex flex-col justify-between p-[--card-padding] sm:p-12">
            <div>
              <h3 className="text-title mb-3">Collaborate</h3>
              <a href="mailto:hello@tailus.io" className="link variant-animated intent-primary my-3 text-2xl underline">
                hello@tailus.io
              </a>
              <p className="mt-3 text-sm">+243 000 000 000</p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8 p-[--card-padding] sm:p-12">
            <div>
              <h3 className="text-title mb-3">Press</h3>
              <a href="mailto:press@tailus.io" className="link variant-animated intent-primary my-3 text-2xl underline">
                press@tailus.io
              </a>
              <p className="mt-3 text-sm">+243 000 000 000</p>
            </div>
          </div>
        </div>
        <div className="h-3 invert [--stripes-color:theme(colors.white/0.15)] [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] dark:invert-0"></div>
        <div className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto max-w-lg sm:p-16">
            <CardContent>
              <h3 className="text-title text-xl font-semibold">Let's get you to the right place</h3>
              <p className="mt-4 text-sm">
                Reach out to our sales team! We’re eager to learn more about how you plan to use our application.
              </p>
              <div className="mt-12 space-y-6">
                <div>
                  <Label htmlFor="name" className="text-title text-sm">
                    Full name
                  </Label>
                  <Input type="text" required id="name" className="input sz-md variant-mixed" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-title text-sm">
                    Work Email
                  </Label>
                  <Input type="email" required id="email" className="input sz-md variant-mixed" />
                </div>
                <div>
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
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">DR Congo</SelectItem>
                        <SelectItem value="2">United States</SelectItem>
                        <SelectItem value="3">France</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="website" className="text-title text-sm">
                    Company Website
                  </Label>
                  <Input type="url" id="website" className="input sz-md variant-mixed" />
                  <span className="text-caption inline-block text-sm">Must start with 'https'</span>
                </div>
                <div>
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
                </div>
                <div>
                  <Label htmlFor="msg" className="text-title text-sm">
                    Message
                  </Label>
                  <Textarea id="msg" rows={3} className="textarea variant-mixed sz-md rounded-card" />
                </div>
                <Button className="btn variant-primary sz-sm ml-auto w-fit">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}