import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const sectionLinks = [
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => {
            setOpen(false);
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tight text-foreground"
        >
          social<span className="text-primary">_buzzz18</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/blogs");
            }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              location.pathname === "/blogs"
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            Blogs
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
          >
            <div className="px-4 py-3 space-y-1">
              {sectionLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleSectionClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/blogs");
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  location.pathname === "/blogs"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                Blogs
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
