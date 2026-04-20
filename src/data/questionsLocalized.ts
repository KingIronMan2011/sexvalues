export type QuizLocale = 'en' | 'de' | 'es' | 'fr' | 'it'

type GlossaryEntry = {
  label: string
  description: string
}

export type QuizLocalization = {
  questions: Record<string, string>
  glossary: Record<string, GlossaryEntry>
}

const localizations: Record<QuizLocale, QuizLocalization> = {
  en: {
    questions: {
      '1': 'I would have relationships with men.',
      '2': 'I could imagine myself in a sexual scenario with a man.',
      '3': 'I find myself attracted to muscular bodies.',
      '4': 'A penis only makes it better. (I like dick.)',
      '5': 'I find myself attracted to soft skin, feminine clothing.',
      '6': 'I could imagine myself in a sexual scenario with a woman.',
      '7': 'I would have relationships with women.',
      '8': 'I sometimes find myself dreaming about {{lewd}} scenarios.',
      '9': 'I would have sex on a regular basis.',
      '10': 'I masturbate at least once a day.',
      '11': 'I watch pornographic content.',
      '12': 'I find myself repulsed by the idea of sex.',
      '13': "I could say '{{chastity}}' is my virtue.",
      '14': 'I like the idea of having power over someone.',
      '15': 'I (would) enjoy someone having control over me.',
      '16': "I wouldn't be comfortable with {{dominated}}.",
      '17': 'I have frowned-upon {{kinks}}/{{fetishes}}.',
      '18': 'I belong to sub-communities associated with deviances.',
      '19': 'I (would) enjoy {{degraded}} or getting degraded.',
      '20': 'I (would) enjoy {{inflictingPain}} or having pain inflicted on me.',
      '21': 'I consider myself {{vanilla}}.',
      '22': 'I find most fetishes disgusting.',
      '23': 'I might be too boring for some people in the bedroom.',
      '24': 'I could only be lewd to my partner(s).',
      '25': 'Sex should be a romantic topic.',
      '26': 'I am okay with the idea of {{hookups}} or {{oneNightStands}}.',
      '27': 'Sex is more about pleasure than {{intimacy}}.',
    },
    glossary: {
      lewd: {
        label: 'lewd',
        description:
          'Sexually explicit or strongly sexual in tone, language, or behavior.',
      },
      chastity: {
        label: 'chastity',
        description:
          'Choosing to abstain from sexual activity, often for personal or moral reasons.',
      },
      dominated: {
        label: 'getting dominated',
        description:
          'Taking a submissive role where another person leads or controls the interaction.',
      },
      kinks: {
        label: 'kinks',
        description:
          'Uncommon sexual preferences or interests that differ from mainstream expectations.',
      },
      fetishes: {
        label: 'fetishes',
        description:
          'Strong sexual focus on specific objects, body parts, or situations.',
      },
      degraded: {
        label: 'degrading',
        description:
          'Humiliation-themed language or behavior that can be part of consensual roleplay.',
      },
      inflictingPain: {
        label: 'inflicting pain',
        description:
          'Causing pain during sexual play, usually discussed within consensual BDSM contexts.',
      },
      vanilla: {
        label: 'vanilla',
        description:
          'Conventional or non-kink sexual preferences and practices.',
      },
      hookups: {
        label: 'hook-ups',
        description:
          'Casual sexual encounters without a committed relationship expectation.',
      },
      oneNightStands: {
        label: 'one-night stands',
        description:
          'A single sexual encounter between people who do not continue a relationship.',
      },
      intimacy: {
        label: 'intimacy',
        description:
          'Emotional closeness, trust, and personal connection between partners.',
      },
    },
  },
  de: {
    questions: {
      '1': 'Ich würde Beziehungen mit Männern haben.',
      '2': 'Ich könnte mir ein sexuelles Szenario mit einem Mann vorstellen.',
      '3': 'Ich fühle mich von muskulösen Körpern angezogen.',
      '4': 'Ein Penis macht es nur besser. (Ich mag Schwänze.)',
      '5': 'Ich fühle mich von weicher Haut und femininer Kleidung angezogen.',
      '6': 'Ich könnte mir ein sexuelles Szenario mit einer Frau vorstellen.',
      '7': 'Ich würde Beziehungen mit Frauen haben.',
      '8': 'Ich ertappe mich manchmal dabei, von {{lewd}} Szenarien zu träumen.',
      '9': 'Ich würde regelmäßig Sex haben.',
      '10': 'Ich masturbiere mindestens einmal am Tag.',
      '11': 'Ich schaue pornografische Inhalte.',
      '12': 'Ich empfinde die Vorstellung von Sex als abstoßend.',
      '13': "Ich könnte sagen, '{{chastity}}' ist meine Tugend.",
      '14': 'Ich mag die Vorstellung, Macht über jemanden zu haben.',
      '15': 'Ich würde es genießen, wenn jemand Kontrolle über mich hat.',
      '16': 'Ich würde mich mit {{dominated}} nicht wohlfühlen.',
      '17': 'Ich habe gesellschaftlich wenig akzeptierte {{kinks}}/{{fetishes}}.',
      '18': 'Ich gehöre zu Sub-Communities, die mit Abweichungen verbunden sind.',
      '19': 'Ich würde es genießen, zu {{degraded}} oder erniedrigt zu werden.',
      '20':
        'Ich würde es genießen, {{inflictingPain}} oder selbst Schmerzen zu bekommen.',
      '21': 'Ich halte mich für {{vanilla}}.',
      '22': 'Ich finde die meisten Fetische ekelhaft.',
      '23': 'Ich bin im Schlafzimmer für manche Leute vielleicht zu langweilig.',
      '24': 'Ich könnte nur mit meinem/meinen Partner(n) sexuell werden.',
      '25': 'Sex sollte ein romantisches Thema sein.',
      '26':
        'Ich finde die Idee von {{hookups}} oder {{oneNightStands}} in Ordnung.',
      '27': 'Beim Sex geht es mehr um Lust als um {{intimacy}}.',
    },
    glossary: {
      lewd: {
        label: 'sexuell expliziten',
        description:
          'Sexuell sehr direkte oder eindeutige Inhalte, Sprache oder Situationen.',
      },
      chastity: {
        label: 'Keuschheit',
        description:
          'Der bewusste Verzicht auf sexuelle Handlungen, oft aus persönlichen oder moralischen Gründen.',
      },
      dominated: {
        label: 'dem Dominiertwerden',
        description:
          'Eine eher submissive Rolle, in der die andere Person führt oder die Kontrolle übernimmt.',
      },
      kinks: {
        label: 'Kinks',
        description:
          'Ungewöhnlichere sexuelle Vorlieben, die von gesellschaftlichen Standards abweichen.',
      },
      fetishes: {
        label: 'Fetische',
        description:
          'Starke sexuelle Fokussierung auf bestimmte Objekte, Körperteile oder Situationen.',
      },
      degraded: {
        label: 'erniedrigen',
        description:
          'Demütigende Sprache oder Handlungen, die Teil eines einvernehmlichen Rollenspiels sein können.',
      },
      inflictingPain: {
        label: 'Schmerzen zuzufügen',
        description:
          'Jemandem im sexuellen Kontext Schmerz zu geben, meist in einvernehmlichen BDSM-Situationen.',
      },
      vanilla: {
        label: 'vanilla',
        description:
          'Eher konventionelle sexuelle Vorlieben ohne ausgeprägte Kinks.',
      },
      hookups: {
        label: 'Hook-ups',
        description:
          'Unverbindliche sexuelle Begegnungen ohne feste Beziehungserwartung.',
      },
      oneNightStands: {
        label: 'One-Night-Stands',
        description:
          'Eine einmalige sexuelle Begegnung ohne anschließende Beziehung.',
      },
      intimacy: {
        label: 'Intimität',
        description:
          'Emotionale Nähe, Vertrauen und persönliche Verbundenheit zwischen Partnern.',
      },
    },
  },
  es: {
    questions: {
      '1': 'Tendría relaciones con hombres.',
      '2': 'Podría imaginarme en un escenario sexual con un hombre.',
      '3': 'Me siento atraído/a por cuerpos musculosos.',
      '4': 'Un pene solo lo mejora. (Me gusta la polla.)',
      '5': 'Me siento atraído/a por piel suave y ropa femenina.',
      '6': 'Podría imaginarme en un escenario sexual con una mujer.',
      '7': 'Tendría relaciones con mujeres.',
      '8': 'A veces me sorprendo soñando con escenarios {{lewd}}.',
      '9': 'Tendría sexo de forma regular.',
      '10': 'Me masturbo al menos una vez al día.',
      '11': 'Veo contenido pornográfico.',
      '12': 'La idea del sexo me resulta repulsiva.',
      '13': "Podría decir que la '{{chastity}}' es mi virtud.",
      '14': 'Me gusta la idea de tener poder sobre alguien.',
      '15': 'Disfrutaría que alguien tuviera control sobre mí.',
      '16': 'No me sentiría cómodo/a con {{dominated}}.',
      '17': 'Tengo {{kinks}}/{{fetishes}} mal vistos socialmente.',
      '18': 'Pertenezco a subcomunidades asociadas con desviaciones.',
      '19': 'Disfrutaría {{degraded}} o ser degradado/a.',
      '20':
        'Disfrutaría {{inflictingPain}} o que me inflijan dolor.',
      '21': 'Me considero {{vanilla}}.',
      '22': 'Me parecen asquerosos la mayoría de los fetiches.',
      '23': 'Puede que sea demasiado aburrido/a para algunas personas en la cama.',
      '24': 'Solo podría ser sexual con mi(s) pareja(s).',
      '25': 'El sexo debería ser un tema romántico.',
      '26': 'Me parece bien la idea de {{hookups}} o {{oneNightStands}}.',
      '27': 'El sexo trata más del placer que de la {{intimacy}}.',
    },
    glossary: {
      lewd: {
        label: 'explícitos',
        description:
          'Contenido o lenguaje sexual directo o claramente subido de tono.',
      },
      chastity: {
        label: 'castidad',
        description:
          'Decisión de abstenerse de la actividad sexual, por motivos personales o morales.',
      },
      dominated: {
        label: 'ser dominado/a',
        description:
          'Asumir un rol sumiso donde otra persona dirige o controla la interacción.',
      },
      kinks: {
        label: 'kinks',
        description:
          'Preferencias sexuales poco comunes en comparación con lo considerado convencional.',
      },
      fetishes: {
        label: 'fetiches',
        description:
          'Interés sexual intenso por objetos, partes del cuerpo o situaciones concretas.',
      },
      degraded: {
        label: 'degradar',
        description:
          'Lenguaje o dinámicas de humillación que pueden formar parte de un juego consensuado.',
      },
      inflictingPain: {
        label: 'infligir dolor',
        description:
          'Causar dolor durante prácticas sexuales, normalmente en contextos BDSM consensuados.',
      },
      vanilla: {
        label: 'vainilla',
        description:
          'Preferencias sexuales más convencionales y sin prácticas kink marcadas.',
      },
      hookups: {
        label: 'encuentros casuales',
        description:
          'Relaciones sexuales ocasionales sin expectativa de relación formal.',
      },
      oneNightStands: {
        label: 'aventuras de una noche',
        description:
          'Un único encuentro sexual sin continuidad relacional.',
      },
      intimacy: {
        label: 'intimidad',
        description:
          'Cercanía emocional, confianza y conexión personal entre parejas.',
      },
    },
  },
  fr: {
    questions: {
      '1': 'J’aurais des relations avec des hommes.',
      '2': 'Je pourrais m’imaginer dans un scénario sexuel avec un homme.',
      '3': 'Je me sens attiré(e) par les corps musclés.',
      '4': 'Un pénis ne fait qu’améliorer les choses. (J’aime les bites.)',
      '5': 'Je me sens attiré(e) par une peau douce et des vêtements féminins.',
      '6': 'Je pourrais m’imaginer dans un scénario sexuel avec une femme.',
      '7': 'J’aurais des relations avec des femmes.',
      '8': 'Je me surprends parfois à rêver de scénarios {{lewd}}.',
      '9': 'J’aurais des relations sexuelles de manière régulière.',
      '10': 'Je me masturbe au moins une fois par jour.',
      '11': 'Je regarde du contenu pornographique.',
      '12': 'L’idée du sexe me rebute.',
      '13': "Je pourrais dire que la '{{chastity}}' est ma vertu.",
      '14': 'J’aime l’idée d’avoir du pouvoir sur quelqu’un.',
      '15': 'J’aimerais que quelqu’un ait le contrôle sur moi.',
      '16': 'Je ne serais pas à l’aise avec {{dominated}}.',
      '17': 'J’ai des {{kinks}}/{{fetishes}} mal vus socialement.',
      '18': 'J’appartiens à des sous-communautés associées aux déviances.',
      '19': 'J’aimerais {{degraded}} ou être dégradé(e).',
      '20':
        'J’aimerais {{inflictingPain}} ou qu’on m’inflige de la douleur.',
      '21': 'Je me considère {{vanilla}}.',
      '22': 'Je trouve la plupart des fétiches dégoûtants.',
      '23': 'Je pourrais être trop ennuyeux(se) pour certaines personnes au lit.',
      '24': 'Je ne pourrais être sexuel(le) qu’avec mon/mes partenaire(s).',
      '25': 'Le sexe devrait être un sujet romantique.',
      '26': 'L’idée de {{hookups}} ou de {{oneNightStands}} me convient.',
      '27': 'Le sexe concerne davantage le plaisir que l’{{intimacy}}.',
    },
    glossary: {
      lewd: {
        label: 'explicites',
        description:
          'Contenus ou langage sexuels très directs ou suggestifs.',
      },
      chastity: {
        label: 'chasteté',
        description:
          'Choix de s’abstenir d’activité sexuelle, souvent pour des raisons personnelles ou morales.',
      },
      dominated: {
        label: 'le fait d’être dominé(e)',
        description:
          'Prendre un rôle plus soumis, où l’autre personne dirige ou contrôle l’interaction.',
      },
      kinks: {
        label: 'kinks',
        description:
          'Préférences sexuelles moins courantes par rapport aux normes habituelles.',
      },
      fetishes: {
        label: 'fétiches',
        description:
          'Forte focalisation sexuelle sur des objets, des parties du corps ou des situations spécifiques.',
      },
      degraded: {
        label: 'dégrader',
        description:
          'Langage ou dynamiques d’humiliation pouvant faire partie d’un jeu de rôle consensuel.',
      },
      inflictingPain: {
        label: 'infliger de la douleur',
        description:
          'Faire mal dans un contexte sexuel, généralement dans des pratiques BDSM consenties.',
      },
      vanilla: {
        label: 'vanille',
        description:
          'Préférences sexuelles plutôt conventionnelles, sans pratiques kink marquées.',
      },
      hookups: {
        label: 'plans cul',
        description:
          'Rencontres sexuelles occasionnelles sans attente de relation engagée.',
      },
      oneNightStands: {
        label: 'coups d’un soir',
        description:
          'Rencontre sexuelle unique sans suite relationnelle.',
      },
      intimacy: {
        label: 'intimité',
        description:
          'Proximité émotionnelle, confiance et lien personnel entre partenaires.',
      },
    },
  },
  it: {
    questions: {
      '1': 'Avrei relazioni con uomini.',
      '2': 'Potrei immaginarmi in uno scenario sessuale con un uomo.',
      '3': 'Mi sento attratto/a dai corpi muscolosi.',
      '4': 'Un pene rende solo tutto migliore. (Mi piace il cazzo.)',
      '5': 'Mi sento attratto/a da pelle morbida e abbigliamento femminile.',
      '6': 'Potrei immaginarmi in uno scenario sessuale con una donna.',
      '7': 'Avrei relazioni con donne.',
      '8': 'A volte mi ritrovo a sognare scenari {{lewd}}.',
      '9': 'Farei sesso con regolarità.',
      '10': 'Mi masturbo almeno una volta al giorno.',
      '11': 'Guardo contenuti pornografici.',
      '12': 'L’idea del sesso mi disgusta.',
      '13': "Potrei dire che la '{{chastity}}' è la mia virtù.",
      '14': 'Mi piace l’idea di avere potere su qualcuno.',
      '15': 'Mi piacerebbe che qualcuno avesse controllo su di me.',
      '16': 'Non mi sentirei a mio agio con {{dominated}}.',
      '17': 'Ho {{kinks}}/{{fetishes}} socialmente mal visti.',
      '18': 'Appartengo a sottocomunità associate alle devianze.',
      '19': 'Mi piacerebbe {{degraded}} o essere degradato/a.',
      '20':
        'Mi piacerebbe {{inflictingPain}} o ricevere dolore.',
      '21': 'Mi considero {{vanilla}}.',
      '22': 'Trovo disgustosi la maggior parte dei feticismi.',
      '23': 'Potrei essere troppo noioso/a a letto per alcune persone.',
      '24': 'Potrei essere sessuale solo con il/la/i/le mio/mia/miei/mie partner.',
      '25': 'Il sesso dovrebbe essere un tema romantico.',
      '26': 'Mi va bene l’idea di {{hookups}} o {{oneNightStands}}.',
      '27': 'Il sesso riguarda più il piacere che l’{{intimacy}}.',
    },
    glossary: {
      lewd: {
        label: 'espliciti',
        description:
          'Contenuti o linguaggio sessuale diretto e chiaramente allusivo.',
      },
      chastity: {
        label: 'castità',
        description:
          'Scelta di astenersi dall’attività sessuale, spesso per motivi personali o morali.',
      },
      dominated: {
        label: 'l’essere dominato/a',
        description:
          'Assumere un ruolo più sottomesso, in cui un’altra persona guida o controlla l’interazione.',
      },
      kinks: {
        label: 'kink',
        description:
          'Preferenze sessuali meno comuni rispetto a quelle considerate convenzionali.',
      },
      fetishes: {
        label: 'feticismi',
        description:
          'Forte interesse sessuale verso oggetti, parti del corpo o situazioni specifiche.',
      },
      degraded: {
        label: 'degradare',
        description:
          'Linguaggio o dinamiche di umiliazione che possono far parte di un roleplay consensuale.',
      },
      inflictingPain: {
        label: 'infliggere dolore',
        description:
          'Causare dolore durante il gioco sessuale, di solito in contesti BDSM consensuali.',
      },
      vanilla: {
        label: 'vanilla',
        description:
          'Preferenze sessuali più convenzionali e senza pratiche kink marcate.',
      },
      hookups: {
        label: 'incontri occasionali',
        description:
          'Incontri sessuali casuali senza aspettativa di una relazione stabile.',
      },
      oneNightStands: {
        label: 'avventure di una notte',
        description:
          'Un singolo incontro sessuale senza seguito relazionale.',
      },
      intimacy: {
        label: 'intimità',
        description:
          'Vicinanza emotiva, fiducia e connessione personale tra partner.',
      },
    },
  },
}

export const getQuizLocalization = (language: string | undefined): QuizLocalization => {
  const normalized = (language ?? 'en').toLowerCase().split('-')[0] as QuizLocale

  if (normalized in localizations) {
    return localizations[normalized]
  }

  return localizations.en
}
