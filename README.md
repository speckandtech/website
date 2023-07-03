# Speck&amp;Tech

- [Speck\&Tech](#specktech)
  - [System Preparation](#system-preparation)
  - [Local Installation](#local-installation)
  - [Jekyll Development Mode](#jekyll-development-mode)
  - [Deploy](#deploy)
  - [Management](#management)
    - [Events on the homepage hero](#events-on-the-homepage-hero)
      - [Use the "event" type](#use-the-event-type)
      - [Use the "loading" type](#use-the-loading-type)

## System Preparation

You'll need [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and the [Bundler](https://bundler.io/) gem installed on your machine.  
As our site is hosted on GitHub, you are required to procure the [same dependency versions](https://pages.github.com/versions/) they ship. 
We suggest using [rbenv](https://github.com/rbenv/rbenv).

```shell
brew install rbenv ruby-build
rbenv install 2.7.4
gem install bundler
```

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `bundle install`. It will fetch [Jekyll](http://jekyllrb.com) and its dependencies.

Compatibility issues with your platform? Fear not! Just run `bundle lock --add-platform <platform>`.

## Jekyll Development Mode

To get the server running:

```shell
bundle exec jekyll serve
# in alternative
jekyll serve
```

It will take care of livereloading and Sass compiling. If you need more info, please see the [Jekyll docs](http://jekyllrb.com/docs/usage/).

## Deploy

When you push to `master`, Github Pages will take care of building the website and deploying it at [http://speckand.tech](https://www.ruby-lang.org/en/).

<br><hr><br>

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
