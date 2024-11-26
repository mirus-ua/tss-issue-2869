import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { Button } from "@/components/ui/button";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

const getEnv = createServerFn({
  method: "GET",
}).handler(() => {
  return process.env.SERVER_API_URL;
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => ({
    state: await getCount(),
    SERVER_API_URL: await getEnv(),
  }),
});

function Home() {
  const router = useRouter();
  const { state, SERVER_API_URL } = Route.useLoaderData();

  return (
    <Button
      type="button"
      onClick={() => {
        updateCount({ data: 1 }).then(() => {
          router.invalidate();
        });
      }}
    >
      привіт, тут буде щось. Add 1 to {state}?{JSON.stringify(SERVER_API_URL)}
    </Button>
  );
}
