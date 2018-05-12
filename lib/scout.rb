require 'net/http'
require 'mechanize'

agent = Mechanize.new
dom = agent.get("https://github.com/users/#{USER_ID}/contributions")

puts dom.search('svg')
