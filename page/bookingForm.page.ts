import { expect } from 'chai';
import { assert } from 'chai';

export class BookingForm {

/* MAIN */

    public get dataComponent() {
        return $("/html//form[@id='paymentForm']");
    }
    public get nameContactInput() {
        return $("//form[@id='paymentForm']/rooms-guests-form[@class='payment__fieldset']//rooms-payment-fieldset[@class='guests-form__name']/section[@class='payment-fieldset__container']/div[2]/div[1]/rooms-labeled-field//input[@name='firstName']");
    }
    public get surnameContactInput() {
        return $("//form[@id='paymentForm']/rooms-guests-form[@class='payment__fieldset']//rooms-payment-fieldset[@class='guests-form__name']/section[@class='payment-fieldset__container']/div[2]/div[2]/rooms-labeled-field//input[@name='firstSurname']");
    }
    public get emailContactInput() {
        return $("/html//input[@id='email']");
    }
    public get confirmEmailContactInput() {
        return $("#confirmEmail");
    }
    public get countrySelectContactSelect() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-phone-form[@class='contact-details__section']//rooms-labeled-field//select[@name='country']");
    }
    public get phoneContactInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-phone-form[@class='contact-details__section']//input[@name='phone']");
    }
    public get cardNumberCardInput() {
        return $("/html//input[@id='cardNumber']");
    }
    public get cardTypeCardSelect() {
        return $("/html//select[@id='cardType']");
    }
    public get monthCardSelect() {
        return $("/html//select[@id='month']");
    }
    public get yearCardSelect() {
        return $("/html//select[@id='year']");
    }
    public get cvvCardInput() {
        return $("/html//input[@id='securityCode']");
    }
    public get cardholderCardInput() {
        return $("/html//input[@id='cardholderName']");
    }
    public get addressFirstBillingInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.address1']//rooms-labeled-field//input[@name='street1']")
    }
    public get addressSecondBillingInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.address2']//rooms-labeled-field//input[@name='street2']")
    }
    public get cityBilling() {
        return $("/html//input[@id='city']")
    }
    public get zipCodeBillingInput() {
        return $("/html//input[@id='postcode']");
    }
    public get countryBillingSelect() {
        return $("/html//select[@id='country']");
    }
    public get acceptTermsCheckBox() {
        return $("//form[@id='paymentForm']/div[@class='payment__travel-credit-and-submit']//rooms-terms-and-conditions[@class='payment__terms-and-conditions']/rooms-checkbox//icon[@class='checkbox__check-icon']");
    }
    public get submitButtonBooking() {
        return $("//form[@id='paymentForm']/div[@class='payment__travel-credit-and-submit']//button[@type='submit']");
    }
    public get cardProcessError() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//div[@class='payment-method__error r-form-field__errors']" /*"//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//strong[.=' Unable to process your booking ']"*/);
    }
    public get clearInputValidationError() {
        return $(".labeled-field--error")
    }

    /* REQUIRED WRAPPER ERRORS */

    public get requiredNameContactInput() {
        return $("//form[@id='paymentForm']/rooms-guests-form[@class='payment__fieldset']//rooms-payment-fieldset[@class='guests-form__name']/section[@class='payment-fieldset__container']/div[2]/div[1]/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredSurnameContactInput() {
        return $("//form[@id='paymentForm']/rooms-guests-form[@class='payment__fieldset']//rooms-payment-fieldset[@class='guests-form__name']/section[@class='payment-fieldset__container']/div[2]/div[2]/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredEmailContactInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-email-form[@class='contact-details__section']/rooms-payment-form-input[@placeholder='roomsv2.payment.contact-details.email']//div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperConfirmEmailContactInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-email-form[@class='contact-details__section']/rooms-payment-form-input[@placeholder='roomsv2.payment.contact-details.email-confirm']//div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperPhoneContactInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-phone-form/div[2]/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperCardNumberCardInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-credit-card-number[@class='payment-method-form__card-number']//rooms-payment-form-input[@placeholder='roomsv2.payment.payment-method.card-number']//rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperCardTypeCardSelect() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-select-credit-card-type[@class='payment-method-form__card-type']//rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperMonthCardSelect() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-expiry[@class='payment-method-form__expiry r-form-field']//div[@class='expiry__select-month']/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperYearCardSelect() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-expiry[@class='payment-method-form__expiry r-form-field']//div[@class='expiry__select-year']/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperCvvCardInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-credit-card-security-code[@class='payment-method-form__security-code r-form-field']//rooms-payment-form-error/div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperCardholderCardInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-payment-form-input[@placeholder='roomsv2.payment.payment-method.cardholder']//div[@class='r-form-field__errors']");
    }
    public get requiredErrorWrapperAddressFirstBillingInput() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.address1']//rooms-payment-form-error/div[@class='r-form-field__errors']")
    }
    public get requiredErrorWrapperCityBilling() {
        return $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.city.label']//rooms-payment-form-error/div[@class='r-form-field__errors']")
    }
    public get requiredErrorWrapperAcceptTermsCheckBox() {
        return $("//form[@id='paymentForm']//rooms-terms-and-conditions[@class='payment__terms-and-conditions']/rooms-payment-form-error/div[@class='r-form-field__errors']");
    }

