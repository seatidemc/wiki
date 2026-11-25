/**
 * Swizzled `@theme/DocItem/Content`.
 *
 * Adds an opt-in typography class to the doc content wrapper, driven by the
 * `serif` front matter key:
 *
 *   ---
 *   serif: true
 *   ---
 *
 * The matching styles live in `src/css/custom.css`.
 */

import type { ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type { Props } from '@theme/DocItem/Content';

export default function DocItemContent({ children }: Props): ReactNode {
	const { metadata, frontMatter, contentTitle } = useDoc();

	// A synthetic title is rendered unless the doc hides it or already has an
	// h1 of its own (see the upstream component for details).
	const syntheticTitle =
		!frontMatter.hide_title && typeof contentTitle === 'undefined'
			? metadata.title
			: null;

	const serif = metadata.frontMatter.serif === true;

	return (
		<div
			className={clsx(
				ThemeClassNames.docs.docMarkdown,
				'markdown',
				serif && 'markdown-serif'
			)}>
			{syntheticTitle && (
				<header>
					<Heading as="h1">{syntheticTitle}</Heading>
				</header>
			)}
			<MDXContent>{children}</MDXContent>
		</div>
	);
}