import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { CloudBrand } from '@/components/cloud-brand';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: <CloudBrand />,
    },
  };
}
