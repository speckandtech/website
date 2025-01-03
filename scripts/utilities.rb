require "tailwindcss/ruby"

module Jekyll
  def self.Tailwindcss
    return Tailwindcss::Ruby.executable
  end
end

def cmd(command, verbose: false, fallback: nil)
  if verbose
    system command
  else
    system "#{command} > /dev/null 2>&1"
  end

  status = $?.exitstatus
  unless status == 0
    message = "\n\x1b[31mError: `#{command}` failed with exit status #{status}.\x1B[m\n"
    message += "\n#{fallback}" if fallback
    puts message + "\n\n"
    exit 1
  end

  return !status
end
