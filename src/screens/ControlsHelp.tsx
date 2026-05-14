// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, X } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "initialize-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Modal Backdrop / Container */}
      <main className="w-full max-w-[840px] bg-background border border-outline-variant relative shadow-2xl flex flex-col">
      {/* Top Tech Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
      {/* Header */}
      <header className="flex items-center justify-between p-margin border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center gap-gutter">
      {/* Tetrimino Accent */}
      <div className="grid grid-cols-2 gap-[2px] w-4 h-4">
      <div className="bg-primary col-span-2 h-[6px]"></div>
      <div className="bg-primary h-[6px] w-[6px]"></div>
      <div className="bg-transparent h-[6px] w-[6px]"></div>
      </div>
      <div>
      <h2 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-unit">Operator Manual</h2>
      <h1 className="font-headline-md text-headline-md text-on-background uppercase tracking-tighter">System Controls</h1>
      </div>
      </div>
      <button className="w-10 h-10 border border-outline-variant bg-surface flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Body / Bento Grid */}
      <div className="p-margin bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Navigation Controls (Span 8) */}
      <section className="md:col-span-8 border border-outline-variant bg-surface p-margin flex flex-col relative group hover:border-primary transition-colors duration-300">
      <div className="absolute top-0 left-0 w-2 h-2 border-t-[2px] border-l-[2px] border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <header className="flex items-center gap-unit mb-margin border-b border-outline-variant pb-unit">
      <Circle className="text-[16px] text-primary" aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Movement &amp; Rotation</h3>
      </header>
      <div className="flex flex-col sm:flex-row items-center gap-margin flex-1">
      {/* D-Pad Visual */}
      <div className="grid grid-cols-3 gap-[2px] w-max p-unit bg-surface-container-highest border border-outline-variant">
      <div className="w-12 h-12"></div>
      <div className="w-12 h-12 border border-outline-variant bg-surface flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shadow-[inset_0_0_8px_rgba(76,215,246,0)] group-hover:shadow-[inset_0_0_8px_rgba(76,215,246,0.2)]">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12"></div>
      <div className="w-12 h-12 border border-outline-variant bg-surface flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 border border-outline-variant bg-surface flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 border border-outline-variant bg-surface flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Details List */}
      <div className="flex-1 w-full flex flex-col gap-0 border border-outline-variant bg-surface-container-lowest">
      <div className="flex justify-between items-center p-unit px-gutter border-b border-outline-variant hover:bg-surface-variant transition-colors">
      <span className="font-code-sm text-code-sm text-primary">UP ARROW</span>
      <span className="font-body-md text-body-md text-on-surface">Rotate Block Right</span>
      </div>
      <div className="flex justify-between items-center p-unit px-gutter border-b border-outline-variant hover:bg-surface-variant transition-colors">
      <span className="font-code-sm text-code-sm text-primary">LEFT / RIGHT</span>
      <span className="font-body-md text-body-md text-on-surface">Lateral Movement</span>
      </div>
      <div className="flex justify-between items-center p-unit px-gutter hover:bg-surface-variant transition-colors">
      <span className="font-code-sm text-code-sm text-primary">DOWN ARROW</span>
      <span className="font-body-md text-body-md text-on-surface">Soft Drop (Accelerate)</span>
      </div>
      </div>
      </div>
      </section>
      {/* Hard Drop (Span 4) */}
      <section className="md:col-span-4 border border-outline-variant bg-surface p-margin flex flex-col relative group hover:border-error transition-colors duration-300">
      <div className="absolute top-0 right-0 w-2 h-2 border-t-[2px] border-r-[2px] border-error opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <header className="flex items-center gap-unit mb-margin border-b border-outline-variant pb-unit">
      <Circle className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Instant Action</h3>
      </header>
      <div className="flex flex-col items-center justify-center flex-1 gap-gutter">
      <div className="w-full h-14 border border-error bg-error/5 flex items-center justify-center text-error font-code-sm text-code-sm uppercase tracking-[0.2em] group-hover:bg-error/20 transition-colors shadow-[0_0_15px_rgba(255,180,171,0)] group-hover:shadow-[0_0_15px_rgba(255,180,171,0.15)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,180,171,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]"></div>
                                  SPACEBAR
                              </div>
      <div className="text-center">
      <span className="font-headline-md text-headline-md text-error block">Hard Drop</span>
      <span className="font-body-md text-body-md text-on-surface-variant block mt-1">Instantly lock block</span>
      </div>
      </div>
      </section>
      {/* Hold Block (Span 6) */}
      <section className="md:col-span-6 border border-outline-variant bg-surface p-margin flex flex-col relative group hover:border-secondary transition-colors duration-300">
      <header className="flex items-center gap-unit mb-gutter border-b border-outline-variant pb-unit">
      <Circle className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Strategic Stash</h3>
      </header>
      <div className="flex items-start gap-gutter h-full">
      <div className="flex flex-col gap-[2px] bg-outline-variant border border-outline-variant p-[2px]">
      <div className="h-10 px-gutter bg-surface-container flex items-center justify-center text-secondary font-code-sm text-code-sm min-w-[70px]">SHIFT</div>
      <div className="h-6 bg-surface flex items-center justify-center font-label-md text-label-md text-on-surface-variant text-[10px]">OR</div>
      <div className="h-10 px-gutter bg-surface-container flex items-center justify-center text-secondary font-code-sm text-code-sm min-w-[70px]">C</div>
      </div>
      <div className="flex-1">
      <span className="font-body-lg text-body-lg text-on-background block mb-unit">Hold Active Block</span>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Stash the current piece for later deployment. Swaps instantly with previously held item.</p>
      </div>
      </div>
      </section>
      {/* Pause (Span 6) */}
      <section className="md:col-span-6 border border-outline-variant bg-surface p-margin flex flex-col relative group hover:border-outline transition-colors duration-300">
      <header className="flex items-center gap-unit mb-gutter border-b border-outline-variant pb-unit">
      <Circle className="text-[16px] text-outline" aria-hidden={true} focusable="false" />
      <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">System Interrupt</h3>
      </header>
      <div className="flex items-start gap-gutter h-full">
      <div className="h-12 px-gutter border border-outline-variant bg-surface-container flex items-center justify-center text-on-background font-code-sm text-code-sm min-w-[70px]">ESC</div>
      <div className="flex-1">
      <span className="font-body-lg text-body-lg text-on-background block mb-unit">Pause Simulation</span>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Halts all active processes and opens the main system configuration menu.</p>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Footer */}
      <footer className="p-margin border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center">
      <div className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-2">
      <span className="w-2 h-2 bg-secondary rounded-none inline-block animate-pulse"></span>
                      SYSTEM READY
                  </div>
      <button className="border border-primary bg-primary/10 text-primary font-label-md text-label-md uppercase tracking-widest px-margin py-3 hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-unit focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="initialize-2" onClick={actions?.["initialize-2"]}>
                      Initialize <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </footer>
      </main>
    </>
  );
}
