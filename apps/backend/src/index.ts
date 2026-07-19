import { password } from "bun";
import { Elysia } from "elysia";
import { z } from "zod";

const app = new Elysia()
  .post(
    "/api/v1/signup",
    ({ body }) => {
      console.log(body);
      return "hi there";
    },
    {
      body: z.object({
        username: z.string(),
        password: z.string(),
      }),
    },
  )
  .listen(3000);
