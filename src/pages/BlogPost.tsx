import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Clock,
  ListChecks,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { blogPosts, type BlogContentBlock } from "@/data/blogs";

const siteUrl = "https://socialbuzzz18.in";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getHeadingId = (text: string, idx: number) =>
  `section-${idx}-${slugify(text)}`;

const renderContentBlock = (block: BlogContentBlock, idx: number) => {
  if (block.type === "heading") {
    if (block.level === 3) {
      return (
        <h3
          key={idx}
          id={getHeadingId(block.text, idx)}
          className="scroll-mt-28 pt-5 text-xl md:text-2xl font-semibold leading-tight tracking-normal text-foreground"
        >
          {block.text}
        </h3>
      );
    }

    return (
      <h2
        key={idx}
        id={getHeadingId(block.text, idx)}
        className="scroll-mt-28 pt-10 text-2xl md:text-3xl font-semibold leading-tight tracking-normal text-foreground"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={idx}
        className="space-y-3 text-base md:text-lg text-muted-foreground leading-[1.8]"
      >
        {block.items.map((item) => (
          <li key={`${idx}-${item}`} className="flex gap-3">
            <CheckCircle2
              className="mt-1 h-5 w-5 shrink-0 text-brand-cyan"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={idx}
      className="text-base md:text-lg text-muted-foreground leading-[1.8] md:leading-[1.85]"
    >
      {block.text}
    </p>
  );
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription ?? post.excerpt,
        image: post.image,
        datePublished: post.publishedAt,
        articleSection: post.category,
        keywords: post.tags?.join(", "),
        author: {
          "@type": "Organization",
          name: "Social Buzzz",
        },
        publisher: {
          "@type": "Organization",
          name: "Social Buzzz",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/IMG_0210.JPG`,
          },
        },
      }
    : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Blog not found</h1>
            <p className="text-muted-foreground mb-6">
              This article doesn't exist or may have been removed.
            </p>
            <button
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blogs
            </button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  const headingLinks = post.content.flatMap((block, index) =>
    block.type === "heading"
      ? [
          {
            id: getHeadingId(block.text, index),
            text: block.text,
          },
        ]
      : []
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle ?? post.title}</title>
        <meta name="description" content={post.metaDescription ?? post.excerpt} />
        <meta property="og:title" content={post.metaTitle ?? post.title} />
        <meta property="og:description" content={post.metaDescription ?? post.excerpt} />
        <meta property="og:url" content={`${siteUrl}/blogs/${post.id}`} />
        <meta property="og:image" content={post.image} />
        {post.publishedAt && (
          <meta property="article:published_time" content={post.publishedAt} />
        )}
        <meta property="article:section" content={post.category} />
        {post.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        {post.tags?.length ? (
          <meta name="keywords" content={post.tags.join(", ")} />
        ) : null}
        <meta name="twitter:title" content={post.metaTitle ?? post.title} />
        <meta name="twitter:description" content={post.metaDescription ?? post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        )}
      </Helmet>
      <Navbar />

      <article className="overflow-hidden">
        <section className="relative flex min-h-[620px] items-end overflow-hidden md:min-h-[700px]">
          <motion.img
            src={post.image}
            alt={post.imageAlt ?? post.title}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/25 to-transparent" />

          <div className="relative z-10 w-full px-4 pb-12 pt-32 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-6xl"
            >
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-background/45 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Blogs
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-lg border border-brand-cyan/30 bg-brand-cyan/15 px-3 py-1.5 text-xs font-semibold uppercase text-brand-cyan">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/80">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/80">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-normal text-white md:text-6xl lg:text-7xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-xl">
                {post.excerpt}
              </p>

              {post.tags?.length ? (
                <div className="mt-8 flex max-w-4xl flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,760px)] lg:items-start">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l border-border pl-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <ListChecks className="h-4 w-4 text-brand-cyan" />
                  In this article
                </div>
                <nav className="space-y-2">
                  {headingLinks.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>

                {post.tags?.length ? (
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase text-muted-foreground">
                      Focus
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="min-w-0"
            >
              <div className="mb-10 grid gap-4 border-y border-border py-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Published
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {post.date}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Reading Time
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {post.readTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Category
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {post.category}
                  </p>
                </div>
              </div>

              <div className="space-y-7">{post.content.map(renderContentBlock)}</div>

              <div className="mt-16 border-t border-border pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ChevronLeft className="h-4 w-4" /> All Blogs
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-cyan transition-colors hover:text-foreground"
                  >
                    Back to Home <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </article>

      <FooterSection />
    </div>
  );
};

export default BlogPost;
