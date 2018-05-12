require 'net/http'
require 'mechanize'

USER_ID = ''

agent = Mechanize.new
dom = agent.get("https://github.com/users/#{USER_ID}/contributions")

rects = dom.search('svg g g rect')

rects.each do |rect|
  puts rect.get_attribute(:fill)
end
