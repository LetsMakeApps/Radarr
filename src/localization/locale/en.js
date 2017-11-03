/**
 * Radarr App
 * https://github.com/LetsMakeApps/Radarr
 * @flow
 */

//////////
// Main //
//////////

/////////////////
// Third-party //
/////////////////

////////////
// Custom //
////////////

//////////
// Init //
//////////
// Locale identifier: https://pt.wikipedia.org/wiki/Internacionaliza%C3%A7%C3%A3o_(inform%C3%A1tica)#Conceito_de_Locale
export default {
  tba      : 'TBA',
  announced: 'Announced',
  inCinemas: 'In Cinemas',
  released : 'Released',
  preDB    : 'PreDB',
  unknown  : 'Unknown',

  downloaded : 'Downloaded',
  available  : 'Available',
  unavailable: 'Unavailable',
  monitored  : 'Monitored',
  unmonitored: 'Unmonitored',

  queued     : 'Queued',
  paused     : 'Paused',
  downloading: 'Downloading',
  completed  : 'Completed',
  failed     : 'Failed',
  warning    : 'Warning',

  movies        : 'Movies',
  movieDetails  : 'Movie Details',
  movieEdit     : 'Movie Preferences',
  servers       : 'Servers',
  serverAdd     : 'Adding server',
  serverEditName: 'Editing {{name}}',
  notifications : 'Notifications',

  movie        : 'Movie',
  profile      : 'Profile',
  queue        : 'Queue',
  history      : 'History',
  wantedMissing: 'Wanted/Missing',
  calendar     : 'Calendar',
  diskspace    : 'Diskspace',
  systemStatus : 'System/Status',
  mediaCover   : 'Media Cover',

  name     : 'Name',
  icon     : 'Icon',
  color    : 'Color',
  iconColor: 'Icon color',
  host     : 'Host',
  port     : 'Port',
  urlBase  : 'Url Base',
  ssl      : 'SSL',
  apiKey   : 'API Key',

  titleAZ            : 'Title A-Z',
  titleZA            : 'Title Z-A',
  latestAdded        : 'Latest added',
  earliestAdded      : 'Earliest added',
  latestDownloaded   : 'Latest downloaded',
  earliestDownloaded : 'Earliest downloaded',
  upcoming           : 'Upcoming',
  overview           : 'Overview',
  info               : 'Info',
  file               : 'File',
  videoFirstLetter   : 'V',
  audioFirstLetter   : 'A',
  quality            : 'Quality',
  size               : 'Size',
  edition            : 'Edition',
  videoCodec         : 'Video Codec',
  audioFormat        : 'Audio Format',
  width              : 'Width',
  height             : 'Height',
  fps                : 'Fps',
  audioLanguage      : 'Audio Language',
  subtitle           : 'Subtitle',
  runTime            : 'Runtime',
  studio             : 'Studio',
  dateAdded          : 'Added',
  rating             : 'Rating',
  votes              : 'Votes',
  year               : 'Year',
  minimumAvailability: 'Minimum Availability',
  path               : 'Path',

  searchMovie        : 'Search movie',
  goAddAServer       : 'Go add a server',
  gettingMovies      : 'Getting movies...',
  sortingMovies      : 'Sorting movies...',
  noMoviesFound      : 'No movies found',
  nothingMoreToLoad  : 'Nothing more to load!',
  loading            : 'Loading...',
  loadingMore        : 'Loading more...',
  showingUpToNResults: 'Showing up to {{n}} results',
  theEnd             : 'The End',
  noFileFound        : 'No file found',
  resyncMovieInfo    : 'Resync movie info',
  redownloadPoster   : 'Redownload poster',
  redownloadBanner   : 'Redownload banner',

  gotStored               : 'got stored',
  nothingStored           : 'nothing stored',
  serverIsUnreacheable    : 'server is unreacheable',
  emptyResponseFromServer : 'empty response from server',
  fetchedNewDataFromServer: 'fetched new data from server',
  downloadedForTitle      : 'got for {{title}}',
  syncDone                : 'Synchronization done',
  mediaCoverDownloadAlert : 'There are {{n}} movie covers to download with an average of {{banner}} for banners and {{poster}} for posters. Proceed?',

  save          : 'Save',
  prev          : 'Prev',
  next          : 'Next',
  done          : 'Done',
  close         : 'Close',
  holdToRemove  : 'Hold to remove',
  removeAll     : 'Remove all',
  removeSelected: 'Remove selected',
  cancel        : 'Cancel',
  edit          : 'Edit',
  search        : 'Search',
  back          : 'Back',

  helperTextForName   : 'Like Deep Thought or HAL9000',
  helperTextForHost   : "This great evil, where's it come from?",
  helperTextForPort   : 'Usually 7878',
  helperTextForUrlBase: 'Useful for reverse proxy, empty otherwise',
  helperTextForSsl    : 'Are you trying to keep Dark Army out?',
  helperTextForApiKey : 'Found on Settings > General',

  errorApiKeyCannotBeEmpty    : 'API Key cannot be empty',
  errorApiKeyIsInvalid        : 'API Key is invalid',
  errorHostCannotBeEmpty      : 'Host cannot be empty',
  errorIconCannotBeEmpty      : 'Icon cannot be empty',
  errorIconChooseAnIcon       : 'Icon must be selected',
  errorIconColorCannotBeEmpty : 'Icon color cannot be empty',
  errorIconColorNotAValidColor: 'Icon color is invalid',
  errorNameCannotBeEmpty      : 'Name cannot be empty',
  errorNameIsLimitedToNChars  : 'Name is limited to {{n}} chars',
  errorPortCannotBeEmpty      : 'Port cannot be empty',
  errorPortIsInvalid          : 'Port is invalid',
  errorSslIsInvalid           : 'SSL must be true or false',

  requestTimeout          : 'Request timeout',
  specifiedServerNotFound : 'Specified Server not found',
  noServersFound          : 'No Servers found',
  'Network request failed': 'Failed to reach server, check WiFi and if server is online',

  Absurdist        : 'Absurdist',
  Action           : 'Action',
  Adventure        : 'Adventure',
  Animation        : 'Animation',
  Biography        : 'Biography',
  Comedy           : 'Comedy',
  Crime            : 'Crime',
  Documentary      : 'Documentary',
  Drama            : 'Drama',
  Family           : 'Family',
  Fantasy          : 'Fantasy',
  'Film-Noir'      : 'Film-Noir',
  History          : 'History',
  Horror           : 'Horror',
  Music            : 'Music',
  Musical          : 'Musical',
  Mystery          : 'Mystery',
  Romance          : 'Romance',
  'Sci-Fi'         : 'Sci-Fi',
  'Science Fiction': 'Science Fiction',
  Sport            : 'Sport',
  Surreal          : 'Surreal',
  'TV Movie'       : 'TV Movie',
  Thriller         : 'Thriller',
  War              : 'War',
  Western          : 'Western',
  Whimsical        : 'Whimsical',

  hrs: 'hrs',
  min: 'min',
  sec: 'sec',

  true : 'Yes',
  false: 'No',

  number: {
    human: {
      storage_units: {
        units: {
          byte: {
            one  : 'Byte',
            other: 'Bytes',
          },
          kb: 'KB',
          mb: 'MB',
          gb: 'GB',
          tb: 'TB',
        },
      },
    },
  },
}
