const test = function () {
  const collection = 'info-objects';

  function createEmptyInfoObject({ sign = '', planet = '', house = '' }) {
    return {
      title: sign + planet + house,
      sign,
      planet,
      house,
      ritual: '',
      meaning: '',
      element: sign2Element[sign] || '',
      imgRitual: '',
      imgMeaning: '',
    };
  }

  const signs = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces',
  ];

  const planets = [
    'Sun',
    'Moon',
    'Mercury',
    'Venus',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
  ];

  const houses = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const sign2Element = {
    Aries: 'Fire',
    Taurus: 'Earth',
    Gemini: 'Air',
    Cancer: 'Water',
    Leo: 'Fire',
    Virgo: 'Earth',
    Libra: 'Air',
    Scorpio: 'Water',
    Sagittarius: 'Fire',
    Capricorn: 'Earth',
    Aquarius: 'Air',
    Pisces: 'Water',
  };

  const db = true // firebase.firestore().collection(collection)
  const res = []

  const item =  { //await db.limit(1).get();
    empty: true
  }
  if (item.empty) {
    const tracker = [];
    for (const sign of signs) {
      if (!tracker.includes(sign)) {
        // sign
        tracker.push(sign);
        const newDoc = createEmptyInfoObject({ sign })
        res.push(newDoc)
      }
      for (const planet of planets) {
        // planet
        if (!tracker.includes(planet)) {
          tracker.push(planet);
          const newDoc = createEmptyInfoObject({ planet })
          res.push(newDoc)
        }
        // sign-planet
        if (!tracker.includes(`${sign}-${planet}`)) {
            tracker.push(`${sign}-${planet}`);
            const newDoc = createEmptyInfoObject({ sign, planet });
            res.push(newDoc)
        }
        for (const house of houses) {
          // sign-house
          if (!tracker.includes(`${sign}-${house}`)) {
            tracker.push(`${sign}-${house}`);
            const newDoc = createEmptyInfoObject({ sign, house }) // twas the problem
            res.push(newDoc)

          }
          // sign-house
          if (!tracker.includes(`${planet}-${house}`)) {
            tracker.push(`${planet}-${house}`);
            const newDoc = createEmptyInfoObject({ planet, house })
              res.push(newDoc)
          }
            const newDoc = createEmptyInfoObject({ sign, planet, house })
            res.push(newDoc)
        }
      }
    }
  } else {
    console.log('collection exists');
  }

  // console.log(res)
  return res
};

const res = test()

const filter = res.filter(item => {
  // console.log(item)
  return item.planet === 'Sun' && item.sign === 'Leo' && !!!item.house
})
console.log(filter.slice(0, 5))