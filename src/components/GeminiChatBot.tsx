import React, { useState, useEffect, useRef } from "react";

// NOTE: Replace with your actual API key
const GEMINI_API_KEY = "AIzaSyCHC9dGJRtM5Xep5ifdxAr-9IaE1AbbFDk";

const KNOWLEDGE_BASE = `
You are the official AI assistant for Social Buzzz. 
STRICT RULE: Never use markdown bolding like **text** or __text__ in your responses. Use plain text only.

About Social Buzzz:
Our tagline, "Being consistent = Growth," truly encapsulates our approach to digital marketing. We specialize in empowering clothing brands, retail businesses, and entrepreneurs to thrive in the digital landscape.

Services:
1. Complete Account Management: End-to-end handling, 6 professional reels per month with voice-overs, festival posters, brand-aligned posts.
2. Content Strategy for Fashion Brands: Self-shot authenticity, professional editing, trending music, and meticulous hashtag research.
3. Full Production Service: Professional cameraman, on-camera talent, and complete video production from concept to final cut.
4. Website Development & SEO: Modern, responsive websites optimized for conversion and integrated SEO.

Proven Track Record: 
Shanta Kadlis Collection, Nayana Collection, House of Aadya Sarees, Laxmi Saree Centre, B. Nagesh Wholesale Sarees, Aaradhya Collection, Medini Fashions, and Advika Fashion.

Contact Info:
- Instagram: @social_buzzz18
- Phone/WhatsApp: 9110441250
`;

export default function SocialBuzzModernChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Welcome to Social Buzzz. Ready to grow your brand? ✨" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to clean markdown bolding
  const cleanText = (text: string) => text.replace(/\*\*/g, "").replace(/__/g, "");

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setShowGreeting(false);

    // Placeholder for streaming bot message
    setMessages((prev) => [...prev, { role: "bot", text: "" }]);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: `${KNOWLEDGE_BASE}\nUser: ${input}` }] }],
          }),
        }
      );

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");
          
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const json = JSON.parse(line.substring(6));
                const textChunk = json.candidates?.[0]?.content?.parts?.[0]?.text || "";
                fullText += textChunk;
                
                // Update the last message (bot) with cleaned streaming text
                setMessages((prev) => {
                  const newMsgs = [...prev];
                  newMsgs[newMsgs.length - 1].text = cleanText(fullText);
                  return newMsgs;
                });
              } catch (e) {
                // Ignore parse errors for partial chunks
              }
            }
          }
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Oops! I hit a snag. Please call us at 9110441250." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[99999] font-sans antialiased">
      
      {/* Aesthetic Initial Greeting */}
      {showGreeting && !isOpen && (
        <div className="absolute bottom-20 left-0 w-64 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-2xl relative">
            <button 
              onClick={() => setShowGreeting(false)}
              className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center hover:scale-110 transition-transform"
            >✕</button>
            <p className="text-gray-800 text-sm font-medium leading-relaxed">
              Ready to create some buzz? May I help you grow your brand? 🚀
            </p>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/80 backdrop-blur-xl border-r border-b border-white/40 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowGreeting(false);
        }}
        className={`w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 border border-white/30 ${
          isOpen ? "bg-black rotate-90" : "bg-gradient-to-tr from-blue-600 to-indigo-500"
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <span className="text-3xl animate-pulse">🐝</span>
        )}
      </button>

      {/* Modern Glassmorphic Window */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[88vw] sm:w-[400px] h-[70vh] sm:h-[550px] bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-500">
          
          {/* Header */}
          <div className="p-6 pb-4 flex items-center gap-4 bg-gradient-to-b from-white/40 to-transparent">
            <div className="relative">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                <span className="text-2xl">🐝</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="text-black font-extrabold text-lg tracking-tight">Social Buzzz AI</h3>
              <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">Always Consistent</p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in duration-300`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-black text-white rounded-3xl rounded-tr-none shadow-xl shadow-black/10"
                      : "bg-white/60 text-gray-800 rounded-3xl rounded-tl-none border border-white/50 backdrop-blur-sm shadow-sm"
                  }`}
                >
                  {m.text}
                  {m.role === "bot" && m.text === "" && (
                    <div className="flex gap-1 py-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 pt-2 bg-gradient-to-t from-white/60 to-transparent">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white rounded-2xl p-1.5 shadow-inner transition-all focus-within:ring-2 ring-blue-500/20">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Message Social Buzzz..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 text-sm px-4 py-2 placeholder:text-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !input.trim()}
                className="bg-black hover:bg-gray-800 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-20 active:scale-90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[9px] text-gray-400 mt-4 font-medium tracking-widest uppercase">
              Powered by Social Buzzz Excellence
            </p>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-bottom { from { transform: translateY(20px); } to { transform: translateY(0); } }
        
        .animate-in {
          animation: fade-in 0.4s ease-out forwards, slide-in-bottom 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}