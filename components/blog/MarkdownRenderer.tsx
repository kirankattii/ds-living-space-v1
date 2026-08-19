import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  const blocks = content.split('\n\n');
  
  return (
    <div className="prose prose-lg md:prose-xl max-w-none text-[#171717] font-serif tracking-tight leading-relaxed">
      {blocks.map((block, index) => {
        // Heading 1 (treat as H2 for SEO hierarchy if content starts with #)
        if (block.startsWith('# ')) {
          return (
            <h2 key={index} className="text-3xl md:text-4xl font-black tracking-tight text-[#11123A] mt-12 mb-6">
              {block.replace('# ', '')}
            </h2>
          );
        }
        // Heading 2 (Main Section Headers)
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-black tracking-tight text-[#11123A] mt-12 mb-6">
              {block.replace('## ', '')}
            </h2>
          );
        }
        // Heading 3 (Sub Headers)
        if (block.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl md:text-2xl font-bold tracking-tight text-[#171717] mt-8 mb-4">
              {block.replace('### ', '')}
            </h3>
          );
        }
        // Unordered Lists
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(item => item.trim().startsWith('- '));
          return (
            <ul key={index} className="space-y-3 my-6 pl-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-[#171717]/80 font-medium leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11123A] shrink-0 mt-2.5" />
                  {item.replace('- ', '')}
                </li>
              ))}
            </ul>
          );
        }
        // FAQs / Q&A blocks
        if (block.trim().startsWith('Q') && block.includes('\n')) {
          const lines = block.split('\n').filter(l => l.trim() !== '');
          return (
            <div key={index} className="my-6 bg-[#fbfbfd] p-6 md:p-8 rounded-2xl border border-[#171717]/10 shadow-sm">
              {lines.map((line, lIdx) => (
                <p key={lIdx} className={lIdx % 2 === 0 ? "font-bold text-[#11123A] text-lg mb-2" : "text-[#171717]/80 font-medium text-lg"}>
                  {line}
                </p>
              ))}
            </div>
          );
        }
        // Standard Paragraph
        return (
          <p key={index} className="text-lg md:text-xl text-[#171717]/80 font-medium leading-relaxed mb-6">
            {block}
          </p>
        );
      })}
    </div>
  );
};

export default MarkdownRenderer;
