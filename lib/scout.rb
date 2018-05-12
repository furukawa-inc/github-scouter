require 'net/http'

git_url = "https://github.com/users/#{USER_ID}/contributions"
dom = Net::HTTP.get_print(URI.parse(git_url))

puts dom
