class Company < ActiveRecord::Base
  def full_photo_asset_path
    ActionController::Base.helpers.asset_path(photo_asset_path)
  end
end
