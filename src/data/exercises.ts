export interface Exercise {
  id: string;
  title: string;
  shortDescription: string;
  goal: string;
  image: string;
  duration: string;
  difficulty: "doux" | "moyen";
  bodyArea: string;
  precautions: string[];
}

export const exercises: Exercise[] = [
  {
    id: "dos-superieur",
    title: "Le Gorille Poli",
    shortDescription: "On réveille le haut du dos sans déclencher de réunion de crise entre les omoplates.",
    goal: "Redonner un peu de panache au buste et rappeler au dos qu'il n'est pas obligé de vivre plié comme une facture oubliée.",
    image: "/exercises/dos-superieur.webp",
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Haut du dos",
    precautions: [
      "Le cou reste calme. Il n'a rien demandé.",
      "Les épaules restent basses, pas en mode tortue stressée.",
      "Si ça pince, on cesse immédiatement les négociations avec l'élastique."
    ]
  },
  {
    id: "epaules",
    title: "Les Hélices du Daron",
    shortDescription: "Rotation douce des épaules, comme un hélicoptère qui prend son temps avant le décollage.",
    goal: "Libérer les épaules de leurs tensions accumulées depuis la dernière fois qu'on a porté quelque chose de trop lourd avec trop de fierté.",
    image: "/exercises/epaules.webp",
    duration: "1 minute 30",
    difficulty: "doux",
    bodyArea: "Épaules",
    precautions: [
      "Le cou reste long, détendu, pas crispé comme quelqu'un qui attend les résultats du Loto.",
      "Si les épaules protestent, on réduit l'amplitude. Elles ont le droit d'avoir un avis."
    ]
  },
  {
    id: "posture",
    title: "Le Flamant Presque Stable",
    shortDescription: "On se tient droit, avec dignité, même si le canapé appelle au loin.",
    goal: "Retrouver un alignement corporel qui inspire le respect — celui d'un homme debout, stable, et qui ne compte pas se voûter avant 2040.",
    image: "/exercises/posture.webp",
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Corps entier",
    precautions: [
      "On ne cambre pas le bas du dos façon arc de triomphe. On est droit, pas arqué.",
      "La respiration continue. Elle aussi participe à la mission."
    ]
  },
  {
    id: "posture-torse",
    title: "Le Torse Présidentiel",
    shortDescription: "On ouvre la cage thoracique comme quelqu'un qui s'apprête à prononcer un discours important.",
    goal: "Étirer les pectoraux, ouvrir le buste, et respirer comme un homme qui a des choses à dire et la capacité pulmonaire pour les dire.",
    image: "/exercises/posture-torse.webp",
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Torse et Poitrine",
    precautions: [
      "On ne force pas l'écartement. Ce n'est pas un concours d'envergure.",
      "Le mouvement suit la respiration. Pas l'inverse.",
      "Le ventre ne pousse pas en avant. On reste distingué."
    ]
  },
  {
    id: "posture-deadlift",
    title: "Le Ramasseur de Télécommande",
    shortDescription: "La technique officielle pour récupérer un objet au sol sans y laisser ses lombaires.",
    goal: "Apprendre à se pencher avec classe et sécurité — parce que la télécommande ne mérite pas qu'on se blesse pour elle.",
    image: "/exercises/posture-deadlift.webp",
    duration: "2 minutes",
    difficulty: "moyen",
    bodyArea: "Bas du dos et Jambes",
    precautions: [
      "Le dos ne s'arrondit pas. On est un ramasseur, pas une crevette.",
      "La flexion vient des hanches, pas de la taille. Nuance capitale.",
      "Le regard vers le sol, devant soi. Pas vers le plafond, pas vers Metropolis."
    ]
  },
  {
    id: "posture-epaule-bras",
    title: "Le Salut du Viking Élastique",
    shortDescription: "Un étirement noble des bras et des épaules, digne d'un guerrier du quotidien.",
    goal: "Assouplir les triceps et l'épaule pour que les gestes du quotidien redeviennent fluides, souverains, et légèrement impressionnants.",
    image: "/exercises/posture-epaule-bras.webp",
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Bras et Épaules",
    precautions: [
      "On ne force pas si l'épaule fait la grève. Elle a peut-être ses raisons.",
      "La tête reste droite. Pas de coup du lapin auto-infligé.",
      "Attention à ne pas se prendre un élastique dans le nez. Ça arrive. Ça ne s'oublie pas."
    ]
  },
  {
    id: "posture-epaules",
    title: "L'Aigle de Salon",
    shortDescription: "Élévations latérales des bras. Majestueux. Contrôlé. Légèrement ridicule. Très efficace.",
    goal: "Tonifier les épaules pour qu'elles portent fièrement les prochains sacs de courses, les bébés à câliner, et les espoirs familiaux.",
    image: "/exercises/posture-epaules.webp",
    duration: "1 minute 30",
    difficulty: "moyen",
    bodyArea: "Épaules",
    precautions: [
      "On ne monte pas au-delà de l'horizontale. On est un aigle de salon, pas un albatros en plein vol.",
      "Pas d'élan. Le mouvement est musculaire, pas balistique.",
      "Les poignets restent alignés. Même un aigle soigne ses détails."
    ]
  },
  {
    id: "superman",
    title: "Superman en RTT",
    shortDescription: "Un super-héros discret, sans cape, sans slip rouge, mais avec des lombaires concernées.",
    goal: "Renforcer doucement le bas du dos et les fessiers, pour retrouver une posture de héros domestique — solide, digne, et capable de soulever un carton sans drame.",
    image: "/exercises/superman.webp",
    duration: "2 minutes",
    difficulty: "moyen",
    bodyArea: "Lombaires et Fessiers",
    precautions: [
      "Pas besoin de voler : quelques centimètres de décollement suffisent pour le titre.",
      "Le regard reste vers le sol. Pas vers Metropolis.",
      "Si le bas du dos proteste, Superman rentre à la maison et reprend demain."
    ]
  },
  {
    id: "torse",
    title: "Le Pectoral Philosophe",
    shortDescription: "Extension du dos sur dossier de chaise. Une pause digne d'un homme qui prend le temps de respirer et d'y réfléchir.",
    goal: "Ouvrir la colonne, libérer le souffle, et rappeler que s'étirer en pensant à rien de particulier est une forme de sagesse.",
    image: "/exercises/torse.webp",
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Torse et Colonne",
    precautions: [
      "La tête est soutenue par les mains. Elle ne tombe pas en arrière toute seule comme au cinéma.",
      "On s'arrête dès que ça pousse sur le dossier. On n'est pas là pour gagner un concours de souplesse.",
      "La chaise doit être solide. Ce n'est pas le moment d'expérimenter avec le petit tabouret bancal."
    ]
  }
];