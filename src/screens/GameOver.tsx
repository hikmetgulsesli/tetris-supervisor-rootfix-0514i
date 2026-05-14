// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play } from "lucide-react";


export type GameOverActionId = "play-again-1" | "share-result-2" | "exit-to-menu-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background Matrix / Final Board State Simulation */}
      <div className="absolute inset-0 z-0 opacity-20 cyber-grid-bg">
      {/* Simulated fallen blocks */}
      <div className="absolute bottom-0 left-[64px] w-[96px] h-[32px] bg-primary border border-outline-variant"></div>
      <div className="absolute bottom-[32px] left-[96px] w-[64px] h-[32px] bg-secondary border border-outline-variant"></div>
      <div className="absolute bottom-0 left-[192px] w-[32px] h-[128px] bg-tertiary border border-outline-variant"></div>
      <div className="absolute bottom-0 right-[128px] w-[64px] h-[64px] bg-surface-tint border border-outline-variant"></div>
      <div className="absolute bottom-[64px] right-[160px] w-[96px] h-[32px] bg-error border border-outline-variant"></div>
      </div>
      {/* Gradient Overlay to fade the board slightly */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background opacity-80"></div>
      {/* Main Game Over Card */}
      <main className="relative z-10 w-full max-w-md mx-margin bg-surface-container-low border border-outline-variant flex flex-col p-margin gap-margin shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-sm">
      {/* Header */}
      <div className="text-center">
      <h1 className="font-headline-lg text-headline-lg text-error neon-text-red uppercase tracking-widest">Game Over</h1>
      <p className="font-label-md text-label-md text-on-surface-variant mt-unit uppercase">System Halting...</p>
      </div>
      {/* High Score Banner */}
      <div className="bg-error-container border border-error py-unit px-unit text-center flex items-center justify-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-error-container uppercase tracking-widest">New High Score</span>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-[1px] bg-outline-variant border border-outline-variant">
      {/* Final Score (Full Width) */}
      <div className="col-span-2 bg-surface p-margin flex flex-col items-center justify-center">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase mb-unit">Final Score</span>
      <span className="font-headline-lg text-headline-lg text-primary tracking-tighter">094,230</span>
      </div>
      {/* Max Level */}
      <div className="bg-surface p-unit flex flex-col items-center justify-center py-margin">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase mb-unit">Max Level</span>
      <span className="font-headline-md text-headline-md text-secondary tracking-tighter">14</span>
      </div>
      {/* Total Lines */}
      <div className="bg-surface p-unit flex flex-col items-center justify-center py-margin">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase mb-unit">Total Lines</span>
      <span className="font-headline-md text-headline-md text-tertiary tracking-tighter">142</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-unit mt-unit">
      <button className="w-full bg-primary text-on-primary border border-primary font-label-md text-label-md uppercase py-3 hover:bg-transparent hover:text-primary neon-border-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Play aria-hidden={true} focusable="false" />
                      Play Again
                  </button>
      <div className="grid grid-cols-2 gap-unit">
      <button className="bg-surface-variant text-on-surface-variant border border-outline-variant font-label-md text-label-md uppercase py-3 hover:bg-surface-bright hover:text-primary transition-colors flex items-center justify-center gap-2" type="button" data-action-id="share-result-2" onClick={actions?.["share-result-2"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                          Share Result
                      </button>
      <button className="bg-transparent text-on-surface-variant border border-outline-variant font-label-md text-label-md uppercase py-3 hover:border-error hover:text-error transition-colors flex items-center justify-center gap-2" type="button" data-action-id="exit-to-menu-3" onClick={actions?.["exit-to-menu-3"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
                          Exit to Menu
                      </button>
      </div>
      </div>
      {/* Decorative Bottom Element */}
      <div className="flex justify-center mt-unit">
      <div className="w-1/3 h-1 bg-outline-variant"></div>
      </div>
      </main>
    </>
  );
}
