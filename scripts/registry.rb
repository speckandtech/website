Jekyll::Hooks.register :site, :post_render do |site|
  Jekyll::Pipelines::Styling.static_files site
end

Jekyll::Hooks.register :site, :post_write do |site|
  Jekyll::Pipelines::Styling.perform site
end
