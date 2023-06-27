import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

defineRule('required', value => {
    if (!value || !value.length) {
        return 'გთხოვთ, შეიყვანოთ იმეილი';
    }
    return true;
});

defineRule('radio', value => {
    if (!value || !value.length) {
        return 'გთხოვთ, შეავსოთ ველი';
    }
    return true;
});

defineRule('boolean', value => {
    if (value === null) {
        return 'გთხოვთ, შეავსოთ ველი';
    }
    return true;
})

defineRule('min', value => {
    if (!value || value.length < 3) {
        return 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
    }
    return true;
});

defineRule('max', value => {
    if (value.length > 255) {
        return 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
    }
    return true;
});

defineRule('alpha', (value) => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(value)) {
        return 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანურ ასოებს';
    }
    return true;
});

defineRule('minlast', value => {
    if (!value || value.length < 3) {
        return 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
    }
    return true;
});

defineRule('maxlast', value => {
    if (value.length > 255) {
        return 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან';
    }
    return true;
});

defineRule('alphalast', (value) => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(value)) {
        return 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანურ ასოებს';
    }
    return true;
});


defineRule('email', value => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'თქვენ მიერ შეყვანილი მეილი არასწორია!';
    }

    if (!/@redberry\.ge$/i.test(value)) {
        return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
    }
    return true;
});
