require "rails_helper"

describe Expert do
  let!(:expert) { create :expert }
  it "(example test) holds the name and email for an expert" do
    expect(expert.name).to be
    expect(expert.email).to be
  end
end
