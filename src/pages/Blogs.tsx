import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import { blogPosts } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Blogs</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and strategies to help your brand grow on social
              media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blogs/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title & Excerpt */}
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blogs;
