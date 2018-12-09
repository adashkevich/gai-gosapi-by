class Report < ApplicationRecord

  has_many :photos
  belongs_to :city

  accepts_nested_attributes_for :photos
end
