# Speck&amp;Tech

- [Speck\&Tech](#specktech)
  - [System Preparation](#system-preparation)
  - [Local Installation](#local-installation)
  - [Usage](#usage)
    - [Development mode](#development-mode)
    - [Jekyll](#jekyll)
  - [Deploy](#deploy)
  - [Management](#management)
    - [Events on the homepage hero](#events-on-the-homepage-hero)
      - [Use the "event" type](#use-the-event-type)
      - [Use the "loading" type](#use-the-loading-type)


## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Ruby](https://www.ruby-lang.org/en/)
2. [NodeJS](http://nodejs.org) - use the installer.
3. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`

## Usage

### Development mode

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc.

```shell
$ npm run gulp
```

### Jekyll

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)

## Deploy

When you push to `master`, Github Pages will take care of building the website and deploying it at [http://speckand.tech](https://www.ruby-lang.org/en/).

---

## Management

How to use the website to expose content. If you are an editor this is the section for you.

### Events on the homepage hero

For a matter of simplicity, when the hero is in `loading` mode several fields are not shown even if they have a value.

The hero is managed by editing `_data/homepage-event.json`.

The most important field is `type`. Is used to set the mode of the hero.

You can use two types of `type`:

- `event`: During regular events when we have all necessary data
- `loading`: Before a new event

#### Use the "event" type

> We are near event 42 and we need to display all the information on the homepage.

Set the `type` field to `event`.
Fill in all the other necessary fields. Remember that if a field has a value it will be visible.

#### Use the "loading" type

> Event 64 has finished, we need to remove the details from the homepage.

You need to change `type` from `event` to `loading` and empty the `ticket-url` field if filled.

> We don't have details for the event but we want to publish the tickets page.

Once you have the link to the tickets page set the `ticket-url` field.
Example: `"ticket-url": "//bit.ly/ST-64"`.
