#!/usr/bin/env ruby

require "optparse"
require "listen"

options = {}

OptionParser.new do |opts|

  opts.banner = "Usage: style.rb [options]"
  opts.on("--verbose", "Enable verbose mode") do
    options[:verbose] = true
  end

end.parse!

commands = [
  "clear && " \
  "echo 'Compiling CSS and executing Tailwind\n' && " \
  "sass --style=compressed " \
    " assets/css/main.sass " \
    " .css/main.css.tmp ",
  "tailwindcss" \
    " -i .css/main.css.tmp " \
    " -o public/assets/css/main.css " \
    " -c scripts/tw.config.js " \
    " --minify "
    # " --content 'public/*.html' " \
]

# Deployment build command:
#   bundle exec jekyll build && npx tailwindcss -i .css/main.css.tmp -o public/assets/css/main.css -c scripts/tw.config.js --minify

def execute(commands, options, stop)

  unless stop
    commands.each do |command|

      if options[:verbose]
        system(command)
      else
        system("#{command} > /dev/null 2>&1\n\n")
      end

      exit_value = $?.exitstatus

      unless exit_value == 0
        puts "\n\x1b[31mError: #{command.split(" ").first} failed with exit code #{exit_value}\x1B[m\n\n"
        stop = true
      else
        stop = false
      end

    end
  end

end


stop = false

listener = Listen.to("./assets/css", "./templates", "./pages", "./collections") do |modified, added, removed|
  execute commands, options, stop
end

execute commands, options, stop

listener.start

system "clear && echo 'Listening for changes and ready to compile CSS\n'"
sleep
