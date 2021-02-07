// !!! NOTE: By the time of releasing, the API and its documentation has changed a bit.
// For the first step of the challenge you'll need a URL which isn't mentioned in their docs anymore.
// Check the HINTS section on the challenge's page for instruction or the YouTube video.

/**
 * STEPS
 * 1. Add an event listener to the form and the button
 * 2. Tie the event listener a function that GETs suggestions for the searched words and outputs it
 * 3. Build a list with the results where each item has a button "Get Lyrics" of that entry and read out the artist and song name of the list item that was clicked
 * 4. Create a function that GETs the requested song lyric and output the result
 * 5. Extend the app with disabled/loading/error states and adjust the UI accordingly
 */

// API
const endPoint = 'https://api.lyrics.ovh/';
