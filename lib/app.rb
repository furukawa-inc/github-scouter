require 'sinatra'
require 'sinatra/reloader'
require 'mechanize'

get '/' do
  puts settings.public_dir
  send_file File.join(settings.public_dir, 'index.html')
end

post '/post_id' do
  agent = Mechanize.new
  dom = agent.get("https://github.com/users/#{params[:user_name]}/contributions")

  rects = dom.search('svg g g rect')

  all_fill = []

  rects.each do |rect|
    all_fill << rect.get_attribute(:fill).slice!(1, 6).hex
  end

  puts all_fill.inject { |sum, n| sum + n }
  all_fill.inject { |sum, n| sum + n }.to_json
end
