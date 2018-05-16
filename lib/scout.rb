require 'net/http'
require 'mechanize'

USER_ID = ''

agent = Mechanize.new
dom = agent.get("https://github.com/users/#{USER_ID}/contributions")

rects = dom.search('svg g g rect')

all_fill = []

def conversion(string)
  color_code_a_digit = string
  color_code_a_digit_index = ([*'0'..'10'] + [*'a'..'f']).index(color_code_a_digit)
  ([*'0'..'10'] + [*'a'..'f'])[-(color_code_a_digit_index+1)]
end

rects.each do |rect|
  all_fill << rect.get_attribute(:fill).slice!(1, 6).split('').each { |string| conversion string }.join.hex
end

puts all_fill.inject { |sum, n| sum + n }

