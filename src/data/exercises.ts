export interface Exercise {
  id: string;
  title: string;
  shortDescription: string;
  goal: string;
  image: string;
  duration: string;
  difficulty: "doux" | "moyen";
  bodyArea: string;
  equipment: "Élastique" | "Aucun";
  precautions: string[];
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const exercises: Exercise[] = [
  {
    id: "dos-superieur",
    title: "Dos supérieur",
    shortDescription: "Renforce le haut du dos et améliore la posture.",
    goal: "Étirement et renforcement doux des muscles situés entre les omoplates pour redresser le buste.",
    image: asset("exercises/dos-superieur.webp"),
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Haut du dos",
    equipment: "Élastique",
    precautions: [
      "Ne forcez pas sur le cou.",
      "Gardez les épaules basses et détendues.",
      "Arrêtez immédiatement si vous ressentez un pincement dans la colonne."
    ]
  },
  {
    id: "epaules",
    title: "Rotation des épaules",
    shortDescription: "Assouplit l'articulation des épaules et libère les tensions.",
    goal: "Améliorer la mobilité des épaules et soulager les raideurs accumulées.",
    image: asset("exercises/epaules.webp"),
    duration: "1 minute 30",
    difficulty: "doux",
    bodyArea: "Épaules",
    equipment: "Élastique",
    precautions: [
      "Gardez le cou bien long et ne crispez pas les mâchoires.",
      "Faites des cercles de petite amplitude si vos épaules sont sensibles."
    ]
  },
  {
    id: "posture",
    title: "Alignement de la posture",
    shortDescription: "Prenez conscience de votre alignement corporel.",
    goal: "Favoriser un bon alignement de la tête, des épaules et du bassin pour prévenir le mal de dos.",
    image: asset("exercises/posture.webp"),
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Corps entier",
    equipment: "Élastique",
    precautions: [
      "Ne cambrez pas excessivement le bas du dos.",
      "Ne bloquez jamais votre respiration."
    ]
  },
  {
    id: "posture-torse",
    title: "Ouverture du buste",
    shortDescription: "Étire la cage thoracique et aide à mieux respirer.",
    goal: "Ouvrir la zone du cœur et étirer les pectoraux pour contrer la posture voûtée.",
    image: asset("exercises/posture-torse.webp"),
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Torse et Poitrine",
    equipment: "Élastique",
    precautions: [
      "Ne poussez pas le ventre en avant, restez bien gainé.",
      "Vos mouvements doivent être calés sur le rythme naturel de votre respiration.",
      "Attention à ne pas forcer sur l'écartement des bras."
    ]
  },
  {
    id: "posture-deadlift",
    title: "Bascule du bassin",
    shortDescription: "Renforce les fessiers et le bas du dos en toute sécurité.",
    goal: "Apprendre à fléchir les hanches en gardant le dos droit pour ramasser un objet au sol.",
    image: asset("exercises/posture-deadlift.webp"),
    duration: "2 minutes",
    difficulty: "moyen",
    bodyArea: "Bas du dos et Jambes",
    equipment: "Élastique",
    precautions: [
      "Ne laissez jamais le dos s'arrondir.",
      "La flexion doit venir des hanches, pas de la taille.",
      "Regardez vers le sol devant vous pour ne pas casser la nuque."
    ]
  },
  {
    id: "posture-epaule-bras",
    title: "Étirement épaules et bras",
    shortDescription: "Assouplit les bras et améliore l'amplitude articulaire.",
    goal: "Étirer les triceps et les muscles de l'épaule pour faciliter les gestes du quotidien.",
    image: asset("exercises/posture-epaule-bras.webp"),
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Bras et Épaules",
    equipment: "Élastique",
    precautions: [
      "Ne forcez pas si vous sentez une douleur aiguë dans l'épaule.",
      "Gardez la tête droite sans la pousser vers l'avant.",
      "Attention à ne pas vous prendre un éventuel élastique dans le nez !"
    ]
  },
  {
    id: "posture-epaules",
    title: "Élévations latérales",
    shortDescription: "Renforce le dessus des épaules de manière contrôlée.",
    goal: "Tonifier les deltoïdes pour aider à porter des charges légères et lever les bras.",
    image: asset("exercises/posture-epaules.webp"),
    duration: "1 minute 30",
    difficulty: "moyen",
    bodyArea: "Épaules",
    equipment: "Élastique",
    precautions: [
      "Ne montez pas les bras plus haut que la ligne de vos épaules.",
      "N'utilisez pas d'élan pour lever les bras, le mouvement doit être fluide.",
      "Attention à garder les poignets bien alignés."
    ]
  },
  {
    id: "superman",
    title: "Le Superman (au sol ou sur chaise)",
    shortDescription: "Renforce les muscles lombaires et fessiers.",
    goal: "Renforcer la chaîne postérieure pour un dos solide et une posture droite.",
    image: asset("exercises/superman.webp"),
    duration: "2 minutes",
    difficulty: "moyen",
    bodyArea: "Lombaires et Fessiers",
    equipment: "Aucun",
    precautions: [
      "Ne cherchez pas à cambrer excessivement, décollez de quelques centimètres seulement.",
      "Regardez toujours vers le sol pour préserver les cervicales.",
      "Serrez les fessiers pour protéger le bas du dos."
    ]
  },
  {
    id: "torse",
    title: "Extension thoracique",
    shortDescription: "Lutte contre la raideur du dos et ouvre les voies respiratoires.",
    goal: "Améliorer l'extension de la colonne et détendre les muscles pectoraux.",
    image: asset("exercises/torse.webp"),
    duration: "2 minutes",
    difficulty: "doux",
    bodyArea: "Torse et Colonne",
    equipment: "Élastique",
    precautions: [
      "Ne laissez pas votre tête tomber lourdement vers l'arrière, soutenez-la avec vos mains.",
      "Arrêtez l'extension dès que vous sentez le dossier faire pression, sans forcer."
    ]
  }
];
