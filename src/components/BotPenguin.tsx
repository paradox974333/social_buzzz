import { useEffect } from "react";

const BotPenguin = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "messenger-widget-b";
    script.src = "https://cdn.botpenguin.com/website-bot.js";
    script.defer = true;
    script.innerHTML = "6964d5ea4e348154ec6a8bfa,6964d5d5cd387dee09f92915";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default BotPenguin;
