class HomeController < ApplicationController
  def index
    @server_config = ServerConfig.load
    @title = @server_config[:site_title]
  end

  private
end
