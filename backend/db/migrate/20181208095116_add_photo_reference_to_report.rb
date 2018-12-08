class AddPhotoReferenceToReport < ActiveRecord::Migration[5.1]
  def change
    add_reference :photos, :report, foreign_key: true
  end
end
