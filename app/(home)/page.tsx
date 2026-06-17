import Link from 'next/link';
import { CloudBrand } from '@/components/cloud-brand';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <CloudBrand showSubtitle />

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-normal md:text-5xl">Mustelinet Cloud tenant docs</h1>
          <p className="max-w-2xl text-base leading-7 text-fd-muted-foreground md:text-lg">
            Create tenant resources, publish applications, connect to VMs, and automate OpenStack projects.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground shadow-sm transition-colors hover:bg-fd-primary/90"
          >
            <BookOpen className="size-4" />
            Open docs
          </Link>
          <Link
            href="/docs/quick-reference"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            <ExternalLink className="size-4" />
            Quick reference
          </Link>
        </div>
      </main>
    </div>
  );
}
