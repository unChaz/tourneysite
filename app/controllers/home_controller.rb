class HomeController < ApplicationController
  def index
    @title = server_config[:site_title]
  end

  private

  def server_config
    @server_config ||= ServerConfig.load
  end
end
