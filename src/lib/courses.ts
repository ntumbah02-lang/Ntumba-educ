export const courses = [
  {
    slug: 'marketing-digital',
    title: 'Marketing Digital & E-commerce',
    level: 'Intermédiaire',
    duration: '6 semaines',
    students: 540,
    rating: 4.9,
    category: 'Business',
    accent: '#4f46e5',
    description:
      'Apprenez à concevoir une stratégie digitale, gérer des campagnes, analyser les performances et vendre en ligne avec des outils concrets.',
    objectives: [
      'Créer une stratégie marketing digitale claire',
      'Gérer les réseaux sociaux et la publicité en ligne',
      'Analyser les performances avec des métriques simples',
      'Mettre en place une vente en ligne efficace',
    ],
    modules: [
      { title: 'Fondements du marketing digital', lessons: ['Le parcours client', 'Les canaux de diffusion', 'Les KPI essentiels'] },
      { title: 'Réseaux sociaux et contenu', lessons: ['Stratégie de contenu', 'Planning éditorial', 'Engagement et conversion'] },
      { title: 'E-commerce et conversion', lessons: ['Créer une boutique digitale', 'Funnels de vente', 'Optimisation du panier'] },
    ],
  },
  {
    slug: 'developpement-web',
    title: 'Développement Web',
    level: 'Débutant à intermédiaire',
    duration: '8 semaines',
    students: 820,
    rating: 4.8,
    category: 'IT & Code',
    accent: '#0ea5e9',
    description:
      'Maîtrisez les bases du web moderne : HTML, CSS, JavaScript, React, et la logique de création d’interfaces utiles et responsives.',
    objectives: [
      'Créer des interfaces web propres et efficaces',
      'Comprendre le navigateur et le DOM',
      'Utiliser JavaScript pour gérer l’interactivité',
      'Construire des composants React réutilisables',
    ],
    modules: [
      { title: 'HTML & CSS', lessons: ['Structure de page', 'Flexbox et grille', 'Responsive design'] },
      { title: 'JavaScript', lessons: ['Variables', 'Fonctions', 'Événements'] },
      { title: 'React', lessons: ['Composants', 'Props et state', 'Router et navigation'] },
    ],
  },
  {
    slug: 'gestion-financiere',
    title: 'Gestion Financière',
    level: 'Débutant',
    duration: '5 semaines',
    students: 430,
    rating: 4.7,
    category: 'Finance',
    accent: '#10b981',
    description:
      'Apprenez à gérer vos finances, lire les tableaux de bord, piloter un budget et prendre des décisions financières plus sûres.',
    objectives: [
      'Construire un budget simple et réaliste',
      'Suivre les revenus et dépenses',
      'Comprendre les ratios financiers de base',
      'Prendre des décisions financières éclairées',
    ],
    modules: [
      { title: 'Budget personnel', lessons: ['Les revenus', 'Les dépenses', 'Les priorités'] },
      { title: 'Analyse financière', lessons: ['Profitabilité', 'Cout et marge', 'Tableaux de bord'] },
      { title: 'Planification de trésorerie', lessons: ['Prévision', 'Épargne', 'Décisions d’investissement'] },
    ],
  },
]
