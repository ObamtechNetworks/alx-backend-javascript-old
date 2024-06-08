describe('Teacher Interface', function () {
    it('should create a teacher object with required properties', function () {
        var teacher = {
            firstName: 'John',
            fullTimeEmployee: false,
            lastName: 'Doe',
            location: 'London',
        };
        expect(teacher.firstName).toBe('John');
        expect(teacher.lastName).toBe('Doe');
        expect(teacher.fullTimeEmployee).toBe(false);
        expect(teacher.location).toBe('London');
    });
    it('should allow optional properties to be added', function () {
        var teacher = {
            firstName: 'Jane',
            fullTimeEmployee: true,
            lastName: 'Smith',
            location: 'New York',
            yearsOfExperience: 10,
        };
        expect(teacher.yearsOfExperience).toBe(10);
    });
    it('should allow additional properties to be added', function () {
        var teacher = {
            firstName: 'Alice',
            fullTimeEmployee: true,
            lastName: 'Johnson',
            location: 'San Francisco',
            contract: false,
            specialty: 'Math'
        };
        expect(teacher.contract).toBe(false);
        expect(teacher.specialty).toBe('Math');
    });
});
//# sourceMappingURL=teacher.test.js.map