/* OPEN */    
    
    open() {
        browser.setWindowSize(1440, 900);
        browser.url('https://rooms.ryanair.com/ie/en/details/hte/1030031?checkinDate=2022-03-30&checkoutDate=2022-03-31&roomAllocations=2%7C2&regionId=3765&propertyName=InterContinental%20Warsaw,%20an%20IHG%20Hotel&propertyCategory=5&place=Warsaw,%20Masovian%20Voivodeship,%20Poland');
        const alert = browser.isAlertOpen();
        if (alert == true) {
            browser.acceptAlert()
        }      

beforeEach(function() {
    const browserGetLink: any = browser.getUrl();
    browserGetLink.toString();
    const glitchLinkOne = 'https://rooms.ryanair.com/ie/en/payment?paymentInProgress=true';
    const glitchLinkTwo = 'https://rooms.ryanair.com/ie/en/payment';

    let compairedBadBrowserLink: boolean = true;
    let compairedGetLinkResult: boolean = false;
   
    function browserLinkIssue() {
        if (browserGetLink == glitchLinkOne || browserGetLink == glitchLinkTwo) {
            return compairedGetLinkResult = true;
        }
    }
    browserLinkIssue();

    function compareLinks() {
        if (compairedBadBrowserLink == compairedGetLinkResult) {
            return browser.navigateTo('https://rooms.ryanair.com/ie/en/details/hte/1030031?checkinDate=2022-03-30&checkoutDate=2022-03-31&roomAllocations=2%7C2&regionId=3765&propertyName=InterContinental%20Warsaw,%20an%20IHG%20Hotel&propertyCategory=5&place=Warsaw,%20Masovian%20Voivodeship,%20Poland');
        }
    }
    compareLinks()
});

        const cookiePopUp = $("//div[@id='cookie-popup-with-overlay']/div//button[.='Yes, I agree']");
        const bookButton = $(".room-cards .room-cards__room-card--bordered:nth-of-type(1) .ry-button--gradient-blue");
        
        if (cookiePopUp.isExisting()) {
            cookiePopUp.click();
        }

        browser.waitUntil(() => {
            return bookButton.isDisplayed() && bookButton.getText().includes('Book now')
        }, { timeout: 5000, timeoutMsg: 'waitUntill on PreTest-Screen Button => "bookButton"' });

        bookButton.click();
    }

