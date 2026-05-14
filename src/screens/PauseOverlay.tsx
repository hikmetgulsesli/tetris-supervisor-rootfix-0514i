// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "main-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Game Board Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="A highly detailed, top-down view of an intense cyberpunk arcade game board featuring glowing neon grids, fast-moving digital entities, and complex technical telemetry overlays. The environment is dark and moody, illuminated purely by the harsh cyan, green, and red light-emitting diodes from the game interface. The aesthetic is strictly technical minimalism mixed with retro-futuristic arcade energy, showcasing sharp geometric shapes and a high-contrast visual hierarchy." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQZDPOYqtgQTBdK_OEApCcxUmZhLQK7rHc54zyitv6wycGRwMSAgTYRftq0QwW1poiBxTYqCUIJjtDsn_I-4oSsMLLSn8IQHlpyYAZmY-lTE2Z7Uc3tmVq2oIeeOfH3VoIO4nViIT8zyqMVFhTDelKjWngeWxA2gNt1v3y1xNv_86Ba_7rHKzUPXzrrs-_i3EV0ADlEykd7e7Obj67pl8VNT9NfCbp-Nnb-6Uwql8Np9qEFK50CWIXdctPNn92v4r4oLbo-IkAvhQn')"}}>
      </div>
      {/* Pause Overlay Backdrop */}
      <div className="absolute inset-0 z-10 bg-background/85 backdrop-blur-md flex items-center justify-center p-gutter">
      {/* Modal Container (Cyber-Grid Styled) */}
      <div className="relative w-full max-w-sm bg-surface-container-lowest border border-outline-variant flex flex-col shadow-2xl before:absolute before:-top-[1px] before:-left-[1px] before:w-4 before:h-4 before:border-t-2 before:border-l-2 before:border-primary after:absolute after:-bottom-[1px] after:-right-[1px] after:w-4 after:h-4 after:border-b-2 after:border-r-2 after:border-primary">
      {/* Header Section */}
      <div className="flex items-center justify-between p-margin border-b border-outline-variant">
      <h1 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(76,215,246,0.3)]">
                          Paused
                      </h1>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-[32px] animate-pulse" aria-hidden={true} focusable="false" />
      </div>
      {/* Stats Summary Section */}
      <div className="p-margin grid grid-cols-2 gap-gutter bg-surface-container/50">
      <div className="flex flex-col gap-unit">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Current Score</span>
      <span className="font-label-md text-[24px] text-secondary leading-none">004,815,162</span>
      </div>
      <div className="flex flex-col gap-unit">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Level</span>
      <span className="font-label-md text-[24px] text-primary leading-none">042</span>
      </div>
      </div>
      {/* Divider (Replaces Zebra Striping/Shadows) */}
      <div className="h-px w-full bg-outline-variant"></div>
      {/* Actions Section */}
      <div className="p-margin flex flex-col gap-unit*2 gap-3">
      {/* Resume Button (Primary) */}
      <button className="w-full py-3 px-4 bg-primary border border-primary text-on-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary-fixed hover:drop-shadow-[0_0_12px_rgba(76,215,246,0.6)] transition-colors duration-200 flex items-center justify-center gap-2 group" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play className="group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
                          Resume
                      </button>
      {/* Restart Button (Secondary) */}
      <button className="w-full py-3 px-4 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md uppercase tracking-widest hover:border-error hover:text-error hover:bg-error/10 transition-colors duration-200 flex items-center justify-center gap-2" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* Main Menu Button (Secondary) */}
      <button className="w-full py-3 px-4 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md uppercase tracking-widest hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center gap-2" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Main Menu
                      </button>
      </div>
      {/* Controls Hint Footer */}
      <div className="bg-surface-variant/30 border-t border-outline-variant p-4 flex justify-center items-center gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant opacity-80">
                          PRESS <kbd className="px-1.5 py-0.5 border border-outline-variant rounded-sm bg-surface-container text-on-surface mx-1">ESC</kbd> TO RESUME
                      </span>
      </div>
      </div>
      </div>
    </>
  );
}
