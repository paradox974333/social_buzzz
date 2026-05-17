import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { blogPosts } from "@/data/blogs";

const siteUrl = "https://socialbuzzz18.in";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `${siteUrl}${post.image}`,
        datePublished: post.date,
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} — Social Buzzz Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} — Social Buzzz Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`${siteUrl}/blogs/${post.id}`} />
        <meta property="og:image" content={`${siteUrl}${post.image}`} />
        <meta name="twitter:title" content={`${post.title} — Social Buzzz Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`${siteUrl}${post.image}`} />
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        )}
      </Helmet>
      <Navbar />

      <article>
        {/* Hero Image with cinematic zoom */}
        <div className="relative h-[45vh] md:h-[60vh] overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 -mt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back link */}
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Blogs
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-4 mt-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              {post.title}
            </h1>

            {/* Body with improved readability */}
            <div className="space-y-7 text-base md:text-lg text-muted-foreground leading-[1.8] md:leading-[1.85]">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-2xl first-letter:md:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider with decorative element */}
            <div className="mt-16 mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </div>

            {/* Footer nav */}
            <div className="mb-16 flex items-center justify-between">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" /> All Blogs
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-primary hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Spacer before footer */}
      <div className="h-24" />

      <FooterSection />
    </div>
  );
};

export default BlogPost;
