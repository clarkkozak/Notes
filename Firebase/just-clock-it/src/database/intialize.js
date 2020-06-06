import firebase from '../firebase';

// (async function () {
//   const item = await firebase.firestore().collection(collection).get();

//   console.log(item.docs.length);
// })();

(async function () {
  const collection = 't6';

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

  const item = await firebase.firestore().collection(collection).limit(1).get();
  if (item.empty) {
    const tracker = [];
    for (const sign of signs) {
      if (!tracker.includes(sign)) {
        // sign
        tracker.push(sign);
        firebase
          .firestore()
          .collection(collection)
          .add(createEmptyInfoObject({ sign }));
      }
      for (const planet of planets) {
        // planet
        if (!tracker.includes(planet)) {
          tracker.push(planet);
          firebase
            .firestore()
            .collection(collection)
            .add(createEmptyInfoObject({ planet }));
        }
        // sign-planent
        if (!tracker.includes(`${sign}-${planet}`)) {
          tracker.push(`${sign}-${planet}`);
          firebase
            .firestore()
            .collection(collection)
            .add(createEmptyInfoObject({ sign, planet }));
        }
        for (const house of houses) {
          // sign-house
          if (!tracker.includes(`${sign}-${house}`)) {
            tracker.push(`${sign}-${house}`);
            firebase
              .firestore()
              .collection(collection)
              .add(createEmptyInfoObject({ sign, house }));
          }
          // sign-house
          if (!tracker.includes(`${planet}-${house}`)) {
            tracker.push(`${planet}-${house}`);
            await firebase
              .firestore()
              .collection(collection)
              .add(createEmptyInfoObject({ planet, house }));
          }
          await firebase
            .firestore()
            .collection(collection)
            .add(createEmptyInfoObject({ sign, planet, house }));
        }
      }
    }
  } else {
    console.log('collection exists');
  }
})();
