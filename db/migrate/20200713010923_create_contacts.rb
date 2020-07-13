class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.references :user, foreign_key: true
      t.references :expert, foreign_key: true
      t.timestamps
    end

    add_index :contacts, [:user_id, :expert_id], unique: true
  end
end