/* Expect Card Error == MAIN TASK */

    contactDetails(options: { name: string; surname: string; email: string; emailConfirm: string; country: string; phone: string; }) {
        this.nameContactInput
            .setValue(options.name);

        this.surnameContactInput
            .setValue(options.surname);

        this.emailContactInput
            .setValue(options.email);

        this.confirmEmailContactInput
            .setValue(options.emailConfirm);

        this.countrySelectContactSelect
            .selectByVisibleText(options.country);

        this.phoneContactInput
            .setValue(options.phone);
    }

    paymentMethod(options: { cardNumber: string; cardtype: string; month: string; year: string; cvv: string; cardholder: string }) {
        this.cardNumberCardInput
            .setValue(options.cardNumber);

        this.cardTypeCardSelect
            .selectByVisibleText(options.cardtype);

        this.monthCardSelect
            .selectByVisibleText(options.month);

        this.yearCardSelect
            .selectByVisibleText(options.year);

        this.cvvCardInput
            .setValue(options.cvv);

        this.cardholderCardInput
            .setValue(options.cardholder);

    }
    billingAddress(options: { addressFirst: string; addressSecond: string; city: string; zipCode: string; country: string }) {
        this.addressFirstBillingInput
            .setValue(options.addressFirst);

        this.addressSecondBillingInput
            .setValue(options.addressSecond);

        this.cityBilling
            .setValue(options.city);

        this.zipCodeBillingInput
            .setValue(options.zipCode);

        this.countryBillingSelect
            .selectByVisibleText(options.country);
    }

    confirmBook() {
        this.acceptTermsCheckBox
            .click();

        this.submitButtonBooking
            .click()
    }

    expectCardError() {
        const cardProcessErrorIsExist = this.cardProcessError.isExisting()  
       
        if (cardProcessErrorIsExist == false) {
            browser.waitUntil(() => {
                return this.cardProcessError.isDisplayed() && this.cardProcessError.getText().includes('Unable to process your booking')
            }, { timeout: 20000, timeoutMsg: 'TIMEOUT BUG IN CARD PROCESS ERROR (MISSING: DIV), FOR SEARCH: => cardProcessErrorIsExist => "./page/bookingForm.page.ts"'});
        };

        const cardProcessErrorHtml = this.cardProcessError.getHTML().toString();
        const cardProcessErrorText = this.cardProcessError.getText().toString();
               
        expect(cardProcessErrorText, 'BUG IN CARD PROCESS ERROR (MISSING: TITLE), FOR SEARCH: => cardProcessError => "./page/bookingForm.page.ts"')
        .to.have.string('Unable to process your booking');       
        expect(cardProcessErrorHtml, 'BUG IN CARD PROCESS ERROR (MISSING: ATTRIBUTE FOR ERROR), FOR SEARCH: => cardProcessError => "./page/bookingForm.page.ts"')
        .to.have.include('data-ref="payment-method-credit-card-error" class="payment-method__error r-form-field__errors"')
    }

/* THE MAIN TASK IS OVER, everything below is just that I accepted a personal challenge for myself 
   to continue testing the application on Angular using WebdriverIO and TS.
   Well, because the test repo has the name 'Challenge'... and I accepted it like a challenge ;D

/* Input Validation */

    clickInputsWithValidation() {
        this.nameContactInput
            .click();

        this.surnameContactInput
            .click();

        this.emailContactInput
            .click();

        this.confirmEmailContactInput
            .click();

        this.cardNumberCardInput
            .click();

        this.cardholderCardInput
            .click();

        this.addressFirstBillingInput
            .click();

        this.cityBilling
            .click();

        this.acceptTermsCheckBox
            .click();

    }

