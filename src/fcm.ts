// src/fcm.ts
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

import { onMessage } from "firebase/messaging";

const VAPID_KEY = "BOtSCS5Q6hNW5YnXGDR45eEsp6fArFlktV2PbQjRMfexa5KgGPESdzztwpDjKdYdwaJ0bL2imwLVrGV5vPvrpnY";

export const getFcmToken = async (): Promise<string | null> => {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
            console.warn("알림 권한이 없습니다.");
            return null;
        }

        const token = await getToken(messaging, { vapidKey: VAPID_KEY });
        console.log("FCM 디바이스 토큰:", token);
        return token;
    } catch (err) {
        console.error("FCM 토큰 요청 실패:", err);
        return null;
    }
};



export const listenToForegroundMessages = () => {
    onMessage(messaging, (payload) => {
        console.log("✅ FCM 메시지 수신됨 (포그라운드):", payload);

        // 예: 커스텀 알림 띄우기
        alert(`${payload.notification?.title}\n${payload.notification?.body}`);
    });
};
