# Mustelinet Cloud Docs

Tenant documentation for Mustelinet Cloud, built with Next.js and Fumadocs.

Run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Static Build

The production build is a static export. It writes the deployable site to `out/`.

```bash
pnpm build
pnpm preview
```

Open http://localhost:3001 to preview the exported static site locally.
Deploy the contents of `out/` to the static host, CDN, or web server.

## Docker

Build a static-serving container image:

```bash
docker build -t mustelidoc:static .
docker run --rm -p 8080:8080 mustelidoc:static
```

Open http://localhost:8080 to view the containerized static site.
The runtime image serves only the exported `out/` files through unprivileged nginx.

For production, pass the public docs URL at build time so Open Graph metadata uses
the deployed hostname:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://docs.example.com \
  -t mustelidoc:static .
```

## Publishing

GitHub Actions publishes the image to the repository package registry on pushes to
`main`, version tags like `v1.0.0`, and manual workflow runs:

```text
ghcr.io/armeldemarsac92/mustelidoc
```

Set the repository variable `NEXT_PUBLIC_SITE_URL` to the public docs URL before
publishing production images.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.
- `app/api/search/route.ts`: Static Fumadocs search index export.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The static search index route.                         |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
