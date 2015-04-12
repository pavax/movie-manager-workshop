describe('IbanService', function () {

    var IbanService,
        correctIbans = [
            'CH9300762011623852957',
            'CH3900700115201849173'
        ],
        incorrectIbans = [
            'SK9300762011623852957',
            'SK93007620116238529',
            'CH9300762011623852959'
        ];

    beforeEach(function() {
        module('movie-manager');
        inject(function(_IbanService_) {
            IbanService = _IbanService_;
        });
    });

    it('should exist', function() {
        expect(IbanService).not.toBeUndefined();
    });

    it('should validate correct ibans', function() {
        correctIbans.forEach(function(iban) {
            expect(IbanService.validate(iban)).toBe(true);
        });
    });

    it('should validate incorrect ibans', function() {
        incorrectIbans.forEach(function(iban) {
            expect(IbanService.validate(iban)).toBe(false);
        });
    });

});
