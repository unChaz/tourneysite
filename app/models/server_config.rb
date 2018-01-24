class ServerConfig
  def self.load
    {
      site_title: 'Ting Open',
      live_date: DateTime.new(2018,1,30,15,0,0,'-7').to_s,
      stream_date: DateTime.new(2018,1,11,13,45,0,'-7').to_s,
      twitter_widget_id: '947533030889082880',
      twitter_hashtag: 'TingOpen',
      twitch_channel: 'axeltoss',
      start_time_string: 'January 30, 11AM PST'
    }
  end
end
