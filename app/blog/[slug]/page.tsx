import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronLeft, User, Share2, ArrowRight 
} from 'lucide-react';
import { getBlogBySlug, getAllBlogs } from '@/lib/blog';
import FadeIn from '@/components/shared/FadeIn';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) return { title: 'Post Not Found' };

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description,
    keywords: blog.keywords.join(', '),
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description,
      images: [{ url: blog.image }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.meta_title || blog.title,
      description: blog.meta_description,
      images: [blog.image],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    }
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.image,
    datePublished: new Date(blog.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: blog.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DS Living Spaces',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dslivingspaces.com/logo.png', // Fallback URL
      },
    },
    description: blog.meta_description,
  };

  return (
    <article className="w-full pt-32 pb-20 bg-[#ffffff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* HEADER & META */}
        <header className="mb-12">
          <FadeIn>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-[#808080] hover:text-[#11123A] font-bold text-xs uppercase tracking-widest mb-10 transition-colors w-max"
            >
              <ChevronLeft size={16} /> Back to Journal
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#fbfbfd] border border-[#171717]/10 text-[#11123A] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter leading-[1.05] text-[#171717] mb-8">
              {blog.title}
            </h1>

            {/* Author & Date Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-[#171717]/10 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#fbfbfd] border border-[#171717]/10 rounded-full flex items-center justify-center text-[#11123A]">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#171717] text-sm uppercase tracking-wider">{blog.author}</p>
                  <div className="flex items-center gap-2 text-[#808080] text-xs font-bold mt-1">
                    <time>{blog.date}</time>
                    <span className="w-1 h-1 rounded-full bg-[#808080]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#11123A] hover:bg-[#fbfbfd] px-4 py-2 rounded-full border border-[#171717]/10 transition-colors text-xs font-bold uppercase tracking-widest">
                <Share2 size={14} /> Share
              </button>
            </div>
          </FadeIn>
        </header>

        {/* FEATURED IMAGE */}
        <FadeIn delay={0.1}>
          <div className="w-full h-[400px] md:h-[600px] rounded-[32px] overflow-hidden mb-16 shadow-lg border border-[#171717]/5 relative">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>

        {/* ARTICLE BODY */}
        <div className="max-w-3xl mx-auto relative">
          <FadeIn delay={0.2}>
            <MarkdownRenderer content={blog.content} />

            {/* SEO Tags / Keywords */}
            {blog.keywords.length > 0 && (
              <div className="mt-20 pt-8 border-t border-[#171717]/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#808080] mb-4">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {blog.keywords.map((kw, i) => (
                    <span key={i} className="bg-[#fbfbfd] border border-[#171717]/10 px-4 py-2 rounded-full text-xs font-bold text-[#808080] capitalize hover:text-[#11123A] hover:border-[#11123A]/30 transition-colors cursor-pointer">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-20 bg-[#11123A] rounded-[32px] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ffffff]/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tight text-[#ffffff] mb-4">Ready to invest smartly?</h3>
                <p className="text-[#ffffff]/70 font-medium mb-8">Speak with our advisors to find the perfect plot for your future.</p>
                <a href="tel:9019800009" className="inline-flex items-center justify-center gap-3 bg-[#ffffff] text-[#11123A] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
                  Consult an Advisor <ArrowRight size={16}/>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </article>
  );
}
