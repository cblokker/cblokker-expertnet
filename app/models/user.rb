class User < ActiveRecord::Base
  has_many :contacts, dependent: :destroy
  has_many :experts, through: :contacts
end