/* Thats challenge gonna to hell || FUN_MODE || for the first time in my life automated Angular with webdriverIO, thats likely fun challenge for me personaly :D */

    expectContactInputsErrorWrapper() {
        browser.addLocatorStrategy('errorWrapperParrentChildSearch', (selector: any) => {
            return document.querySelectorAll(selector)
        })

/* NAME */

/* Trying to reinvent the wheel... and hook onto a wrapper belonging to a specific input with an error */

        const nameContactInputErrorWrapper = browser.custom$('errorWrapperParrentChildSearch', ".guests-form__field:nth-of-type(1) .labeled-field--error");

        let existingNameContactInputErrorWrapperParrent: boolean = false;
        function expectHtmlNameContactErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = nameContactInputErrorWrapper.getHTML().toString();
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('data-ref="guest-details-first-name" formcontrolname="firstName"')) {
                return existingNameContactInputErrorWrapperParrent = true;
            } else {
                return existingNameContactInputErrorWrapperParrent = false;
            }
        }
        expectHtmlNameContactErrorWrapper()
        expect(existingNameContactInputErrorWrapperParrent, 'BUG IN NAME ERROR INPUT WRAPPER, FOR SEARCH: => nameContactInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;

/* SURNAME */

        const surnameContactInputErrorWrapper = browser.custom$('errorWrapperParrentChildSearch', ".guests-form__field:nth-of-type(2) .labeled-field--error");

        let existingSurnameContactInputErrorWrapperParrent: boolean = false;
        function expectHtmlSurnameContactErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = surnameContactInputErrorWrapper.getHTML().toString();
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('data-ref="guest-details-first-surname" formcontrolname="firstSurname"')) {
                return existingSurnameContactInputErrorWrapperParrent = true;
            } else {
                return existingSurnameContactInputErrorWrapperParrent = false;
            }
        }
        expectHtmlSurnameContactErrorWrapper()
        expect(existingSurnameContactInputErrorWrapperParrent, 'BUG IN CARD PROCESS ERROR, FOR SEARCH: => surnameContactInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;
    }

    expectContactDetailsInputsErrorWrapper() {

/* EMAIL */ 

        const emailContactDetailsInputErrorWrapper = browser.custom$('errorWrapperParrentChildSearch', ".payment-form-input .labeled-field--error");

        let existingEmailContactDetailsInputErrorWrapperParrent: boolean = false;
        function expectHtmlEmailContactDetailsErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = emailContactDetailsInputErrorWrapper.getHTML().toString();
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('data-ref="contact-details-email-address"')) {
                return existingEmailContactDetailsInputErrorWrapperParrent = true;
            } else {
                return existingEmailContactDetailsInputErrorWrapperParrent = false;
            }
        }
        expectHtmlEmailContactDetailsErrorWrapper()
        expect(existingEmailContactDetailsInputErrorWrapperParrent, 'BUG IN EMAIL ERROR INPUT WRAPPER, FOR SEARCH: => emailContactDetailsInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;

/* CONFIRM EMAIL */

        const confirmEmailContactDetailsInputErrorWrapperParentSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[1]//rooms-contact-details[@class='contact-details']//rooms-payment-form-input[@placeholder='roomsv2.payment.contact-details.email-confirm']//rooms-labeled-field/label[@class='labeled-field labeled-field--error']").getHTML();
        const confirmEmailContactDetailsInputErrorWrapperChildSelector = $("/html//input[@id='confirmEmail']").getHTML();
        let combineSelectors = confirmEmailContactDetailsInputErrorWrapperParentSelector + confirmEmailContactDetailsInputErrorWrapperChildSelector;
        const confirmEmailContactDetailsInputErrorWrapper = combineSelectors.toString();
        console.log('GAVNA' + combineSelectors)

        let existingConfirmEmailContactDetailsInputErrorWrapperParrent: boolean = false;
        function expectHtmlConfirmEmailContactDetailsErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = confirmEmailContactDetailsInputErrorWrapper;
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('id="confirmEmail" data-ref="contact-details-confirm-email-address"')) {
                return existingConfirmEmailContactDetailsInputErrorWrapperParrent = true;
            } else {
                return existingConfirmEmailContactDetailsInputErrorWrapperParrent = false;
            }
        }
        expectHtmlConfirmEmailContactDetailsErrorWrapper()
        expect(existingConfirmEmailContactDetailsInputErrorWrapperParrent, 'BUG IN CONFIRM_EMAIL ERROR INPUT WRAPPER, FOR SEARCH: => confirmEmailContactDetailsInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;
    }

