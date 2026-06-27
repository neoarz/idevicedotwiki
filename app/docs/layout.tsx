import { source } from '@/lib/source';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} links={linkItems} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
