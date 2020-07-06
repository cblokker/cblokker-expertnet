class CreateExperts < ActiveRecord::Migration[5.2]
  def change
    create_table :experts do |t|
      t.string :name
      t.string :email
      t.string :title
      t.string :company
      t.string :linkedin_url
      t.string :photo_asset_path

      t.timestamps
    end
  end
end
