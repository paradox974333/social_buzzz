const host = "socialbuzzz18.in";
const key = "54f23364-7fc0-4726-a0b7-a927e36fc82f";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/blogs`,
  `https://${host}/blogs/1`,
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  }),
});

if (!response.ok && response.status !== 202) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
}

console.log(`IndexNow submission accepted for ${urlList.length} URLs.`);
