class AddBiographyToExperts < ActiveRecord::Migration[5.2]
  def change
  	add_column :experts, :biography, :text
  end
end
