require_relative 'boot'

require "rails"
require 'mongoid'

require "active_model/railtie"
require "active_job/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
require "rails/test_unit/railtie"

Mongoid.load!('config/mongoid.yml')

Bundler.require(*Rails.groups)

module Tourneysite
  class Application < Rails::Application
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
  end
end
