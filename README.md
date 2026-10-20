# AdScope

Standalone competitor advertising intelligence dashboard for Meta, Google and LinkedIn. Next.js frontend with Sanity-backed competitors and manually verified ad records.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Without a Sanity write token the application operates in **clearly labeled demo mode** with illustrative, **not real** ad records. It does not persist changes in demo mode.

## Connect Sanity

Project ID is prefilled as `eqzq0mtw`; dataset defaults to `production` (confirm that dataset exists). Create the following document types in your Sanity Studio. A sample schema is included in `sanity-schema.ts`.

Set environment variables in `.env.local` (and your deployment environment):

- `NEXT_PUBLIC_SANITY_PROJECT_ID=eqzq0mtw`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `SANITY_API_TOKEN` — Sanity token with permission to create/delete AdScope documents, **server only**.
- `ADSCOPE_ADMIN_KEY` — long random secret used for write actions, **server only**.
- `CRON_SECRET` — optional secret for the monitoring status endpoint.

Do not prefix secrets with `NEXT_PUBLIC_`. Configure Sanity CORS origins if your deployment requires browser access to Sanity; all current data requests are server-side.

## Features

- Public, responsive dashboard (no sign-in required for viewing)
- Competitor list with add and delete actions gated by an admin key
- Direct links to official public ad libraries
- Manual import of verified ad metadata, saved to Sanity
- Search, platform filtering, platform breakdown, and messaging tags
- Clear data provenance and demo-mode labels

## Automated monitoring: not yet connected

This release **does not automatically scrape or monitor ad libraries**. The `/api/monitor` endpoint explicitly reports that no collector is configured. Platform commercial-ad APIs are restricted and may not support the promised coverage. Do not interpret saved records as complete live campaigns, nor missing ads as proof that campaigns ended. For true automated monitoring, integrate approved licensed data feeds or permitted public APIs on a per-platform basis, then schedule collectors and persist source IDs and collection timestamps.

## Deployment

Create a new GitHub repository named `adscope`, push this project, and import the repository into a Next.js-compatible host. Configure the environment variables and set the Sanity Studio schema. Public access does **not** mean the link is private; anyone who knows or discovers it can view the dashboard. The admin key is a lightweight MVP write gate, not a full identity/permissions system. For production use, add authenticated admin accounts, rate limiting, audit logs and stronger API input validation.

## Caveats

- Demo content is fabricated **only as clearly marked illustrative UI samples**; it is not a claim about real advertiser activity.
- AI summaries, automated alerts, and image/video ingestion are future integrations, not implemented in this version.
- Hosting and Sanity free tiers have limits and eligibility restrictions.
