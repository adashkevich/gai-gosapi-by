class GaiMailer < ApplicationMailer
  default from: 'andrew.daskhevich@yandex.ru'

  def report_email
    @report = params[:report]
    @organization = Organization.where(city_id: @report.city_id).first
    mail(to: @report.reporter_email, subject: 'Сообщение о нарушении правил остановки и стоянки транспортных средств')
  end
end
