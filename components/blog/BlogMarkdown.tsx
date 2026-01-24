"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { Components } from "react-markdown";

interface BlogMarkdownProps {
  content: string;
}

export default function BlogMarkdown({ content }: BlogMarkdownProps) {
  const components: Components = {
    // Headings
    h1: ({ children }) => (
      <h1 className="mb-6 mt-10 scroll-mt-24 font-grotesk text-3xl font-bold text-foreground first:mt-0 md:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="mb-4 mt-8 scroll-mt-24 font-grotesk text-2xl font-bold text-foreground md:text-3xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="mb-3 mt-6 scroll-mt-24 font-grotesk text-xl font-bold text-foreground md:text-2xl"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="mb-2 mt-4 scroll-mt-24 font-grotesk text-lg font-bold text-foreground"
      >
        {children}
      </h4>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
      >
        {children}
      </a>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary bg-primary/5 py-4 pl-6 pr-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),

    // Code blocks
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-[#0d1117] p-4">
        {children}
      </pre>
    ),
    code: ({ className, children }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
            {children}
          </code>
        );
      }

      return (
        <code className="block font-mono text-sm leading-relaxed text-[#e6edf3]">
          {children}
        </code>
      );
    },

    // Tables
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-border bg-muted/50">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-border last:border-0">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-muted-foreground">{children}</td>
    ),

    // Horizontal rule
    hr: () => <hr className="my-8 border-border" />,

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,

    // Images
    img: ({ src, alt }) => (
      <figure className="my-6">
        <img
          src={src}
          alt={alt || ""}
          className="w-full rounded-lg border border-border"
        />
        {alt && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
  };

  return (
    <article className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
