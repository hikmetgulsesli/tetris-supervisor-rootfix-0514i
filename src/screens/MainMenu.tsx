// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-marathon-1" | "settings-cfg-01-2" | "controls-inp-map-3" | "high-scores-db-read-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Atmospheric Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
      {/* Full screen subtle grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      {/* Abstract Inactive Game Board (10x20 ratio representation) */}
      <div className="relative w-[320px] h-[640px] border border-outline-variant/30 flex flex-col justify-end p-unit opacity-20">
      {/* Grid lines for the board */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3d494c30_1px,transparent_1px),linear-gradient(to_bottom,#3d494c30_1px,transparent_1px)] bg-[size:10%_5%]"></div>
      {/* Dimmed 'fallen' blocks at the bottom */}
      <div className="w-full flex gap-[1px] h-[5%]">
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-transparent"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-transparent"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      </div>
      <div className="w-full flex gap-[1px] h-[5%] mt-[1px]">
      <div className="w-[10%] h-full bg-transparent"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-transparent"></div>
      <div className="w-[10%] h-full bg-transparent"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      </div>
      <div className="w-full flex gap-[1px] h-[5%] mt-[1px]">
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      <div className="w-[10%] h-full bg-surface-variant"></div>
      </div>
      </div>
      </div>
      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center gap-12">
      {/* Header / Logo Area */}
      <header className="text-center flex flex-col items-center gap-2">
      <div className="font-code-sm text-code-sm text-primary uppercase tracking-[0.3em] mb-2 px-3 py-1 border border-primary/30 bg-primary/5">
                      System Active
                  </div>
      <h1 className="font-headline-lg text-headline-lg flex flex-col items-center gap-1">
      <span className="text-on-background tracking-widest uppercase">Tetris</span>
      <span className="text-primary tracking-tighter uppercase border-y border-primary/50 py-1 w-full bg-background/80 backdrop-blur-sm">Supervisor</span>
      </h1>
      </header>
      {/* Navigation / Actions */}
      <nav className="w-full flex flex-col gap-unit">
      {/* Primary Action */}
      <button className="group w-full flex items-center justify-between p-4 border border-primary bg-primary/10 hover:bg-primary transition-colors duration-200 cursor-pointer" type="button" data-action-id="start-marathon-1" onClick={actions?.["start-marathon-1"]}>
      <div className="flex items-center gap-3">
      <Play className="text-primary group-hover:text-on-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-primary group-hover:text-on-primary uppercase tracking-widest transition-colors">Start Marathon</span>
      </div>
      <div className="w-2 h-2 bg-primary group-hover:bg-on-primary transition-colors"></div>
      </button>
      {/* Secondary Actions */}
      <button className="group w-full flex items-center justify-between p-4 border border-outline-variant bg-surface-container-lowest hover:border-primary hover:bg-surface-container transition-colors duration-200 cursor-pointer" type="button" data-action-id="settings-cfg-01-2" onClick={actions?.["settings-cfg-01-2"]}>
      <div className="flex items-center gap-3">
      <Settings className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary uppercase tracking-widest transition-colors">Settings</span>
      </div>
      <span className="font-code-sm text-code-sm text-outline-variant group-hover:text-primary/50 transition-colors">CFG_01</span>
      </button>
      <button className="group w-full flex items-center justify-between p-4 border border-outline-variant bg-surface-container-lowest hover:border-primary hover:bg-surface-container transition-colors duration-200 cursor-pointer mt-[-1px]" type="button" data-action-id="controls-inp-map-3" onClick={actions?.["controls-inp-map-3"]}>
      <div className="flex items-center gap-3">
      <Circle className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary uppercase tracking-widest transition-colors">Controls</span>
      </div>
      <span className="font-code-sm text-code-sm text-outline-variant group-hover:text-primary/50 transition-colors">INP_MAP</span>
      </button>
      <button className="group w-full flex items-center justify-between p-4 border border-outline-variant bg-surface-container-lowest hover:border-primary hover:bg-surface-container transition-colors duration-200 cursor-pointer mt-[-1px]" type="button" data-action-id="high-scores-db-read-4" onClick={actions?.["high-scores-db-read-4"]}>
      <div className="flex items-center gap-3">
      <Circle className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary uppercase tracking-widest transition-colors">High Scores</span>
      </div>
      <span className="font-code-sm text-code-sm text-outline-variant group-hover:text-primary/50 transition-colors">DB_READ</span>
      </button>
      </nav>
      {/* Footer / Version */}
      <footer className="mt-8 font-code-sm text-code-sm text-outline-variant uppercase tracking-widest flex items-center gap-4">
      <span className="w-8 h-[1px] bg-outline-variant"></span>
                  V 1.0.4-BETA
                  <span className="w-8 h-[1px] bg-outline-variant"></span>
      </footer>
      </main>
    </>
  );
}
