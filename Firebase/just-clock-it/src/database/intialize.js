import firebase from '../firebase';

(async function () {
  const item = await firebase.firestore().collection('CHANGEME').get();

  console.log(item.docs.length);
});

(async function () {
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

  const db = firebase.firestore().collection(collection)
  const res = []

  const item = await db.limit(1).get();
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
        // sign-planent
        if (!tracker.includes(`${sign}-${planet}`)) {
          tracker.push(`${sign}-${planet}`);
            const newDoc = { sign, planet }
            res.push(newDoc)
        }
        for (const house of houses) {
          // sign-house
          if (!tracker.includes(`${sign}-${house}`)) {
            tracker.push(`${sign}-${house}`);
            const newDoc = { sign, planet }
            res.push(newDoc)

          }
          // sign-house
          if (!tracker.includes(`${planet}-${house}`)) {
            tracker.push(`${planet}-${house}`);
            const newDoc = { planet, house }
              res.push(newDoc)
          }
            const newDoc = { sign, planet, house }
            res.push(newDoc)
        }
      }
    }
  } else {
    console.log('collection exists');
  }

  console.log(res.length)
});
