FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    admin { false }
    title { Faker::Job.title }
  end
end
