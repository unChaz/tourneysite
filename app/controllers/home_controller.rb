class HomeController < ApplicationController
  before_filter :authenticate_user!

  def index
    @server_config = ServerConfig.load
    @title = @server_config[:site_title]
  end

  private
end
