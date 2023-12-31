# Twit2Nit

[![builds.sr.ht status](https://builds.sr.ht/~djlooop/twit2nit-client.svg)](https://builds.sr.ht/~djlooop/twit2nit-client?)

Twit2Nit polls [Nitter](https://github.com/zedeus/nitter/wiki/Instances) instances for availability and allows users to choose or randomly be redirected to a healthy site.

Users may submit:

- twitter handle (e.g. waybackmachine)
- twitter status (e.g. waybackmachine/status/1327056502452936705)
- twitter url (e.g. https://twitter.com/waybackmachine?lang=en)

Servers are polled every 15 minutes, but due to rate limiting and many instances being self-hosted, sometimes an instance receiving a redirect may be temporarily unavailable.

Twit2Nit UI works by fetching a list of good instances from a server and presenting users with viewing options.

## In the wild

- visit [https://twit2nit.xyz](https://twit2nit.xyz) to try the app

## Development

Twit2Nit UI is built in React JS.

- installation: git clone
- dev server: yarn start
- build: yarn build
- test: yarn test

## Privacy and License

Twit2Nit is a free and open source, privacy-respecting GPL-v3 licensed tool and does not use cookies or tracking.

## Contributing

- Please contact development @ sr.ht/~djlooop with any questions or requests.

## Credits

Twit2Nit is inspired by [TWIIIT.com](twiiit.com) from
[Chris McCormick](https://twitter.com/mccrmx)
[TWIIT Source code on GitHub](https://github.com/chr15m/twiiit.com)

## Similar Projects

- [invidi.link](https://invidi.link) creates Invidious links for healthy instances and can also be found on [sourcehut](https://sr.ht/~djlooop/invidi.link)
- [red4u.xyz](https://red4u.xyz) creates teddit and libreddit urls for healthy instances and can also be found on [sourcehut](https://sr.ht/~djlooop/red4u.xyz/)
- [random searx](https://stringtalk.org/searx) creates random searx links for healthy instances and can also be found on [sourcehut](https://sr.ht/~djlooop/random-searx/
