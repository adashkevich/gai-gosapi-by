class AddReportReferenceToCity < ActiveRecord::Migration[5.1]
  def change
    add_reference :reports, :city, foreign_key: true
  end
end
