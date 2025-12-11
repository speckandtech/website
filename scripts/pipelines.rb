require "tempfile"
require "fileutils"
require "shellwords"

module Jekyll
  module Pipelines
    class Styling
      # This is a custom pipeline

      def self.static_files(site)
        site.static_files = site.static_files.map! { |file|
          file unless file.path =~ /.*\.(sass|scss)$/i
        }.compact
      end

      def self.perform(site)
        site.pages
          .select { |page| self.filter page }
          .map { |page| self.convert page }
      end

      def self.filter(page)
        excludes = Jekyll::Site.get_config("converters.sass.exclude")
        match_rule = excludes.empty? ? true : !excludes.any? { |pattern| page.path =~ /#{pattern}/i }
        match_extension = page.path =~ /.*\.(sass|scss)$/i

        match_extension && match_rule
      end

      def self.convert(page)
        prefix = Jekyll::Site.get_config("converters.sass.prefix")
        page.content = "#{prefix || ""}\n\n" << page.content

        file = Tempfile.new
        file.write page.content
        file.close

        path = File.join page.site.dest, page.path.sub(/\.(sass|scss)$/, ".css")
        FileUtils.mkdir_p File.dirname(path)
        
        input_path = Shellwords.escape(file.path)
        output_path = Shellwords.escape(path)
        config_path = Shellwords.escape("scripts/tw.config.js")
        cmd "#{Jekyll.Tailwindcss} -i #{input_path} -o #{output_path} -c #{config_path} --minify"
      end
    end
  end
end
