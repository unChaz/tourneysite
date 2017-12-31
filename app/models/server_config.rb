class ServerConfig
  def self.load
    {
      site_title: 'Ting Open',
      live_date: DateTime.new(2018,1,10,1).to_s,
      twitter_widget_id: '947533030889082880',
      twitter_hashtag: 'TingOpen',
      twitch_channel: 'axeltoss',
      start_time_string: 'January 9, 2018 5PM PST'
    }
  end
end
