const Mail = require('../services/Mail')

class PurchaseEmail {
  get key () {
    return 'PruchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Arthur Grigoletto" <arthur@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseEmail()
