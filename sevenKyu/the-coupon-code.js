/*Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
 assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
    assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false)
    //entered code needs to equal correct code // current date needs to be less than expiration date*/

    function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
        let a = new Date(currentDate)
        let b = new Date(expirationDate)
        return enteredCode===correctCode && a<=b ? true : false
      } 