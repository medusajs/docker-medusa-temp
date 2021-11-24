<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/129161578-19b83dc8-fac5-4520-bd48-53cba676edd2.png" width="100" />
  </a>
</p>
<h1 align="center">
  Docker Medusa
</h1>
<p align="center">
This repo provides the basis for you to get started with a complete <a href="https://github.com/medusajs/medusa">Medusa</a> setup using docker compose. The complete setup includes: 
<ul>
  <li><b>Medusa Server</b>: the central server of your medusa instance, located in the <i>backend</i> folder</li>
  <li><b>Medusa Admin</b>: the administrative server of your medusa instance, this is where you control all aspects of your store</li>
  <li><b>Storefront</b>: This is what your customers will see when they access your webshop</li>
</ul>

This project is inteded for development only at this time.

The files for both the <i>Medusa Server</i> and the <i>Storefront</i> are loaded in Bind Mounts allowing you to change the server functionality and have the change be hot-reloaded onto your running containers.

 <!-- Follow the steps below to get ready. -->
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

<!-- ## Prerequisites

This starter has minimal prerequisites and most of these will usually already be installed on your computer.

- [Install Node.js](https://nodejs.org/en/download/)
- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install SQLite](https://www.sqlite.org/download.html) -->

## Setting up your Medusa

---

- Run docker compose

```
docker compose up
```

Your services are now running on the following ports:

<ul>
  <li><b>Medusa Server</b>: 9000
  <li><b>Medusa Admin</b>: 7000
  <li><b>Storefront</b>: 8000
  <li><b>postgres</b>: 5432
  <li><b>redis</b>: 6379
</ul>

### Seeding your Medusa store

---

To add seed data to your medusa store run this command in a seperate

```
docker exec medusa-server medusa seed -f ./data/seed.json
```

## Try it out

---

```
curl -X GET localhost:9000/store/products | python -m json.tool
```

After the seed script has run you will have the following things in you database:

- a User with the email: admin@medusa-test.com and password: supersecret
- a Region called Default Region with the countries GB, DE, DK, SE, FR, ES, IT
- a Shipping Option called Standard Shipping which costs 10 EUR
- a Product called Cool Test Product with 4 Product Variants that all cost 19.50 EUR

Visit [docs.medusa-commerce.com](https://docs.medusa-comerce.com) for further guides.

<p>
  <a href="https://www.medusa-commerce.com">
    Website
  </a> 
  |
  <a href="https://medusajs.notion.site/medusajs/Medusa-Home-3485f8605d834a07949b17d1a9f7eafd">
    Notion Home
  </a>
  |
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    Twitter
  </a>
  |
  <a href="https://docs.medusa-commerce.com">
    Docs
  </a>
</p>
