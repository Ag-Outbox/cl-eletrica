"use client";

import React, { forwardRef, useRef, type SVGProps } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

type EquipmentNodeProps = {
  className?: string;
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  accentClass: string;
};

const EquipmentNode = forwardRef<HTMLDivElement, EquipmentNodeProps>(
  ({ className, icon, label, subtitle, accentClass }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex w-[132px] items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_12px_36px_-18px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:w-[164px] sm:p-4 dark:border-slate-700 dark:bg-slate-900/95",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset sm:size-12",
          accentClass,
        )}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-slate-900 sm:text-sm dark:text-white">
          {label}
        </p>
        <p className="mt-0.5 truncate text-[10px] text-slate-500 sm:text-xs dark:text-slate-400">
          {subtitle}
        </p>
      </div>
    </div>
  ),
);

EquipmentNode.displayName = "EquipmentNode";

export function ElectricalDistributionBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lightingRef = useRef<HTMLDivElement>(null);
  const machineRef = useRef<HTMLDivElement>(null);
  const computersRef = useRef<HTMLDivElement>(null);
  const firePumpRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_center,_#ecfeff_0%,_#f8fafc_44%,_#f1f5f9_100%)] px-4 py-12 shadow-xl shadow-slate-200/50 sm:min-h-[600px] sm:px-8 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_center,_#0f2836_0%,_#0f172a_48%,_#020617_100%)] dark:shadow-none"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="grid w-full max-w-4xl grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] items-center gap-x-2 gap-y-16 sm:gap-x-10 sm:gap-y-24">
        <EquipmentNode
          ref={lightingRef}
          className="col-start-1 row-start-1 justify-self-start"
          icon={<CeilingLightIcon />}
          label="Iluminação"
          subtitle="Circuito de luz"
          accentClass="bg-amber-50 text-amber-600 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20"
        />

        <EquipmentNode
          ref={computersRef}
          className="col-start-3 row-start-1 justify-self-end"
          icon={<ComputersIcon />}
          label="Computadores"
          subtitle="Rede e tomadas"
          accentClass="bg-blue-50 text-blue-600 ring-blue-200 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20"
        />

        <div
          ref={panelRef}
          className="relative z-20 col-start-2 row-start-2 flex size-[138px] flex-col items-center justify-center rounded-[28px] border border-cyan-200 bg-white p-4 shadow-[0_24px_70px_-22px_rgba(8,145,178,0.7)] ring-8 ring-cyan-50/80 sm:size-[176px] dark:border-cyan-800 dark:bg-slate-950 dark:ring-cyan-950/70"
        >
          <div className="absolute -top-3 rounded-full border border-cyan-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700 shadow-sm sm:text-[10px] dark:border-cyan-800 dark:bg-slate-900 dark:text-cyan-300">
            Distribuição
          </div>
          <ElectricalPanelIcon className="size-20 text-slate-700 sm:size-24 dark:text-slate-200" />
          <p className="mt-1 text-xs font-bold text-slate-950 sm:text-sm dark:text-white">
            Quadro de energia
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Energizado
          </div>
        </div>

        <EquipmentNode
          ref={machineRef}
          className="col-start-1 row-start-3 justify-self-start"
          icon={<IndustrialMachineIcon />}
          label="Máquina"
          subtitle="Carga industrial"
          accentClass="bg-orange-50 text-orange-600 ring-orange-200 dark:bg-orange-400/10 dark:text-orange-300 dark:ring-orange-400/20"
        />

        <EquipmentNode
          ref={firePumpRef}
          className="col-start-3 row-start-3 justify-self-end"
          icon={<FirePumpIcon />}
          label="Bomba de incêndio"
          subtitle="Sistema de combate"
          accentClass="bg-red-50 text-red-600 ring-red-200 dark:bg-red-400/10 dark:text-red-300 dark:ring-red-400/20"
        />
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={panelRef}
        toRef={lightingRef}
        curvature={-34}
        gradientStartColor="#06b6d4"
        gradientStopColor="#f59e0b"
        duration={5.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={panelRef}
        toRef={computersRef}
        curvature={-34}
        gradientStartColor="#06b6d4"
        gradientStopColor="#3b82f6"
        duration={5.8}
        delay={0.35}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={panelRef}
        toRef={machineRef}
        curvature={34}
        gradientStartColor="#06b6d4"
        gradientStopColor="#f97316"
        duration={5.5}
        delay={0.65}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={panelRef}
        toRef={firePumpRef}
        curvature={34}
        gradientStartColor="#06b6d4"
        gradientStopColor="#ef4444"
        duration={6}
        delay={0.95}
      />
    </section>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

function ElectricalPanelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="19" y="8" width="58" height="80" rx="6" fill="currentColor" opacity="0.08" />
      <rect x="21.5" y="10.5" width="53" height="75" rx="4.5" stroke="currentColor" strokeWidth="3" />
      <path d="M22 30h52M48 31v54" stroke="currentColor" strokeWidth="3" />
      <rect x="29" y="18" width="30" height="5" rx="2.5" fill="currentColor" opacity="0.75" />
      <circle cx="66" cy="20.5" r="3" fill="#22c55e" />
      <rect x="28" y="38" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="54" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="70" width="13" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M56 39h10M56 45h10M56 55h10M56 61h10M56 71h10M56 77h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m51 4-7 12h7l-5 10 13-14h-7l5-8h-6Z" fill="#06b6d4" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CeilingLightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M10 10h28M24 10v7" />
      <path d="M15 27a9 9 0 0 1 18 0H15Z" fill="currentColor" opacity="0.12" />
      <path d="M15 27a9 9 0 0 1 18 0H15Z" />
      <path d="m14 33-3 3m13-3v5m10-5 3 3" opacity="0.75" />
    </svg>
  );
}

function IndustrialMachineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 38V20l9-5v7l10-7v7l12-7v23H8Z" fill="currentColor" opacity="0.1" />
      <path d="M8 38V20l9-5v7l10-7v7l12-7v23H8Z" />
      <path d="M15 38v-8h8v8M29 29h4M29 34h4" />
      <circle cx="17" cy="25" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ComputersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="6" y="10" width="25" height="19" rx="3" fill="currentColor" opacity="0.09" />
      <rect x="6" y="10" width="25" height="19" rx="3" />
      <path d="M14 36h20M18 29v7" />
      <rect x="28" y="18" width="14" height="18" rx="2.5" fill="currentColor" opacity="0.13" />
      <rect x="28" y="18" width="14" height="18" rx="2.5" />
      <circle cx="35" cy="31" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FirePumpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 37h36M11 37V24h8" />
      <circle cx="27" cy="27" r="9" fill="currentColor" opacity="0.1" />
      <circle cx="27" cy="27" r="9" />
      <circle cx="27" cy="27" r="3" />
      <path d="M36 25h6v7h-7M18 21v-6h8v3M11 24H6v-5h5" />
      <path d="M29 7c0 3-3 4.2-3 7a4 4 0 0 0 8 0c0-2.8-2.1-4.6-5-7Z" fill="currentColor" opacity="0.18" />
      <path d="M29 7c0 3-3 4.2-3 7a4 4 0 0 0 8 0c0-2.8-2.1-4.6-5-7Z" />
    </svg>
  );
}