/* CARD NUMBER */

    expectPaymentMethodInputsErrorWrapper() {
        const cardNumberInputErrorWrapperParentSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-credit-card-number[@class='payment-method-form__card-number']//rooms-payment-form-input[@placeholder='roomsv2.payment.payment-method.card-number']//rooms-labeled-field/label[@class='labeled-field labeled-field--error']")
            .getHTML();
        const cardNumberInputErrorWrapperChildSelector = $("/html//input[@id='cardNumber']")
            .getHTML();
        let cardNumberCombineSelectors = cardNumberInputErrorWrapperParentSelector + cardNumberInputErrorWrapperChildSelector;
        const cardNumberInputErrorWrapper = cardNumberCombineSelectors.toString();
        console.log('GAVNA' + cardNumberCombineSelectors)

        let existingCardNumberInputErrorWrapperParrent: boolean = false;
        function expectHtmlCardNumberErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = cardNumberInputErrorWrapper;
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('id="cardNumber" data-ref="anonymous-card__number"')) {
                return existingCardNumberInputErrorWrapperParrent = true;
            } else {
                return existingCardNumberInputErrorWrapperParrent = false;
            }
        }
        expectHtmlCardNumberErrorWrapper()
        expect(existingCardNumberInputErrorWrapperParrent, 'BUG IN CARD_NUMBER ERROR INPUT WRAPPER, FOR SEARCH: => cardNumberInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;

 /* CARDHOLDER'S NAME */

        const cardholderInputErrorWrapperParentSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[2]//rooms-payment-method//rooms-payment-cards//rooms-payment-method-form//rooms-credit-card-number[@class='payment-method-form__card-number']//rooms-payment-form-input[@placeholder='roomsv2.payment.payment-method.card-number']//rooms-labeled-field/label[@class='labeled-field labeled-field--error']")
            .getHTML();
        const cardholderInputErrorWrapperChildSelector = $("/html//input[@id='cardNumber']")
            .getHTML();
        let cardholderCombineSelectors = cardholderInputErrorWrapperParentSelector + cardholderInputErrorWrapperChildSelector;
        const cardholderInputErrorWrapper = cardholderCombineSelectors.toString();

        let existingCardholderInputErrorWrapperParrent: boolean = false;
        function expectHtmlCardholderErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = cardholderInputErrorWrapper;
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('id="cardNumber" data-ref="anonymous-card__number"')) {
                return existingCardholderInputErrorWrapperParrent = true;
            } else {
                return existingCardholderInputErrorWrapperParrent = false;
            }
        }
        expectHtmlCardholderErrorWrapper()
        expect(existingCardholderInputErrorWrapperParrent, 'BUG IN CARDHOLDER ERROR INPUT WRAPPER, FOR SEARCH: => cardholderInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;
    }

    expectBillingAddressInputsErrorWrapper() {

 /* FIRST ADDRESS */

        const addressFirstInputErrorWrapperParentSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.address1']//rooms-labeled-field/label[@class='labeled-field labeled-field--error']")
            .getHTML();
        const addressFirstInputErrorWrapperChildSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.address1']//rooms-labeled-field//input[@name='street1']")
            .getHTML();
        let addressFirstCombineSelectors = addressFirstInputErrorWrapperParentSelector + addressFirstInputErrorWrapperChildSelector;
        const addressFirstInputErrorWrapper = addressFirstCombineSelectors.toString();
        console.log('GAVNA' + addressFirstCombineSelectors)

        let existingAddressFirstInputErrorWrapperParrent: boolean = false;
        function expectHtmlAddressFirstErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = addressFirstInputErrorWrapper;
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('id="street1" data-ref="payment-billing-street1"')) {
                return existingAddressFirstInputErrorWrapperParrent = true;
            } else {
                return existingAddressFirstInputErrorWrapperParrent = false;
            }
        }
        expectHtmlAddressFirstErrorWrapper()
        expect(existingAddressFirstInputErrorWrapperParrent, 'BUG IN FIRST_ADDRESS ERROR INPUT WRAPPER, FOR SEARCH: => addressFirstInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;


/* CITY */

        const cityBillingInputErrorWrapperParentSelector = $("//form[@id='paymentForm']/rooms-payment-fieldset[3]//rooms-billing-address//rooms-payment-form-input[@placeholder='roomsv2.payment.billing-address.city.label']//rooms-labeled-field/label[@class='labeled-field labeled-field--error']")
            .getHTML();
        const cityBillingInputErrorWrapperChildSelector = $("/html//input[@id='city']")
            .getHTML();
        let cityBillingCombineSelectors = cityBillingInputErrorWrapperParentSelector + cityBillingInputErrorWrapperChildSelector;
        const cityBillingInputErrorWrapper = cityBillingCombineSelectors.toString();
        console.log('GAVNA' + cityBillingCombineSelectors)

        let existingCityBillingInputErrorWrapperParrent: boolean = false;
        function expectHtmlCityBillingErrorWrapper() {
            let savedElementString: string = 'undefined';
            savedElementString = cityBillingInputErrorWrapper;
            if (savedElementString.includes('class="labeled-field labeled-field--error"') && savedElementString.includes('id="city" data-ref="payment-billing-city"')) {
                return existingCityBillingInputErrorWrapperParrent = true;
            } else {
                return existingCityBillingInputErrorWrapperParrent = false;
            }
        }
        expectHtmlCityBillingErrorWrapper()
        expect(existingCityBillingInputErrorWrapperParrent, 'BUG IN CITY ERROR INPUT WRAPPER, FOR SEARCH: => cityBillingInputErrorWrapper => "./page/bookingForm.page.ts"')
        .to.be.true;
    }

