// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, Circle, CircleUserRound, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "button-6-6" | "button-7-7" | "hard-drop-8";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar (Shared Component) */}
      <header className="bg-background dark:bg-background text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full h-16 px-margin max-w-container-max mx-auto z-50 sticky">
      <div className="flex items-center">
      <span className="font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-primary uppercase">CYBER_BLOCKS</span>
      <span className="ml-4 px-2 py-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md border border-secondary flex items-center gap-1 rounded-sm uppercase">
      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      ACTIVE
                  </span>
      </div>
      {/* Navigation Suppressed for active gameplay as per rules, showing only trailing actions */}
      <div className="flex gap-4">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-2 rounded-sm active:opacity-80 active:scale-95 flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-2 rounded-sm active:opacity-80 active:scale-95 flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-2 rounded-sm active:opacity-80 active:scale-95 flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 max-w-container-max mx-auto w-full relative">
      {/* Main Canvas Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-margin px-gutter overflow-y-auto">
      <div className="flex flex-col md:flex-row items-start justify-center gap-margin w-full max-w-4xl">
      {/* Left Panel: HOLD */}
      <div className="flex flex-col gap-unit w-full md:w-48 order-2 md:order-1">
      <div className="bg-surface-container-low border border-outline-variant rounded-sm p-4 flex flex-col h-full">
      <div className="border-b border-outline-variant pb-2 mb-4">
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">HOLD</h2>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-[120px] bg-surface-dim border border-surface-variant relative cyber-grid">
      {/* Example Held Piece (I Piece) */}
      <div className="grid grid-cols-4 gap-[1px] p-2">
      <div className="w-6 h-6 block-cyan"></div>
      <div className="w-6 h-6 block-cyan"></div>
      <div className="w-6 h-6 block-cyan"></div>
      <div className="w-6 h-6 block-cyan"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Center Panel: Game Board */}
      <div className="flex flex-col order-1 md:order-2">
      {/* Game Board Container: 10x20 aspect ratio conceptually, scaled to fit */}
      <div className="bg-surface-container-lowest border-2 border-outline cyber-grid relative p-[1px] w-full max-w-[320px] mx-auto aspect-[1/2] shadow-[0_0_15px_rgba(76,215,246,0.1)]">
      {/* Grid layout simulating 10 columns */}
      <div className="grid grid-cols-10 gap-[1px] w-full h-full">
      {/* Empty cells (conceptually) */}
      {/* Row 1-17 Empty for visual clarity in this static mockup, filling bottom */}
      <div className="col-span-10 row-span-17"></div>
      {/* Simulating placed blocks at the bottom */}
      {/* Row 18 */}
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square block-red"></div>
      <div className="w-full aspect-square block-red"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square block-orange"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      {/* Row 19 */}
      <div className="w-full aspect-square block-blue"></div>
      <div className="w-full aspect-square block-blue"></div>
      <div className="w-full aspect-square block-blue"></div>
      <div className="w-full aspect-square block-red"></div>
      <div className="w-full aspect-square block-red"></div>
      <div className="w-full aspect-square block-green"></div>
      <div className="w-full aspect-square block-green"></div>
      <div className="w-full aspect-square block-orange"></div>
      <div className="w-full aspect-square block-orange"></div>
      <div className="w-full aspect-square border border-outline-variant/30"></div>
      {/* Row 20 */}
      <div className="w-full aspect-square block-blue"></div>
      <div className="w-full aspect-square block-purple"></div>
      <div className="w-full aspect-square block-purple"></div>
      <div className="w-full aspect-square block-purple"></div>
      <div className="w-full aspect-square block-yellow"></div>
      <div className="w-full aspect-square block-yellow"></div>
      <div className="w-full aspect-square block-green"></div>
      <div className="w-full aspect-square block-green"></div>
      <div className="w-full aspect-square block-orange"></div>
      <div className="w-full aspect-square block-cyan"></div>
      {/* Active Falling Piece */}
      {/* Positioned absolutely for static mockup purposes */}
      <div className="absolute top-[30%] left-[40%] grid grid-cols-2 gap-[1px]">
      <div className="w-full aspect-square block-purple"></div>
      <div className="w-full aspect-square border border-transparent"></div>
      <div className="w-full aspect-square block-purple"></div>
      <div className="w-full aspect-square block-purple"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Panel: NEXT & Stats */}
      <div className="flex flex-col gap-margin w-full md:w-56 order-3 md:order-3">
      {/* NEXT Box */}
      <div className="bg-surface-container-low border border-outline-variant rounded-sm p-4">
      <div className="border-b border-outline-variant pb-2 mb-4">
      <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">NEXT</h2>
      </div>
      <div className="flex flex-col gap-2">
      {/* Next 1 */}
      <div className="flex items-center justify-center h-20 bg-surface-dim border border-surface-variant cyber-grid">
      <div className="grid grid-cols-2 gap-[1px]">
      <div className="w-5 h-5 block-yellow"></div>
      <div className="w-5 h-5 block-yellow"></div>
      <div className="w-5 h-5 block-yellow"></div>
      <div className="w-5 h-5 block-yellow"></div>
      </div>
      </div>
      {/* Next 2 (Smaller) */}
      <div className="flex items-center justify-center h-16 bg-surface-dim border border-surface-variant cyber-grid opacity-70">
      <div className="grid grid-cols-3 gap-[1px]">
      <div className="w-4 h-4 border border-transparent"></div>
      <div className="w-4 h-4 block-green"></div>
      <div className="w-4 h-4 block-green"></div>
      <div className="w-4 h-4 block-green"></div>
      <div className="w-4 h-4 block-green"></div>
      <div className="w-4 h-4 border border-transparent"></div>
      </div>
      </div>
      {/* Next 3 (Smallest) */}
      <div className="flex items-center justify-center h-12 bg-surface-dim border border-surface-variant cyber-grid opacity-40">
      <div className="grid grid-cols-3 gap-[1px]">
      <div className="w-3 h-3 block-red"></div>
      <div className="w-3 h-3 block-red"></div>
      <div className="w-3 h-3 border border-transparent"></div>
      <div className="w-3 h-3 border border-transparent"></div>
      <div className="w-3 h-3 block-red"></div>
      <div className="w-3 h-3 block-red"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Stats Box */}
      <div className="bg-surface-container-low border border-outline-variant rounded-sm p-4 flex flex-col gap-4">
      <div>
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-1">SCORE</div>
      <div className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">0042,590</div>
      </div>
      <div className="border-t border-outline-variant pt-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-1">LEVEL</div>
      <div className="font-headline-md text-headline-md text-on-surface">12</div>
      </div>
      <div className="border-t border-outline-variant pt-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-1">LINES</div>
      <div className="font-headline-md text-headline-md text-on-surface">114</div>
      </div>
      </div>
      </div>
      </div>
      {/* Touch / Click Controls (Visible on all sizes for explicit control, but especially useful for mobile) */}
      <div className="w-full max-w-4xl mt-margin md:mt-8 border-t border-outline-variant pt-margin flex justify-center gap-4 flex-wrap">
      <button className="bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-variant active:scale-95 transition-colors duration-150 p-4 rounded-sm flex items-center justify-center min-w-[80px]" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <ArrowLeft  style={{fontVariationSettings: "'FILL' 0"}} className="text-on-surface" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-variant active:scale-95 transition-colors duration-150 p-4 rounded-sm flex items-center justify-center min-w-[80px]" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <ArrowDown  style={{fontVariationSettings: "'FILL' 0"}} className="text-on-surface" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-surface-container border border-outline-variant hover:border-primary hover:bg-surface-variant active:scale-95 transition-colors duration-150 p-4 rounded-sm flex items-center justify-center min-w-[80px]" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <ArrowRight  style={{fontVariationSettings: "'FILL' 0"}} className="text-on-surface" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-[1px] bg-outline-variant mx-2 hidden md:block"></div>
      <button className="bg-surface-container border border-outline-variant hover:border-secondary hover:bg-surface-variant active:scale-95 transition-colors duration-150 p-4 rounded-sm flex items-center justify-center min-w-[80px]" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <RotateCw  style={{fontVariationSettings: "'FILL' 0"}} className="text-secondary" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary/10 border border-primary hover:bg-primary/20 active:scale-95 transition-colors duration-150 p-4 rounded-sm flex items-center justify-center min-w-[120px]" type="button" data-action-id="hard-drop-8" onClick={actions?.["hard-drop-8"]}>
      <span className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold">HARD DROP</span>
      </button>
      </div>
      </main>
      </div>
    </>
  );
}
