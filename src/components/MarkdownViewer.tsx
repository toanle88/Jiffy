import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CSSProperties } from 'react';

interface MarkdownViewerProps {
  content: string;
  theme: 'dark' | 'light';
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const MarkdownViewer = ({ content, theme }: MarkdownViewerProps) => {
  const highlighterStyle = theme === 'dark' ? vscDarkPlus : prism;

  return (
    <div className="text-[0.95rem] text-foreground tracking-tight leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-[2.25rem] font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-header-gradient-start to-header-gradient-end leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 pb-1 border-b border-border text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full border-separate border-spacing-0 text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-sidebar uppercase text-[0.8rem] tracking-wider font-semibold">{children}</thead>,
          th: ({ children }) => <th className="p-4 text-left border-b border-border text-foreground">{children}</th>,
          td: ({ children }) => <td className="p-4 text-left border-b border-border transition-colors duration-200 hover:bg-sidebar-hover">{children}</td>,
          tr: ({ children }) => <tr className="even:bg-white/[0.03] transition-colors duration-200">{children}</tr>,
          code({ inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="my-4 rounded-lg overflow-hidden border border-border bg-code">
                <SyntaxHighlighter
                  style={highlighterStyle as Record<string, CSSProperties>}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-code p-1 px-1.5 rounded-md font-mono text-[0.9em] text-primary" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
