# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

experts = Array.new(50) do
  {
    name: Faker::Name.name,
    email: Faker::Internet.email,
    title: Faker::Job.title,
    company: Faker::Company.name,
    linkedin_url: "https://www.linkedin.com",
    photo_asset_path: "experts/portrait_#{rand(1..7)}.jpeg"
  }
end

companies = Array.new(50) do
  {
    name: Faker::Company.name,
    industry: Faker::Job.field,
    photo_asset_path: "companies/company_#{rand(1..12)}",
    description: Faker::Company.catch_phrase
  }
end

users = Array.new(5) do
  {
    name: Faker::Name.name,
    email: Faker::Internet.email,
    admin: false,
    title: Faker::Job.title
  }
end

Expert.create!(experts)
Company.create!(companies)
User.create!(users)
