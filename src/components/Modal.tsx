"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  // 헤더의 backdrop-blur 안에서는 fixed 위치가 틀어지므로 body 에 직접 띄운다
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="pop-in relative w-full max-w-sm rounded-3xl border border-card-border bg-space p-6 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-xl text-dim hover:text-milk"
          aria-label="닫기"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
