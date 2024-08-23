# Personal website

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Upstash Redis](https://upstash.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Beam Analytics](https://beamanalytics.io/)

## Running Locally

```bash
bun install
bun dev
```

Create a `.env` file similar to 
## Database 

Go to [Upstash](https://upstash.com/), create an account, create a database in Upstash Redis and add the generate UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.

## Analytics

Go to [Beam Analytics](https://beamanalytics.io/), add your url and replace the data-token in src/app/layout.tsx.

