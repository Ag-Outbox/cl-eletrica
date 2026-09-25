# Componente de distribuição elétrica animada

O componente representa um quadro de energia alimentando quatro grupos de carga:

- iluminação;
- máquina industrial;
- computadores e rede;
- bomba do sistema de combate a incêndio.

## Arquivos

Copie os arquivos para o projeto:

```text
components/ui/animated-beam.tsx
components/ui/electrical-distribution-beam.tsx
```

## Dependência

```bash
npm install framer-motion
```

O projeto também precisa de React, TypeScript, Tailwind CSS e do utilitário `cn` padrão do shadcn em `@/lib/utils`.

## Uso

```tsx
import { ElectricalDistributionBeam } from "@/components/ui/electrical-distribution-beam";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <ElectricalDistributionBeam />
    </main>
  );
}
```

Os ícones estão incluídos como SVGs vetoriais no próprio componente. Não é necessário instalar uma biblioteca de ícones nem adicionar imagens externas.
