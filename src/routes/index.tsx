import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/home/Services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comprehensive Care Under One Roof — United Health" },
      {
        name: "description",
        content:
          "From everyday checkups to specialized care, everything your family needs in one place.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip bg-background">
      <Services />
      <section aria-hidden="true" className="h-screen w-full bg-background" />
    </main>
  );
}
