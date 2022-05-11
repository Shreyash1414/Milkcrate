
import { trailing } from "../api/trail.js";

export function setDairyRegForm() {
    const container = document.querySelector('#signUP');
    const dairyRegForm = container.querySelector('.signup-form');
    const firstName = dairyRegForm.querySelector('#firstname');
    const lastName = dairyRegForm.querySelector('#lastname');
    const aadharNumber = dairyRegForm.querySelector('#adharno');
    const age = dairyRegForm.querySelector('#age');
    const phoneNumber = dairyRegForm.querySelector('#phone');
    const alternateNumber = dairyRegForm.querySelector('#phone2');
    const dairyName = dairyRegForm.querySelector('#dairyname');
    const dairyLocation = dairyRegForm.querySelector('#location');
    const taluka = dairyRegForm.querySelector('#Tal');
    const district = dairyRegForm.querySelector('#District');


    // Account Details


    const email = dairyRegForm.querySelector('#email');
    const password = dairyRegForm.querySelector('#password ');
    const confirmPass = dairyRegForm.querySelector('#confirm-password');


    dairyRegForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // checkInputs();

        let dairyRegInfo = {
            ownerFirstName: firstName.value,
            ownerLastName: lastName.value,
            ownerAadharNumber: aadharNumber.value,
            ownerGender : document.querySelector('input[name="gender"]:checked').value,
            ownerAge: age.value,
            ownerPhoneNumber: phoneNumber.value,
            ownerAltNumber: alternateNumber.value,
            ownerDairyName: dairyName.value,
            ownerDairyLocation: dairyLocation.value,
            ownerTaluka: taluka.value,
            ownerDistrict: district.value,
            accEmail : email.value,
            accPass : password.value,
            accConfPass : confirmPass.value,
            
        };
        container.style.display = "none";

        trailing(dairyRegInfo);
    });
}
