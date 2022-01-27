class Contact
{
    // gets/sets
    get FullName()
    {
        return this.m_FullName;
    }
    set FullName(fullName)
    {
        this.m_FullName = fullName;
    }
    get ContactNumber()
    {
        return this.m_ContactNumber;
    }
    set ContactNumber(contractNumber)
    {
        this.m_ContactNumber = contractNumber;
    }
    get EmailAddress()
    {
        return this.m_EmailAddress;
    }
    set EmailAddress(emailAddress)
    {
        this.m_EmailAddress = emailAddress;
    }
    // constructor
    constructor(fullName, contactNumber, emailAddress)
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    // public methods

    //overridden methods
    toString()
    {
        return `Full Name: ${this.FullName} \n Contact Number: ${this.ContactNumber} \n Email Address: ${this.EmailAddress}`;
    }
}