
import { inngest } from "@/lib/inggest/client";
import { generateIndustryInshights } from "@/lib/inggest/functions";
import { serve } from "inngest/next";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
   generateIndustryInshights,
  ],
});
