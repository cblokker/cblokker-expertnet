class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.string :industry
      t.string :photo_asset_path

      t.timestamps
    end
  end
end
