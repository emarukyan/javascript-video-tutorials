

const getTheMoneyEarnedByTheAgent = (coupons) => {
    let earnedMoney = 0
    if (coupons.length !== 0) {
      return coupons.map(coupon => {
        earnedMoney = earnedMoney + coupon.TotalInvoicePrice / 100 * config.salesAgentRevenuePercent
        return earnedMoney
      })[coupons.length - 1].toFixed(2)
    }
    return earnedMoney
  }