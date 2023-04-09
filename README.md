[Image Logo]

[Image Architecture]

# Project ShootingStar

- What :
- Why : To collect news headlines from all over the world
- Target
  - USA
    - Newyork Times
    - WallStreetJournal
  - UK : The Economist
  - China : People's Daily
  - Japan : The Asahi Shimbun
  - France : Le monde
  - South Korea
    - Hankyung
    - Ministry of Trade, Industry and Engergy

## News

- 2023-04-08 : Kickoff the project
- 2023-04-09 : Add NYT page target and successfully deploy flask application on EC2 ubuntu server!
- 2023-04-09 : Build nest.js api and connect with scraper flask server

## Troubleshooting

## Who need this?

## What can I do

## Check this out before using

### robots.txt

check '<target-website>/robots.txt' if scraping target page is allowed.

### set environment file

create `.env` file in root directory and put your id, pw like below.

```

```

### get proper driver

If driver-related problem occurs, make sure to use proper chromedriver. In this root directory, you will find chromedriver for mac arm64.

Check driver that fits your browser's version(https://chromedriver.chromium.org/)
