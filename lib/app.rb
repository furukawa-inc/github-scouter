require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'mechanize'

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
