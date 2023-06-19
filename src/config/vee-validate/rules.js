import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});

// defineRule('email', value => {
//     // Field is empty, should pass
//     if (!value || !value.length) {
//         return true;
//     }
//     // Check if email
//     if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
//         return 'This field must be a valid email';
//     }
//     return true;
// });

defineRule('required', required);
defineRule('email', email);