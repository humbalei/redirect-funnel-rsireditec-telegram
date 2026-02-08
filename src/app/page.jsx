"use client";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const userAgent = navigator.userAgent || "";
        const isAndroid = /android/i.test(userAgent);
        const isIOS = /iphone|ipad|ipod/i.test(userAgent);
        const tgLink = "sdsda";
        if (tgLink) {
            if (isAndroid || isIOS) {
                window.location.href = tgLink;
            } else {
                window.location.href = tgLink.replace("tg://resolve", "https://t.me");
            }
        }
    }, []);

    return (
        <main style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",background:"#0f0f0f",color:"#fff"}}>
            <div style={{textAlign:"center"}}>
                <img src="/profile.jpg" alt="profile" style={{width:120,height:120,borderRadius:"50%",objectFit:"cover"}} />
                <h1>Rsireditec</h1>
                <p>🤯🤯 Personal trainer in [loc] and Dubai and 🇫🇷 Paris I'm obsessed with hugs, travel and fittness 💪🌴💗</p>
                <a href="sdsda" style={{display:"inline-block",marginTop:16,padding:"12px 32px",background:"#0088cc",color:"#fff",borderRadius:8,textDecoration:"none",fontWeight:"bold"}}>
                    Open Telegram
                </a>
            </div>
        </main>
    );
}