/* LIVE DIRTY DATA */

    expectDirtyDataValidation(){
       const nameContactInputDirtyClassAttribute = this.nameContactInput.getAttribute('class');
       expect(nameContactInputDirtyClassAttribute, 'BUG IN NAME DIRTY INPUT DATA, FOR SEARCH: => nameContactInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty')

       const surnameContactInputDirtyClassAttribute = this.surnameContactInput.getAttribute('class');
       expect(surnameContactInputDirtyClassAttribute, 'BUG IN SURNAME DIRTY INPUT DATA, FOR SEARCH: => surnameContactInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty')

       const emailContactInputDirtyClassAttribute = this.emailContactInput.getAttribute('class');
       expect(emailContactInputDirtyClassAttribute, 'BUG IN EMAIL DIRTY INPUT DATA, FOR SEARCH: => emailContactInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty')
       
       const confirmEmailContactInputDirtyClassAttribute = this.confirmEmailContactInput.getAttribute('class');
       expect(confirmEmailContactInputDirtyClassAttribute, 'BUG IN CONFIRM_EMAIL DIRTY INPUT DATA, FOR SEARCH: => confirmEmailContactInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty')

       const cardholderInputDirtyClassAttribute = this.cardholderCardInput.getAttribute('class');
       expect(cardholderInputDirtyClassAttribute, 'BUG IN CARDHOLDER DIRTY INPUT DATA, FOR SEARCH: => cardholderInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty')

       const addressFirstBillingInputDirtyClassAttribute = this.addressFirstBillingInput.getAttribute('class');
       expect(addressFirstBillingInputDirtyClassAttribute, 'BUG IN ADDRESS_FIRST DIRTY INPUT DATA, FOR SEARCH: => addressFirstBillingInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty');
     
       const addressSecondBillingInputDirtyClassAttribute = this.addressSecondBillingInput.getAttribute('class');
       expect(addressSecondBillingInputDirtyClassAttribute, 'BUG IN ADDRESS_SECOND DIRTY INPUT DATA, FOR SEARCH: => addressSecondBillingInputDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-dirty ng-invalid');
 
       const cityBillingDirtyClassAttribute = this.cityBilling.getAttribute('class');
       expect(cityBillingDirtyClassAttribute, 'BUG IN CITY_BILLING DIRTY INPUT DATA, FOR SEARCH: => cityBillingDirtyClassAttribute => "./page/bookingForm.page.ts"')
       .to.have.string('ng-invalid ng-dirty');
    }

/* REQUIRED EMPTY INPUT VALIDATION */

    requiredInputsEmptyError() {       
        this.submitButtonBooking.click()
    }

    expectRequiredInputsEmptyError() {        
        expect(this.requiredNameContactInput.getHTML(), 'BUG IN NAME REQUIRED INPUT DATA, FOR SEARCH: => requiredNameContactInput => "./page/bookingForm.page.ts"')
        .to.be.include('data-ref="guest-details-first-name__error--required"');

        expect(this.requiredSurnameContactInput.getHTML(), 'BUG IN SURNAME REQUIRED INPUT DATA, FOR SEARCH: => requiredSurnameContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="guest-details-first-surname__error--required"')

        expect(this.requiredEmailContactInput.getHTML(), 'BUG IN EMAIL REQUIRED INPUT DATA, FOR SEARCH: => requiredEmailContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-email-address__error--required"')

        expect(this.requiredErrorWrapperConfirmEmailContactInput.getHTML(), 'BUG IN CONFIRM_EMAIL REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperConfirmEmailContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-confirm-email-address__error--required"')

        expect(this.requiredErrorWrapperPhoneContactInput.getHTML(), 'BUG IN PHONE REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperPhoneContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-phone-number__error--required"')

        expect(this.requiredErrorWrapperCardNumberCardInput.getHTML(), 'BUG IN CARD_NUMBER REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardNumberCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="anonymous-card__number__error--required"')

        expect(this.requiredErrorWrapperCardTypeCardSelect.getHTML(), 'BUG IN CARD_TYPE REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardTypeCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="card-type__error--required"')

        expect(this.requiredErrorWrapperMonthCardSelect.getHTML(), 'BUG IN MONTH REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperMonthCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="expiry-month__error--required"')

        expect(this.requiredErrorWrapperYearCardSelect.getHTML(), 'BUG IN YEAR REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperYearCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="expiry-year__error--required"')

        expect(this.requiredErrorWrapperCvvCardInput.getHTML(), 'BUG IN CVV REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCvvCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="security-code__error--required"')

        expect(this.requiredErrorWrapperCardholderCardInput.getHTML(), 'BUG IN CARDHOLDER REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardholderCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="anonymous-card__holder-name__error--required"')

        expect(this.requiredErrorWrapperAddressFirstBillingInput.getHTML(), 'BUG IN FIRST_ADDRESS REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperAddressFirstBillingInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="payment-billing-street1__error--required"')

        expect(this.requiredErrorWrapperAcceptTermsCheckBox.getHTML(), 'BUG IN ACCEPT_CHECKBOX REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperAcceptTermsCheckBox => "./page/bookingForm.page.ts"').
        to.be.include('payment-terms-and-conditions__error--required')  
    }

