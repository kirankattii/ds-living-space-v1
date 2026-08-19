import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { getAllBlogs } from '@/lib/blog';
import FadeIn from '@/components/shared/FadeIn';

export const metadata: Metadata = {
  title: "Why Investing in Villa Plots in Bangalore is Smart in 2026 | DS Living Spaces",
  description: "Learn why villa plots in Bangalore are the best investment option in 2026. High ROI and future growth.",
  openGraph: {
    title: "Villa Plots Investment Guide",
    description: "Complete guide to investing in plots in Bangalore.",
    images: ["/blog.png"],
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogListingPage() {
  const blogs = getAllBlogs();
  const featuredPost = blogs[0];
  const recentPosts = blogs.slice(1);

  return (
    <div className="w-full pt-24 md:pt-32 pb-20 bg-[#fbfbfd]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* HEADER */}
        <FadeIn className="mb-12 md:mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-[80px] font-black tracking-tighter leading-none text-[#11123A] mb-6">
            The Journal.
          </h1>
          <p className="text-xl text-[#808080] font-medium leading-relaxed">
            Expert insights, market analysis, and lifestyle guides to help you make informed real estate decisions.
          </p>
        </FadeIn>

        {/* FEATURED POST (Hero Layout) */}
        {featuredPost && (
          <FadeIn className="mb-20">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center group"
            >
              <div className="w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center pr-0 lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#11123A] text-[#ffffff] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {featuredPost.category}
                  </span>
                  <span className="text-[#808080] text-xs font-bold flex items-center gap-1">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] text-[#171717] mb-6 group-hover:text-[#11123A] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[#808080] font-medium text-lg leading-relaxed mb-8">
                  {featuredPost.meta_description}
                </p>
                <div className="flex items-center gap-2 text-[#11123A] font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* RECENT POSTS GRID */}
        <FadeIn>
          <h3 className="text-2xl font-black tracking-tight text-[#171717] mb-10 border-b border-[#171717]/10 pb-4">
            Latest Articles
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {recentPosts.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1} className="flex flex-col group">
              <Link href={`/blog/${post.slug}`}>
                <div className="w-full h-[240px] rounded-[24px] overflow-hidden mb-6 shadow-sm border border-[#171717]/5 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#11123A] font-bold text-[10px] uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#808080]" />
                  <span className="text-[#808080] font-bold text-xs">{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight text-[#171717] leading-snug group-hover:text-[#11123A] transition-colors mb-3">
                  {post.title}
                </h4>
                <p className="text-[#808080] font-medium text-sm line-clamp-2">
                  {post.meta_description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
