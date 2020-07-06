FactoryBot.define do
  factory :company do
    name { Faker::Company.name }
    industry { Faker::Job.field }
    description { Faker::Company.catch_phrase }
    photo_asset_path { "companies/company_1.png" }
  end
end
