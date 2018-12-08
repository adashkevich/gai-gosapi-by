class Report < ApplicationRecord

  has_many :photos
  belongs_to :city
end
