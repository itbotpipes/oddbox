"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { journalPosts } from "@/data/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function JournalPostDetails({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <CustomCursor />
      <SiteHeader />

      <main className="w-full bg-[#FAF9F5] select-none min-h-screen pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          
          {/* Metadata & Headline */}
          <div className="text-center mb-12">
            <span className="font-sans text-xs tracking-widest text-[#707070] uppercase">
              {post.category} · {post.date}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111] tracking-tight mt-6 mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex justify-center items-center space-x-4 text-xs font-sans text-[#707070]">
              <span>Written by {post.author}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Large Representative Image */}
          <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden mb-16">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
            />
          </div>

          {/* Rendered HTML content flow */}
          <div
            className="prose prose-neutral max-w-2xl mx-auto font-sans text-base text-[#111]/85 leading-relaxed font-light space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back Action */}
          <div className="max-w-2xl mx-auto border-t border-[#E6E4DD] mt-16 pt-8 text-center">
            <Link
              href="/journal"
              className="inline-block font-sans text-xs tracking-widest text-[#111] uppercase hover:underline"
            >
              ← Back to Journal
            </Link>
          </div>

        </article>
      </main>

      <SiteFooter />
    </>
  );
}
