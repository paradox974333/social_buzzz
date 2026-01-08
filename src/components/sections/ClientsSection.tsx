// ClientsSection.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Users, Eye, TrendingUp, ExternalLink } from "lucide-react";

/* -------------------------------
   Types
---------------------------------*/
interface Client {
  handle: string;         // display handle
  igHandleForUrl: string; // instagram handle used for the profile link (without @)
  posts: string[];        // full Instagram post/reel URLs (public)
  followers?: string;
  reach?: string;
  engagement?: string;
}

/* -------------------------------
   Data
---------------------------------*/
const clients: Client[] = [
  {
    handle: "@shanta_kadlis_collection",
    igHandleForUrl: "shanta_kadlis_collection",
    followers: "10K+",
    reach: "25K",
    engagement: "8.5%",
    posts: [
      "https://www.instagram.com/reel/DTKUebmkqI2/",
    ]
  },
  {
    handle: "@nayana_collection",
    igHandleForUrl: "nayana_collection_",
    followers: "3.9K+",
    reach: "22K",
    engagement: "7.8%",
    posts: [
      "https://www.instagram.com/reel/DTIaPg-khVb/",
      "https://www.instagram.com/reel/DTNjnRIEkPU/"
    ]
  },
  {
    handle: "@houseof.aadya_sarees",
    igHandleForUrl: "houseof.aadhya_sarees",
    followers: "—",
    reach: "—",
    engagement: "—",
    posts: [
      "https://www.instagram.com/houseof.aadya_sarees?igsh=MWpyYzU0OXJpd3kxZw==",
      "https://www.instagram.com/reel/DTMx2pvERdo/?igsh=MW1oa2oxc3M5MDBtdw=="
    ]
  },
  {
    handle: "@laxmi_saree_centre_klb",
    igHandleForUrl: "lakshmi_saree_centre_0",
    followers: "—",
    reach: "—",
    engagement: "—",
    posts: [
      "https://www.instagram.com/laxmi_saree_centre_klb?igsh=MW00MHFjd3lhbzQ2cA==",
      "https://www.instagram.com/reel/DTDMG3lAnhH/?igsh=NXNmMWJieGpiY3V3"
    ]
  },
  {
    handle: "@b.nagesh_wholesale_sarees",
    igHandleForUrl: "b.nagesh_wholesale_sarees",
    followers: "4K+",
    reach: "—",
    engagement: "—",
    posts: [
      "https://www.instagram.com/b.nagesh_wholesale_sarees?igsh=aGtmOWVmOWtxaDA%3D&utm_source=qr",
      "https://www.instagram.com/reel/DRtjC4wgY16/"
    ]
  },
  {
    handle: "@aaradhya_collection70",
    igHandleForUrl: "aaradhya_collection70",
    followers: "4K+",
    reach: "—",
    engagement: "—",
    posts: [
      "https://www.instagram.com/aaradhya_collection70?igsh=ZG5zc3ptb2g2MWsy",
      "https://www.instagram.com/reel/DSZUJ3KEaPV/"
      
    ]
  }
];

/* -------------------------------
   Component
---------------------------------*/
const ClientsSection: React.FC = () => {
  
  // Optimized Script Loading Logic
  useEffect(() => {
    const processEmbeds = () => {
      try {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      } catch (e) {
        console.error("Instagram process error:", e);
      }
    };

    if (!(window as any).instgrm) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.defer = true;
      s.onload = () => {
        // Slight delay to ensure DOM is ready
        setTimeout(processEmbeds, 500);
      };
      document.body.appendChild(s);
    } else {
      // If script exists, re-process directly
      processEmbeds();
    }
  }, []); // Run once on mount

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Our Happy Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our clients are growing their business with our collection. 
            Live Instagram updates from their profiles.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, cIdx) => (
            <motion.div
              key={`${client.handle}-${cIdx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: cIdx * 0.1, duration: 0.5 }}
              className="h-full" 
            >
              <Card className="h-full flex flex-col bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300 border-slate-200 dark:border-slate-800">
                
                {/* 1. Header */}
                <CardHeader className="pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-sm">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div className="overflow-hidden">
                      <CardTitle className="text-base font-bold truncate" title={client.handle}>
                        {client.handle}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground truncate">
                        Instagram Business
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col pt-6 gap-6">
                  
                  {/* 2. Media Area: Scrollable 
                      Updated: Increased height and improved scrollbar visibility 
                  */}
                  <div className="flex-1 min-h-[450px] max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent rounded-md bg-slate-50 dark:bg-black/20">
                    <div className="flex flex-col gap-4 p-1">
                      {client.posts.map((postUrl, pIdx) => (
                        <div 
                          key={`${client.handle}-post-${pIdx}`} 
                          className="w-full flex justify-center bg-white dark:bg-black rounded border border-slate-100 dark:border-slate-800 overflow-hidden relative min-h-[300px]"
                        >
                          <blockquote
                            className="instagram-media"
                            data-instgrm-permalink={postUrl}
                            data-instgrm-version="14"
                            style={{ 
                              background: "white", 
                              border: "0", 
                              borderRadius: "3px", 
                              boxShadow: "none", 
                              margin: "1px", 
                              maxWidth: "540px", 
                              minWidth: "326px", 
                              padding: "0", 
                              width: "calc(100% - 2px)" 
                            }}
                          >
                            {/* Fallback link if JS fails */}
                            <div className="p-4 text-center">
                              <a href={postUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                                View on Instagram
                              </a>
                            </div>
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Footer: Stats & Button */}
                  <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                        <Users className="h-4 w-4 text-blue-600 mb-1" />
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Followers</span>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{client.followers || "—"}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                        <Eye className="h-4 w-4 text-green-600 mb-1" />
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Reach</span>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{client.reach || "—"}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                        <TrendingUp className="h-4 w-4 text-purple-600 mb-1" />
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Engage</span>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{client.engagement || "—"}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="w-full gap-2 font-medium" 
                      variant="outline"
                      asChild
                    >
                      <a
                        href={`https://www.instagram.com/${client.igHandleForUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Profile <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;