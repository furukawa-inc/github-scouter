require 'net/http'
require 'mechanize'

# git_url = "https://github.com/users/#{USER_ID}/contributions"
# dom = Net::HTTP.get_print(URI.parse(git_url))

USER_ID = 't-kusakabe'

agent = Mechanize.new
dom = agent.get("https://github.com/users/#{USER_ID}/contributions")

puts dom.search('svg')
