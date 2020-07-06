FactoryBot.define do
  factory :expert do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    title { Faker::Job.title }
    company { Faker::Company.name }
    linkedin_url { "https://www.linkedin.com" }
    photo_asset_path { "experts/portrait_#{rand(1..7)}.jpeg" }
  end
end
