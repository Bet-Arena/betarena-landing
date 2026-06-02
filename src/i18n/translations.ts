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
    bracketRounds: [string, string, string, string, string]
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
        levels: string[]
        prizePoolLabel: string
        participantsLabel: string
        durationLabel: string
        durationValue: string
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
    scheduleRulesTitle: string
    scheduleRules: string
    scheduleFinalBadge: string
    scheduleGuaranteeStamp: string
    schedulePrizesNote: string
    scheduleHeader: [string, string, string, string]
    scheduleRows: Array<{
      num: string
      name: string
      dates: string
      details?: string
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
      bracketRounds: ['1/16', '1/8', '1/4', '1/2', 'Финал'],
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
      whyBetarena: 'Зарегистрироваться',
      step1: {
        badge: 'Шаг 1',
        heading: 'Войдите в турнир ЧМ 2026',
        text: 'Выберите турнир по Чемпионату мира 2026 из списка доступных. Каждый турнир имеет свой призовой фонд, количество участников и длительность. Будут доступны как бесплатные этапы, так и платный финальный турнир. Вступительный взнос списывается один раз при вступлении.',
        features: [
          'Бесплатные и платные турниры',
          'Прозрачные правила и условия',
          'Мгновенный доступ после вступления',
        ],
        card: {
          title: 'FIFA World Cup 2026',
          subtitle: 'Предсказывай победителя и счёт матчей ЧМ',
          levels: ['Золото'],
          prizePoolLabel: 'призовой фонд',
          participantsLabel: 'участников',
          durationLabel: 'длительность',
          durationValue: '43 дня',
          join: 'Войти в турнир',
          ends: 'До конца: 19 июля 2026',
        },
      },
      step2: {
        badge: 'Шаг 2',
        heading: 'Делайте прогнозы на матчи ЧМ',
        text: 'После вступления в турнир вы получаете доступ к матчам турнира. Выберите матч, изучите доступные рынки (исход, счёт, тотал голов и другие) и выберите исход, в который вы верите. Добавьте его в купон. Вы можете делать одиночные прогнозы или собирать экспрессы из нескольких исходов.',
        features: [
          'Множество рынков на каждый матч',
          'Одиночные прогнозы и экспрессы',
          'Простое добавление в купон одним кликом',
        ],
        card: {
          league: 'FIFA World Cup 2026',
          live: 'Live',
          date: 'Сегодня',
          teams: ['Португалия', 'Аргентина'],
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
        title: 'Классические букмекеры',
        subtitle: 'Другие',
        items: [
          'Один неудачный вечер может уничтожить весь банк',
          'Классические букмекеры зарабатывают на проигрышах игроков',
          'Ставки легко превращаются в бесконечную попытку отыграться',
          'Большой выигрыш почти всегда требует большого риска',
        ],
      },
      betarena: {
        title: 'BetArena',
        subtitle: 'Наш подход',
        items: [
          'Один вход вместо бесконечных депозитов',
          'Один неудачный матч не выбивает из борьбы',
          'Игроки соревнуются друг с другом, а не против системы',
          'Бесплатные турниры с реальными призами',
        ],
      },
      cta: 'Как это работает',
      scheduleTitle: 'Расписание турниров',
      scheduleSubtitle: 'Три этапа — от группового до финала',
      scheduleRulesTitle: 'Изучите правила перед стартом',
      scheduleRules: 'Турниры могут отличаться по количеству матчей, прогнозов и формату участия.',
      scheduleFinalBadge: '🏆 ФИНАЛ',
      scheduleGuaranteeStamp: '✓ Гарантировано',
      schedulePrizesNote: '🎟️ Среди призов — гарантированные выплаты и билеты в финальный турнир BetArena',
      scheduleHeader: ['Этап', 'Даты', 'Взнос', 'Призовой фонд'],
      scheduleRows: [
        { num: '1', name: 'Групповой этап', dates: '11 июня – 28 июня 2026', details: '6 турниров', fee: 'Бесплатно', prize: '$600 на каждый турнир', isFinal: false },
        { num: '2', name: '1/16 финала', dates: '3 – 6 июля 2026', details: '2 турнира', fee: 'Бесплатно', prize: '$700 на каждый турнир', isFinal: false },
        { num: '3', name: 'Финальная стадия (1/8 – Финал)', dates: '7 – 19 июля 2026', fee: '$10', prize: '$20 000+', isFinal: true },
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
      bracketRounds: ['R32', 'R16', 'QF', 'SF', 'Final'],
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
      whyBetarena: 'Sign up',
      step1: {
        badge: 'Step 1',
        heading: 'Join a World Cup 2026 tournament',
        text: 'Choose the FIFA World Cup 2026 tournament that fits you from the list of available events. Each tournament has its own prize pool, participant count, and duration. Both free stages and a paid final tournament will be available. The entry fee is charged once when you join.',
        features: [
          'Free and paid tournaments',
          'Transparent rules and conditions',
          'Instant access right after joining',
        ],
        card: {
          title: 'FIFA World Cup 2026',
          subtitle: 'Predict the winner and score of World Cup matches',
          levels: ['Gold'],
          prizePoolLabel: 'prize pool',
          participantsLabel: 'participants',
          durationLabel: 'duration',
          durationValue: '43 days',
          join: 'Join tournament',
          ends: 'Ends: Jul 19, 2026',
        },
      },
      step2: {
        badge: 'Step 2',
        heading: 'Place predictions on World Cup matches',
        text: 'After joining a tournament, you get access to tournament matches. Pick a match, review the available markets such as outcome, score, total goals, and more, then choose the result you believe in. Add it to your slip. You can place singles or build accumulators from several picks.',
        features: [
          'Multiple markets for every match',
          'Singles and accumulator predictions',
          'One-click slip selection',
        ],
        card: {
          league: 'FIFA World Cup 2026',
          live: 'Live',
          date: 'Today',
          teams: ['Portugal', 'Argentina'],
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
        title: 'Classic bookmakers',
        subtitle: 'Others',
        items: [
          'One bad evening can wipe out your entire bankroll',
          'Traditional bookmakers profit from player losses',
          'Bets easily turn into an endless chase to win back',
          'Big wins almost always require big risks',
        ],
      },
      betarena: {
        title: 'BetArena',
        subtitle: 'Our approach',
        items: [
          'One entry instead of endless deposits',
          'One bad match doesn\'t knock you out of contention',
          'Players compete against each other, not the system',
          'Free tournaments with real prizes',
        ],
      },
      cta: 'How it works',
      scheduleTitle: 'Tournament Schedule',
      scheduleSubtitle: 'Three stages — from group stage to final',
      scheduleRulesTitle: 'Study the rules before the start',
      scheduleRules: 'Tournaments can differ by number of matches, predictions, and participation format.',
      scheduleFinalBadge: '🏆 FINAL',
      scheduleGuaranteeStamp: '✓ Guaranteed',
      schedulePrizesNote: '🎟️ Among prizes — guaranteed payouts and tickets to the BetArena final tournament',
      scheduleHeader: ['Stage', 'Dates', 'Entry Fee', 'Prize Pool'],
      scheduleRows: [
        { num: '1', name: 'Group Stage', dates: 'Jun 11 – 28, 2026', details: '6 tournaments', fee: 'Free', prize: '$600 per tournament', isFinal: false },
        { num: '2', name: 'Round of 32', dates: 'Jul 3 – 6, 2026', details: '2 tournaments', fee: 'Free', prize: '$700 per tournament', isFinal: false },
        { num: '3', name: 'Final Stage (R16 – Final)', dates: 'Jul 7 – 19, 2026', fee: '$10', prize: '$20,000+', isFinal: true },
      ],
    },
    footer: {
      email: 'Email',
      telegram: 'Telegram',
      rights: 'All rights reserved.',
    },
  },
}
