/** 브라우저 내장 TTS 로 영어 읽어주기 (무료, 서버 불필요) */

let cachedVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  const voices = window.speechSynthesis.getVoices();
  const en = voices.filter((v) => v.lang.startsWith("en"));
  cachedVoice =
    en.find((v) => /Google US English|Samantha|Aria|Jenny/i.test(v.name)) ??
    en.find((v) => v.lang === "en-US") ??
    en[0] ??
    null;
  return cachedVoice;
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, rate = 0.9) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  const voice = pickVoice();
  if (voice) u.voice = voice;
  synth.speak(u);
}
