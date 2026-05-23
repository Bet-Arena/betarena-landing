export type Locale = 'ru' | 'en'

type ComparisonFeature = {
  title: string
  subtitle: string
  items: string[]
}

export interface Messages {
  header: {
    brand: string
    login: string
    languageLabel: string
  }
  hero: {
    badge: string
    title: string
    highlightedTitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  howItWorks: {
    title: string
    subtitle: string
    navigation: [string, string, string]
  }
  steps: {
    leaderboardTitle: string
    totalParticipants: string
    pointsLabel: string
    correctLabel: string
    newParticipant: string
    whyBetarena: string
    step1: {
      badge: string
      heading: string
      text: string
      features: [string, string, string]
      card: {
        title: string
        subtitle: string
        levels: [string, string, string]
        prizePoolLabel: string
        participantsLabel: string
        durationLabel: string
        join: string
        ends: string
      }
    }
    step2: {
      badge: string
      heading: string
      text: string
      features: [string, string, string]
      card: {
        league: string
        live: string
        date: string
        teams: [string, string]
        confirm: string
      }
    }
    step3: {
      badge: string
      heading: string
      text: string
      features: [string, string, string]
      players: [string, string, string]
      you: string
    }
  }
  whyUs: {
    title: string
    subtitle: string
    traditional: ComparisonFeature
    betarena: ComparisonFeature
    cta: string
    scheduleTitle: string
    scheduleSubtitle: string
    scheduleFinalBadge: string
    schedulePrizesNote: string
    scheduleRows: Array<{
      num: string
      name: string
      dates: string
      fee: string
      prize: string
      isFinal: boolean
    }>
  }
  footer: {
    email: string
    telegram: string
    rights: string
  }
}

export const translations: Record<Locale, Messages> = {
  ru: {
    header: {
      brand: 'BetArena',
      login: 'Войти',
      languageLabel: 'Переключатель языка',
    },
    hero: {
      badge: '⚽ FIFA World Cup 2026',
      title: 'Прогнозируй на ЧМ 2026 —',
      highlightedTitle: 'выигрывай призы',
      description: 'Соревнуйся с другими участниками в турнирах по прогнозам. Без огромных рисков — только твои знания футбола.',
      ctaPrimary: 'Зарегистрироваться',
      ctaSecondary: 'Узнать больше',
    },
    howItWorks: {
      title: 'Как это работает',
      subtitle: 'Три простых шага от регистрации до победы в турнире',
      navigation: ['Войти в турнир', 'Делать прогнозы', 'Лидерборд'],
    },
    steps: {
      leaderboardTitle: 'Лидерборд',
      totalParticipants: 'Всего участников: 1,234',
      pointsLabel: 'очков',
      correctLabel: 'верно',
      newParticipant: 'Новый участник!',
      whyBetarena: 'Почему BetArena →',
      step1: {
        badge: 'Шаг 1',
        heading: 'Войдите в турнир ЧМ 2026',
        text: 'Выберите турнир по Чемпионату мира 2026 из списка доступных. Каждый турнир имеет свой призовой фонд, количество участников и длительность. Выберите уровень участия, который вам подходит — от начального до премиум. Вступительный взнос списывается с вашего баланса один раз при вступлении.',
        features: [
          'Разные уровни участия на любой бюджет',
          'Прозрачные правила и условия',
          'Мгновенный доступ после вступления',
        ],
        card: {
          title: 'FIFA World Cup 2026',
          subtitle: 'Предсказывай победителя и счёт матчей ЧМ',
          levels: ['Бронза', 'Серебро', 'Золото'],
          prizePoolLabel: 'призовой фонд',
          participantsLabel: 'участников',
          durationLabel: 'длительность',
          join: 'Войти в турнир',
          ends: 'До конца: 19 июля 2026',
        },
      },
      step2: {
        badge: 'Шаг 2',
        heading: 'Делайте прогнозы на матчи ЧМ',
        text: 'После вступления в турнир вы получаете доступ ко всем матчам ЧМ 2026. Выберите матч, изучите доступные рынки (исход, счёт, тотал голов и другие) и выберите исход, в который вы верите. Добавьте его в купон. Вы можете делать одиночные прогнозы или собирать экспрессы из нескольких исходов.',
        features: [
          'Множество рынков на каждый матч',
          'Одиночные прогнозы и экспрессы',
          'Простое добавление в купон одним кликом',
        ],
        card: {
          league: 'FIFA World Cup 2026',
          live: 'Live',
          date: 'Сегодня',
          teams: ['Ман. Сити', 'Челси'],
          confirm: 'Сделать прогноз',
        },
      },
      step3: {
        badge: 'Шаг 3',
        heading: 'Следите за лидербордом и побеждайте',
        text: 'За каждый правильный прогноз вы получаете очки. Чем точнее ваш прогноз, тем больше очков вы зарабатываете. Лидерборд обновляется в реальном времени после каждого завершенного матча. Топ игроки получают призы из призового фонда турнира. Следите за своей позицией и стремитесь к вершине!',
        features: [
          'Очки за каждый правильный прогноз',
          'Обновление рейтинга в реальном времени',
          'Призы для топ игроков',
        ],
        players: ['Игрок #1', 'Игрок #2', 'Игрок #3'],
        you: 'Вы',
      },
    },
    whyUs: {
      title: 'Почему BetArena для ЧМ 2026?',
      subtitle: 'Мы отличаемся от традиционных букмекеров',
      traditional: {
        title: 'Традиционные букмекеры',
        subtitle: 'Winline и другие',
        items: [
          'Риск потерять большие деньги на каждом матче',
          'Высокие минимальные ставки',
          'Нет соревновательного элемента',
          'Сложно начать новичкам',
          'Нет контроля над расходами',
        ],
      },
      betarena: {
        title: 'BetArena',
        subtitle: 'Наш подход',
        items: [
          'Фиксированный взнос — без риска больших потерь',
          'Вход от $10',
          'Бесплатные турниры с реальными призами',
          'Гарантированный призовой фонд $25 000',
          'Билеты на финальную стадию ЧМ в числе призов',
          'Простой интерфейс для всех',
        ],
      },
      cta: 'Как это работает',
      scheduleTitle: 'Расписание турниров',
      scheduleSubtitle: 'Выбирай этап, который тебе по душе',
      scheduleFinalBadge: '🏆 ФИНАЛ',
      schedulePrizesNote: '🎟️ Среди призов — бесплатные билеты на финальную стадию ЧМ',
      scheduleRows: [
        { num: '1', name: 'Групповой этап — Тур 1', dates: 'Скоро', fee: 'Бесплатно', prize: 'до $500', isFinal: false },
        { num: '2', name: '1/16 финала', dates: '29 июня – 4 июля', fee: 'Скоро', prize: 'до $500', isFinal: false },
        { num: '3', name: '1/8 финала', dates: 'Скоро', fee: 'Скоро', prize: 'до $500', isFinal: false },
        { num: '4', name: '1/4 и 1/2 финала', dates: 'Скоро', fee: 'Скоро', prize: 'до $500', isFinal: false },
        { num: '5', name: '🏆 Финальный плей-офф', dates: '4 июля – 19 июля', fee: '$10', prize: '$20 000+', isFinal: true },
      ],
    },
    footer: {
      email: 'Email',
      telegram: 'Telegram',
      rights: 'Все права защищены.',
    },
  },
  en: {
    header: {
      brand: 'BetArena',
      login: 'Log in',
      languageLabel: 'Language switcher',
    },
    hero: {
      badge: '⚽ FIFA World Cup 2026',
      title: 'Predict on World Cup 2026 —',
      highlightedTitle: 'win prizes',
      description: 'Compete with others in prediction tournaments. Without huge risks — just your football knowledge.',
      ctaPrimary: 'Sign up',
      ctaSecondary: 'Learn more',
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Three simple steps from signup to winning a tournament',
      navigation: ['Join a tournament', 'Place predictions', 'Leaderboard'],
    },
    steps: {
      leaderboardTitle: 'Leaderboard',
      totalParticipants: 'Total participants: 1,234',
      pointsLabel: 'points',
      correctLabel: 'correct',
      newParticipant: 'New participant!',
      whyBetarena: 'Why BetArena →',
      step1: {
        badge: 'Step 1',
        heading: 'Join a World Cup 2026 tournament',
        text: 'Choose the FIFA World Cup 2026 tournament that fits you from the list of available events. Each tournament has its own prize pool, participant count, and duration. Pick the entry level that matches your budget, from starter to premium. The entry fee is charged from your balance once when you join.',
        features: [
          'Different entry levels for any budget',
          'Transparent rules and conditions',
          'Instant access right after joining',
        ],
        card: {
          title: 'FIFA World Cup 2026',
          subtitle: 'Predict the winner and score of World Cup matches',
          levels: ['Bronze', 'Silver', 'Gold'],
          prizePoolLabel: 'prize pool',
          participantsLabel: 'participants',
          durationLabel: 'duration',
          join: 'Join tournament',
          ends: 'Ends: Jul 19, 2026',
        },
      },
      step2: {
        badge: 'Step 2',
        heading: 'Place predictions on World Cup matches',
        text: 'After joining a tournament, you get access to all World Cup 2026 matches. Pick a match, review the available markets such as outcome, score, total goals, and more, then choose the result you believe in. Add it to your slip. You can place singles or build accumulators from several picks.',
        features: [
          'Multiple markets for every match',
          'Singles and accumulator predictions',
          'One-click slip selection',
        ],
        card: {
          league: 'FIFA World Cup 2026',
          live: 'Live',
          date: 'Today',
          teams: ['Man. City', 'FC Chelsea'],
          confirm: 'Place prediction',
        },
      },
      step3: {
        badge: 'Step 3',
        heading: 'Track the leaderboard and win',
        text: 'You earn points for every correct prediction. The more accurate your pick is, the more points you score. The leaderboard updates in real time after every finished match. Top players win prizes from the tournament pool. Track your position and push for the top.',
        features: [
          'Points for every correct prediction',
          'Real-time leaderboard updates',
          'Prizes for top players',
        ],
        players: ['Player #1', 'Player #2', 'Player #3'],
        you: 'You',
      },
    },
    whyUs: {
      title: 'Why BetArena for World Cup 2026?',
      subtitle: 'We are different from traditional bookmakers',
      traditional: {
        title: 'Traditional bookmakers',
        subtitle: 'Winline and others',
        items: [
          'Risk of losing large sums on every match',
          'High minimum stakes',
          'No competitive layer',
          'Hard for newcomers to start',
          'No spending control',
        ],
      },
      betarena: {
        title: 'BetArena',
        subtitle: 'Our approach',
        items: [
          'Fixed entry fee — no risk of big losses',
          'Entry from $10',
          'Free tournaments with real prizes',
          'Guaranteed prize pool $25,000',
          'World Cup final stage tickets among prizes',
          'Simple interface for everyone',
        ],
      },
      cta: 'How it works',
      scheduleTitle: 'Tournament Schedule',
      scheduleSubtitle: 'Pick the stage you like',
      scheduleFinalBadge: '🏆 FINAL',
      schedulePrizesNote: '🎟️ Among prizes — free tickets to the World Cup final stage',
      scheduleRows: [
        { num: '1', name: 'Group Stage — Round 1', dates: 'Coming soon', fee: 'Free', prize: 'up to $500', isFinal: false },
        { num: '2', name: 'Round of 32', dates: 'Jun 29 – Jul 4', fee: 'Coming soon', prize: 'up to $500', isFinal: false },
        { num: '3', name: 'Round of 16', dates: 'Coming soon', fee: 'Coming soon', prize: 'up to $500', isFinal: false },
        { num: '4', name: 'Quarter & Semi Finals', dates: 'Coming soon', fee: 'Coming soon', prize: 'up to $500', isFinal: false },
        { num: '5', name: '🏆 Final Play-off', dates: 'Jul 4 – Jul 19', fee: '$10', prize: '$20,000+', isFinal: true },
      ],
    },
    footer: {
      email: 'Email',
      telegram: 'Telegram',
      rights: 'All rights reserved.',
    },
  },
}
