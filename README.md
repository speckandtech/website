
<br/>
<p align="center">
  <img width="450px" src="assets/images/graphics/banner.png" alt="Speck&Tech">
</p>

#

<br/>

### System Preparation

Our site is statically built with Jekyll and deployed on Vercel.
To get started, you'll need at least [Ruby](https://www.ruby-lang.org/en/documentation/installation/) 3.4.0 and the [Bundler](https://bundler.io/) gem installed on your machine.
We suggest using the [rbenv](https://github.com/rbenv/rbenv) version manager to install the dependencies.

```bash
# install the Ruby version manager
brew install rbenv ruby-build
rbenv install $(cat .ruby-version)

# set the local Ruby version
rbenv local $(cat .ruby-version)

# install the package manager
gem install bundler
```

<br/>

### Local Installation

1. Clone this repository.
2. Run `bundle install`. It will fetch [Jekyll](http://jekyllrb.com) and its dependencies.

Compatibility issues with your platform? Fear not! Just run `bundle lock --add-platform <platform>`

<br/>

### Jekyll Development Mode

To get the server running:

```bash
jekyll serve [--livereload]
# or, better
bundle exec jekyll serve [--livereload]

# in alternative
bundle exec jekyll build
```

The Jekyll build process will take care of compiling the Sass code and process it with Tailwind.
It makes use of the Tailwind CLI via a [specific Ruby gem](https://github.com/flavorjones/tailwindcss-ruby).
For more info, please see the [Jekyll](http://jekyllrb.com/docs/usage/) and [TailwindCSS](https://tailwindcss.com/) docs.

When you push to `master`, Vercel will build the website and deploy to [https://speckand.tech](https://speckand.tech).
