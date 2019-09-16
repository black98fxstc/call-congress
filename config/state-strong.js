// Configuration for the default call congress hotline, hosted at
// 1-844-USA-0234.

module.exports = {
//    debug: true,
    audio: {
      switchboard: {
        introAudio: 'audio/statestrong/introduction.mp3',
        options: {
          '1': {
            action: 'call_state_upper_house',
            audio: 'audio/statestrong/upper_house.mp3',
          },
          '2': {
            action: 'call_state_lower_house',
            audio: 'audio/statestrong/lower_house.mp3',
          },
          '3': {
            action: 'call_state_legislators',
            audio: 'audio/statestrong/both_houses.mp3',
          },
        },
      },
  
      // Backup in case Twilio follows old route during transition.
      introAndPromptForZip: 'audio/v2/zip_prompt.mp3',
  
      pleaseEnterZip: 'audio/general/enter_your_zip.mp3',
      errorEncountered: 'audio/v2/error.mp3',
      aboutToStart: 'audio/statestrong/about_to_start.mp3',
      stateUpperStart: 'audio/statestrong/upper_start.mp3',
      stateLowerStart: 'audio/statestrong/lower_start.mp3',
      stateBothStart: 'audio/statestrong/about_to_start.mp3',
      nextCallBeginning: 'audio/statestrong/next_call.mp3',
      done: 'audio/statestrong/finished.mp3',
      
      senator: 'audio/v2/senator.mp3',
      representative: 'audio/v2/representative.mp3',
      stateUpperTitle: 'audio/statestrong/upper_intro.mp3',
      stateLowerTitle: 'audio/statestrong/lower_intro.mp3',
    },
  
    audioOptions: {
      addPromptForZipCode: false,
    },
  
    target: {
      sortFn: (a, b) => {
        // Sort function between two sunlight person objects.
        if (a.getChamber() !== 'senate') {
          return 1;
        }
        // Return members of the house FIRST.
        return -1;
      },
    },
  };
  