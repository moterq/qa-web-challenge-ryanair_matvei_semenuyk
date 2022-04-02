import { BookingForm } from "../page/bookingForm.page";
import { Home } from "../page/home.page";
//import { expect } from 'chai';

const bookingForm = new BookingForm();

describe('Payment Screen Form', () => {
    it('1. Card Error (Unable to process your booking)', () => {
        //console.time("Test 'Card Error' took");

        bookingForm.open();

        const email = `test${new Date().getTime() / 1000}@test.com`;

        bookingForm.contactDetails({
            name: 'Name_autotest',
            surname: 'Surname_autotest',
            email: email,
            emailConfirm: email,
            country: 'Poland',
            phone: '123456789'
        })

        bookingForm.paymentMethod({
            cardNumber: '4111111111111111', //cardNumber: '5555555555555555',
            cardtype: 'Visa', // cardtype: 'MasterCard'
            month: '03', // month: '05',
            year: '2024', // year: '2025',          
            cvv: '123', // cvv: '265',
            cardholder: 'NAME USERNAME'
        })

        bookingForm.billingAddress({
            addressFirst: 'Street 1',
            addressSecond: 'Street 2',
            city: 'Biala Podlaska',
            zipCode: '21-500',
            country: 'Poland'
        })

        bookingForm.confirmBook();
        bookingForm.expectCardError();
        //console.time("Test 'Card Error' took");
    });

    /*  */
    it('2. Input Wrappers Validation (Live Empty Field)', () => {

        bookingForm.open();

        bookingForm.clickInputsWithValidation();

        bookingForm.expectContactInputsErrorWrapper();

        bookingForm.expectContactDetailsInputsErrorWrapper();

        bookingForm.expectPaymentMethodInputsErrorWrapper();

        bookingForm.expectBillingAddressInputsErrorWrapper();

    });

    it('3. Input Dirty Validation (Live Mistakes or Dirty Input Data)', () => {

      bookingForm.open();

      const email = 'Ў';

      bookingForm.contactDetails({
          name: 'Ў',
          surname: 'Ў',
          email: email,
          emailConfirm: email,
          country: '',
          phone: ''
      })

      bookingForm.paymentMethod({
          cardNumber: '', 
          cardtype: '', 
          month: '', 
          year: '',          
          cvv: '', 
          cardholder: 'Ў'
      })

      bookingForm.billingAddress({
          addressFirst: 'Ў',
          addressSecond: 'Ў',
          city: 'Ў',
          zipCode: '',
          country: ''
      })

      bookingForm.expectDirtyDataValidation()

    });
    
    it('4. Input Required Validation (After Submit Mistakes or Dirty Input Data)', () => {
      bookingForm.open()
      
      bookingForm.requiredInputsEmptyError()
       
      bookingForm.expectRequiredInputsEmptyError();
      
      const email = 'Ў';
      
      bookingForm.contactDetails({
        name: 'Ў',
        surname: 'Ў',
        email: email,
        emailConfirm: email,
        country: '',
        phone: 'Ў'
    })

    bookingForm.paymentMethod({
        cardNumber: '', 
        cardtype: '', 
        month: '', 
        year: '',          
        cvv: 'Ў', 
        cardholder: 'Ў'
    })

    bookingForm.billingAddress({
        addressFirst: 'Ў',
        addressSecond: 'Ў',
        city: 'Ў',
        zipCode: '',
        country: ''
    })

    bookingForm.expectInputsOneInvalidCharacterError()

    bookingForm.contactDetails({
      name: 'ЎЎ',
      surname: 'ЎЎ',
      email: email,
      emailConfirm: email,
      country: '',
      phone: 'ЎЎЎЎЎ'
  })

    bookingForm.expectInputsInvalidCharacterLetterError();
    });
    
})


    