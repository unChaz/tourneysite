class ServerConfig
  def self.load
    if ENV['SITE_TITLE'].nil?
      self.set_defaults
    else
      {
        site_title: ENV.fetch('SITE_TITLE') || 'Tourney Site',
        live_date: ENV.fetch('LIVE_DATE') || DateTime.now.to_s,
        twitter_widget_id: ENV.fetch('TWITTER_WIDGET_ID') || '',
        twitter_hashtag: ENV.fetch('TWITTER_HASHTAG') || '',
        twitch_channel: ENV.fetch('TWITCH_CHANNEL') || '',
        start_time_string: ENV.fetch('START_TIME_STRING') || ''
      }
    end
  end

  def self.set_defaults
    ENV['SITE_TITLE'] = 'Ting Open'
    ENV['LIVE_DATE'] = DateTime.new(2018,1,9,12).to_s
    ENV['TWITTER_WIDGET_ID'] = '947533030889082880'
    ENV['TWITTER_HASHTAG'] = 'RocketLeague'
    ENV['TWITCH_CHANNEL'] = 'axeltoss'
    ENV['START_TIME_STRING'] = 'January 9, 2018'
    self.load
  end
end
