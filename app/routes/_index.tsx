import type { V2_MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "react-router";
import { requireUser } from "~/session.server";

export const meta: V2_MetaFunction = () => [{ title: "Expense Tracker" }];

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  return null;
};

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <h1>Hello World!</h1>
    </main>
  );
}
