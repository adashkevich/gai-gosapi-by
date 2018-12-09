# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.create!([
    {id: 1, name: 'Минск'},
    {id: 2, name: 'Гомель'},
    {id: 3, name: 'Витебск'},
    {id: 4, name: 'Брест'},
    {id: 5, name: 'Гродно'},
    {id: 6, name: 'Могилёв'},
])

Organization.create!([
    {id: 1, chief: 'Дорошко Сергею Ивановичу', email: 'pismo@guvd.by', city_id: 1, name: 'ГУВД Минского горисполкома'},
    {id: 2, chief: 'Васильеву Александру Павловичу', email: 'uvd@mail.gomel.by', city_id: 2, name: 'УВД Гомельского облисполкома'},
    {id: 3, chief: 'Астрейко Александру Вячеславовичу', email: 'uvdbrest@brest.by', city_id: 4, name: 'УВД Брестского облисполкома'},
    {id: 4, chief: 'Синявскому Вадиму Ивановичу', email: 'uvd@mail.grodno.by', city_id: 5, name: 'УВД Гродненского облисполкома'},
    {id: 5, chief: 'Кубракову Ивану Владимировичу', email: 'ozgs@uvd.vitebsk.gov.by', city_id: 3, name: 'УВД Витебского облисполкома'},
    {id: 6, chief: 'Щербачене Игорю Владимировичу', email: 'uvd@mogilev.by', city_id: 6, name: 'УВД Могилевского облисполкома'},
])