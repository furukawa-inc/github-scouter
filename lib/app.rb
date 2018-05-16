require 'sinatra'
require 'sinatra/reloader'
require 'mechanize'
require 'json'

get '/' do
  send_file File.join(settings.public_dir, 'index.html')
end

post '/post_id' do
  params = JSON.parse request.body.read
  agent = Mechanize.new
  dom = agent.get("https://github.com/users/#{params['user_name']}/contributions")

  rects = dom.search('svg g g rect')

  all_fill = []

  rects.each do |rect|
    all_fill << rect.get_attribute(:fill).slice!(1, 6).split('').each { |string| conversion string }.join.hex
  end

  all_fill.inject { |sum, n| sum + n }.to_json
end

def conversion(string)
  color_code_a_digit = string
  color_code_a_digit_index = ([*'0'..'10'] + [*'a'..'f']).index(color_code_a_digit)
  ([*'0'..'10'] + [*'a'..'f'])[-(color_code_a_digit_index+1)]
end

