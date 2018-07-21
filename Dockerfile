FROM ruby:2.5.0-alpine

WORKDIR /app

RUN apk update && \
    apk --no-cahce add \
      build-base

COPY Gemfile Gemfile.lock ./

RUN bundle install
