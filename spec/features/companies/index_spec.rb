require "rails_helper"

describe "Home page", type: :feature, js: true do
  it "shows the home page" do
    visit companies_path

    expect(page).to have_text "First Round Companies"
  end
end
