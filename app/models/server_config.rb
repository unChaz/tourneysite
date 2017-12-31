class ServerConfig
  include Mongoid::Document
  field :site_title, type: String
  field :logo_image, type: String
  field :live_date, type: DateTime
  field :twitter_widget_id, type: String
  field :twitter_hashtag, type: String
  field :twitch_channel, type: String

  def self.load
    config = self.first
    if config.nil?
      config = self.new
      config.save
    end
    config
  end
end
