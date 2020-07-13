class Expert < ActiveRecord::Base
  has_many :contacts, dependent: :destroy
  has_many :users, through: :contacts

  def full_photo_asset_path
    ActionController::Base.helpers.asset_path(photo_asset_path)
  end
end
