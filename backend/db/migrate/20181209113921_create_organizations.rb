class CreateOrganizations < ActiveRecord::Migration[5.1]
  def change
    create_table :organizations do |t|
      t.string :chief
      t.string :name
      t.string :subdivisions
      t.string :email

      t.timestamps
    end

    add_reference :organizations, :city, foreign_key: true
  end
end
