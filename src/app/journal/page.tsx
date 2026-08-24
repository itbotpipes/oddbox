import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { journalPosts } from "@/data/journal";

export default function JournalPage() {
  const featuredPost = journalPosts[0];
  const listPosts = journalPosts.slice(1);

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16 px-6 md:pt-44 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Metadata */}
          <div className="border-b border-[#E6E4DD]/60 pb-12 mb-16">
            <span className="font-sans text-[10px] tracking-widest text-[#707070] uppercase">
              Stories & Insights
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#111] tracking-tight mt-4 uppercase">
              JOURNAL
            </h1>
          </div>

          {/* 01: Featured Article Spotlights */}
          {featuredPost && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="lg:col-span-7 relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-8">
                <span className="font-sans text-xs tracking-widest text-[#707070] uppercase">
                  Featured · {featuredPost.category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#111] tracking-tight hover:underline">
                  <Link href={`/journal/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="font-sans text-sm text-[#707070] leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-xs font-sans text-[#707070]">
                  <span>By {featuredPost.author}</span>
                  <span>·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/journal/${featuredPost.slug}`}
                  className="inline-block self-start px-6 py-3 bg-[#111] text-[#FAF9F5] text-xs font-sans tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                >
                  READ STORY ↗
                </Link>
              </div>
            </div>
          )}

          {/* 02: Secondary Articles List */}
          {listPosts.length > 0 && (
            <div className="border-t border-[#E6E4DD] pt-16">
              <h2 className="font-serif text-3xl text-[#111] mb-12">More Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {listPosts.map((post) => (
                  <article key={post.slug} className="flex flex-col">
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden mb-6">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover"
                      />
                    </div>
                    <span className="font-sans text-[10px] text-[#707070] tracking-widest uppercase mb-2 block">
                      {post.category} · {post.date}
                    </span>
                    <h3 className="font-serif text-2xl text-[#111] mb-4 hover:underline">
                      <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="font-sans text-xs text-[#707070] leading-relaxed font-light mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="font-sans text-[10px] text-[#111] tracking-widest uppercase hover:underline self-start font-medium"
                    >
                      READ STORY ↗
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <SiteFooter />
    </>
  );
}