/* REQUIRED DATA/CHARACTER INPUT VALIDATION */

    expectInputsOneInvalidCharacterError() {        
        expect(this.requiredNameContactInput.getHTML(), 'BUG IN NAME REQUIRED INPUT DATA, FOR SEARCH: => requiredNameContactInput => "./page/bookingForm.page.ts"')
        .to.be.include('data-ref="guest-details-first-name__error');

        expect(this.requiredSurnameContactInput.getHTML(), 'BUG IN SURNAME REQUIRED INPUT DATA, FOR SEARCH: => requiredSurnameContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="guest-details-first-surname__error')

        expect(this.requiredEmailContactInput.getHTML(), 'BUG IN EMAIL REQUIRED INPUT DATA, FOR SEARCH: => requiredEmailContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-email-address__error')

        expect(this.requiredErrorWrapperConfirmEmailContactInput.getHTML(), 'BUG IN CONFIRM_EMAIL REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperConfirmEmailContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-confirm-email-address__error')

        expect(this.requiredErrorWrapperPhoneContactInput.getHTML(), 'BUG IN PHONE REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperPhoneContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-phone-number__error')

        expect(this.requiredErrorWrapperCardNumberCardInput.getHTML(), 'BUG IN CARD_NUMBER REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardNumberCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="anonymous-card__number__error')

        expect(this.requiredErrorWrapperCardTypeCardSelect.getHTML(), 'BUG IN CARD_TYPE REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardTypeCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="card-type__error')

        expect(this.requiredErrorWrapperMonthCardSelect.getHTML(), 'BUG IN MONTH REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperMonthCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="expiry-month__error')

        expect(this.requiredErrorWrapperYearCardSelect.getHTML(), 'BUG IN YEAR REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperYearCardSelect => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="expiry-year__error')

        expect(this.requiredErrorWrapperCvvCardInput.getHTML(), 'BUG IN CVV REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCvvCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="undefined__error--')

        expect(this.requiredErrorWrapperCardholderCardInput.getHTML(), 'BUG IN CARDHOLDER REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperCardholderCardInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="anonymous-card__holder-name__error')

        expect(this.requiredErrorWrapperAddressFirstBillingInput.getHTML(), 'BUG IN FIRST_ADDRESS REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperAddressFirstBillingInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="payment-billing-street1__error')

        expect(this.requiredErrorWrapperAcceptTermsCheckBox.getHTML(), 'BUG IN ACCEPT_CHECKBOX REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperAcceptTermsCheckBox => "./page/bookingForm.page.ts"').
        to.be.include('payment-terms-and-conditions__error')  
    }

/* REQUIRED DATA/CHARACTER INPUT VALIDATION {2+ SYMBOLS} */

    expectInputsInvalidCharacterLetterError() {        
        expect(this.requiredNameContactInput.getHTML(), 'BUG IN NAME REQUIRED INPUT DATA, FOR SEARCH: => requiredNameContactInput => "./page/bookingForm.page.ts"')
        .to.be.include('data-ref="guest-details-first-name__error');

        expect(this.requiredSurnameContactInput.getHTML(), 'BUG IN SURNAME REQUIRED INPUT DATA, FOR SEARCH: => requiredSurnameContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="guest-details-first-surname__error')

        expect(this.requiredErrorWrapperPhoneContactInput.getHTML(), 'BUG IN PHONE REQUIRED INPUT DATA, FOR SEARCH: => requiredErrorWrapperPhoneContactInput => "./page/bookingForm.page.ts"').
        to.be.include('data-ref="contact-details-phone-number__error')   
    }
}


   