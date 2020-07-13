require "rails_helper"

describe User, type: :model do
  let(:user) { create(:user) }

  it "(example test) holds the name and email for an user" do
    expect(user.name).to be
    expect(user.email).to be
  end
end
