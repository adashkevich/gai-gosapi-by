class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.string :reporter_name
      t.string :reporter_phone
      t.string :reporter_residence
      t.string :reporter_email
      t.string :car_number
      t.string :place
      t.st_point :location, geographic: true

      t.timestamps
    end
  end
end
