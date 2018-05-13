require 'mechanize'

USER_ID = 't-kusakabe'

agent = Mechanize.new
dom = agent.get("https://github.com/users/#{USER_ID}/contributions")

rects = dom.search('svg g g rect')

all_fill = []

rects.each do |rect|
  all_fill << rect.get_attribute(:fill).slice!(1, 6).hex
end

puts all_fill.inject { |sum, n| sum + n }
