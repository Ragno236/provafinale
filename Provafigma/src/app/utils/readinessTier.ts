export interface ReadinessTier {
  label: string;
  sublabel: string;
  easterEgg: string;
  colorClass: string; // Tailwind or inline style key
}

export function getReadinessTier(value: number): ReadinessTier {
  if (value < 25) return {
    label: "Stai ancora ingranando",
    sublabel: "Ogni sessione è un mattone. Continua.",
    easterEgg: "Batman ha iniziato senza la Batcaverna. 🦇",
    colorClass: "default"
  };
  if (value < 50) return {
    label: "Ci stai arrivando",
    sublabel: "La direzione è giusta. Non fermarti ora.",
    easterEgg: "Anche il Doc Brown ci ha messo anni. ⚡",
    colorClass: "default"
  };
  if (value < 75) return {
    label: "Ci siamo",
    sublabel: "Sei sulla strada. Ancora un passo.",
    easterEgg: "Sheldon approverebbe il metodo. 🖖",
    colorClass: "default"
  };
  if (value < 90) return {
    label: "Ne sai una più del diavolo",
    sublabel: "Sei pronto. La conversazione è già tua.",
    easterEgg: "Il Doc Brown sarebbe fiero di te. 🏎️",
    colorClass: "accent"
  };
  return {
    label: "Ne sai una più del diavolo",
    sublabel: "Sei pronto. La conversazione è già tua.",
    easterEgg: "Sheldon Cooper sarebbe fiero di te. 🧬",
    colorClass: "accent"
  };
}
