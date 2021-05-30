# Twit2Nit UI

Twit2Nit polls nitter instances for availablity and allows users to choose or randomly be redirected to a healthy site.

Users may submit:

- twitter handle (e.g. waybackmachine)
- twitter status (e.g. waybackmachine/status/1327056502452936705)
- twitter url (e.g. https://twitter.com/waybackmachine?lang=en)

Servers are polled every 15 minutes, but due to rate limiting and many instances being self-hosted, sometimes an instance receiving a redirect may be temporarily unavailable.

Twit2Nit UI works by fetching a list of good instances from a server and prenseting users with viewing options.

## Development

Twit2Nit UI is built in React JS.

- installation: git clone
- dev server: yarn start
- build: yarn build
- test: yarn test

## Privacy and License

Twit2Nit is a free and open source, privacy-respecting GPL-v3 licensed tool which does not use cookies or tracking.

## Contributing

- Please contact development @ sr.ht/~djlooop with any questions or requests.

## Credits

Twit2Nit is inspired by [TWIIIT.com](twiiit.com) from
[Chris McCormick](https://twitter.com/mccrmx)
[TWIIT Source code on GitHub](https://github.com/chr15m/twiiit.com)

## Similar Projects

- [invidi.link](https://invidi.link) creates Invidious links and can also be found on [sourcehut](https://sr.ht/~djlooop/invidi.link)
