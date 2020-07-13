class Contact < ActiveRecord::Base
  belongs_to :user
  belongs_to :expert

  validates :user_id, uniqueness: { scope: :expert_id }

  scope :by_user, -> (user) { find_by(user: user) }
end
