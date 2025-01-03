require 'jmespath'

module Jekyll
  class Site

    def self.set_config(config)
      @config = config
    end

    def self.get_config(path)
      return JMESPath.search(path, @config)
    end

  end

  Jekyll::Hooks.register :site, :after_init do |site|
    Jekyll::Site.set_config site.config
  end

end
