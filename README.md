## Usage

Currently, this project is not hosted anywhere, so follow the [local development](#local-development) instructions to run this project locally.

Then, with the app open in your browser, upload a CSV (comma-separated) file that looks like this:

```csv
prec_2012,flyered
9151,TRUE
9134,TRUE
9152,FALSE
7101,FALSE
...
```

Watch the map update with precincts that have been flyered.

To remove the CSV, click the `x` button or upload a new file.

## Contributing
### Local development

1. [Get a token from Mapbox](https://docs.mapbox.com/help/getting-started/access-tokens/) and add it to `src/tokens.js`
2. Clone this repo `git clone git@github.com:shae-wat/sf-precinct-vis.git && cd sf-precinct-vis`
3. Install the repo: `yarn install`
4. Build the react app: `yarn build`
5. Start the app: `yarn start`
6. Open the app: http://localhost:3000
