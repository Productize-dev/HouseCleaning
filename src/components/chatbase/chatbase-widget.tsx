import Script from "next/script";

const CHATBOT_ID =
  process.env.NEXT_PUBLIC_CHATBOT_ID ?? "lwfY2PMneyQBR446boCf-";

const chatbaseBootstrap = `
(function(){
  if(!window.chatbase||window.chatbase("getState")!=="initialized"){
    window.chatbase=(...arguments)=>{
      if(!window.chatbase.q){window.chatbase.q=[]}
      window.chatbase.q.push(arguments)
    };
    window.chatbase=new Proxy(window.chatbase,{
      get(target,prop){
        if(prop==="q"){return target.q}
        return(...args)=>target(prop,...args)
      }
    })
  }
  const onLoad=function(){
    const script=document.createElement("script");
    script.src="https://www.chatbase.co/embed.min.js";
    script.id="${CHATBOT_ID}";
    script.domain="www.chatbase.co";
    document.body.appendChild(script)
  };
  if(document.readyState==="complete"){onLoad()}
  else{window.addEventListener("load",onLoad)}
})();
`;

export function ChatbaseWidget() {
  return (
    <Script
      id="chatbase-bootstrap"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: chatbaseBootstrap }}
    />
  );
}
