import { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col items-center mx-auto max-w-7xl p-10">
      <h1 className="text-5xl font-bold">
        About Us
      </h1>
      <p className="mt-10 text-lg">
        This is a simple daily blog created by a team of developers. We will be posting daily updates about our projects, our experiences and our thoughts.
      </p>
    </div>
  )
}
