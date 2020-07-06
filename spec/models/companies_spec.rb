require "rails_helper"

describe Company do
 describe "#full_photo_asset_path" do
  let!(:company) { create :company, photo_asset_path: "companies/company_1.png" }
  it "(example test) builds the path to the company logo" do
    expect(company.full_photo_asset_path).to start_with("/assets/companies/company_1")
  end
 end
end
