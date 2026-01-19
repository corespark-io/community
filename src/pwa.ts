import { registerSW } from "virtual:pwa-register";

// Only run this on the client
if (typeof window !== "undefined") {
  // Wait for the browser to be fully ready
  window.addEventListener("load", () => {
    registerSW({
      immediate: false,

      onRegisteredSW(swScriptUrl) {
        console.log("SW registered: ", swScriptUrl);
      },
      onOfflineReady() {
        console.log("PWA application ready to work offline");
      },
      onRegisterError(error) {
        console.error("SW registration failed", error);
      },
    });
  });
}
