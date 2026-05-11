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
    cta: string
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
      badge: 'Новый подход к спортивным ставкам',
      title: 'Соревнуйтесь в турнирах,',
      highlightedTitle: 'не рискуя большими деньгами',
      description: 'Соревнуйтесь с другими участниками в турнирах.',
      cta: 'Узнать больше',
    },
    howItWorks: {
      title: 'Как это работает',
      subtitle: 'Три простых шага от регистрации до победы в турнире',
      navigation: ['Войти в турнир', 'Делать ставки', 'Лидерборд'],
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
        heading: 'Войдите в турнир',
        text: 'Выберите интересующий вас турнир из списка доступных. Каждый турнир имеет свой призовой фонд, количество участников и длительность. Выберите уровень участия, который вам подходит — от начального до премиум. Вступительный взнос списывается с вашего баланса один раз при вступлении.',
        features: [
          'Разные уровни участия на любой бюджет',
          'Прозрачные правила и условия',
          'Мгновенный доступ после вступления',
        ],
        card: {
          title: 'Финал Лиги чемпионов',
          subtitle: 'Спрогнозируйте победителя и счет',
          levels: ['Бронза', 'Серебро', 'Золото'],
          prizePoolLabel: 'призовой фонд',
          participantsLabel: 'участников',
          durationLabel: 'длительность',
          join: 'Войти в турнир',
          ends: 'До конца: 18 июня 2026',
        },
      },
      step2: {
        badge: 'Шаг 2',
        heading: 'Делайте ставки',
        text: 'После вступления в турнир вы получаете доступ ко всем матчам. Выберите матч, изучите доступные рынки (исход, счет, тотал голов и другие) и выберите исход, в который вы верите. Добавьте его в купон. Вы можете делать одиночные ставки или собирать экспрессы из нескольких исходов.',
        features: [
          'Множество рынков на каждый матч',
          'Одиночные ставки и экспрессы',
          'Простое добавление в купон одним кликом',
        ],
        card: {
          league: 'Премьер-лига',
          live: 'Live',
          date: 'Сегодня',
          teams: ['Ман. Сити', 'Челси'],
          confirm: 'Сделать ставку',
        },
      },
      step3: {
        badge: 'Шаг 3',
        heading: 'Следите за лидербордом',
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
      title: 'Почему BETARENA?',
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
          'Защита от больших потерь — фиксированный вступительный взнос',
          'Низкий порог входа — от $10',
          'Соревнование в лидерборде с другими участниками',
          'Простой и понятный интерфейс для всех',
          'Полный контроль над расходами',
        ],
      },
      cta: 'Регистрация',
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
      badge: 'A new approach to sports betting',
      title: 'Compete in tournaments,',
      highlightedTitle: 'without risking big money',
      description: 'Compete with other participants in tournaments.',
      cta: 'Learn more',
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Three simple steps from signup to winning a tournament',
      navigation: ['Join a tournament', 'Place bets', 'Leaderboard'],
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
        heading: 'Join a tournament',
        text: 'Choose the tournament that fits you from the list of available events. Each tournament has its own prize pool, participant count, and duration. Pick the entry level that matches your budget, from starter to premium. The entry fee is charged from your balance once when you join.',
        features: [
          'Different entry levels for any budget',
          'Transparent rules and conditions',
          'Instant access right after joining',
        ],
        card: {
          title: 'Champions League Final',
          subtitle: 'Predict the winner and the score',
          levels: ['Bronze', 'Silver', 'Gold'],
          prizePoolLabel: 'prize pool',
          participantsLabel: 'participants',
          durationLabel: 'duration',
          join: 'Join tournament',
          ends: 'Ends: Jun 18, 2026',
        },
      },
      step2: {
        badge: 'Step 2',
        heading: 'Place bets',
        text: 'After joining a tournament, you get access to all matches. Pick a match, review the available markets such as outcome, score, total goals, and more, then choose the result you believe in. Add it to your slip. You can place singles or build accumulators from several picks.',
        features: [
          'Multiple markets for every match',
          'Singles and accumulator bets',
          'One-click slip selection',
        ],
        card: {
          league: 'Premier League',
          live: 'Live',
          date: 'Today',
          teams: ['Man. City', 'FC Chelsea'],
          confirm: 'Place bet',
        },
      },
      step3: {
        badge: 'Step 3',
        heading: 'Track the leaderboard',
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
      title: 'Why BETARENA?',
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
          'Protection from heavy losses with a fixed entry fee',
          'Low entry threshold starting from $10',
          'Leaderboard competition with other participants',
          'A simple and clear interface for everyone',
          'Full control over spending',
        ],
      },
      cta: 'Sign up',
    },
    footer: {
      email: 'Email',
      telegram: 'Telegram',
      rights: 'All rights reserved.',
    },
  },
}
