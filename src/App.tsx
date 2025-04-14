// src/App.tsx
import { useEffect } from "react";
import {getFcmToken, listenToForegroundMessages} from "./fcm";

function App() {
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getFcmToken();
      if (token) {
        // 백엔드에 전송 (예: POST /api/device-token)
        await fetch("/api/device-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
      }
    };

    fetchToken();
    listenToForegroundMessages();
  }, []);

  return <div>FCM Push 알림 테스트</div>;
}

export default App;
