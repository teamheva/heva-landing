<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploying to Vercel

ALWAYS deploy using the credentials in `.env.deploy`. Never re-link or guess the project.

```bash
source .env.deploy && VERCEL_TOKEN=$VERCEL_TOKEN VERCEL_ORG_ID=$VERCEL_ORG_ID VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID vercel deploy --prod --yes
```

If `.env.deploy` values are missing/placeholder, stop and ask the user to fill them in first.
