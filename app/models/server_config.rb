class ServerConfig
  include Mongoid::Document
  field :site_title, type: String
  field :logo_image, type: String
  field :primary_sponsor_image, type: String
  field :site_title, type: String
  field :announce_date, type: DateTime
  field :live_date, type: DateTime
  field :site_title, type: String

  def self.load
    config = self.first
    if config.nil?
      config = self.new
      config.save
    end
    config
  end
end
